# AGENTS.md

This file provides guidance to AI coding assistants working with code in this repository.

## Architecture

The codebase follows hexagonal architecture (ports & adapters). Each layer may only depend on layers listed below it — never on layers above.

```
app/            ← Next.js pages: routing, Next.js exports only (generateStaticParams, generateMetadata, dynamic)
ui-kit/         ← React components and page components; no Next.js framework code, no infrastructure imports
usecases/       ← Use cases and services; the only layer allowed to import from infrastructure
infrastructure/ ← External adapters: file-system repositories, MDX pipeline (remark/rehype plugins)
entities/         ← Pure types and schemas (Zod); no external lib imports, no infrastructure imports
config/         ← Static, environment-independent constants; no imports from any other layer, no external libs
```

### Layer rules

- **`entities/`** — no imports from any other internal layer or from external libraries. Only Zod schemas and derived TypeScript types.
- **`infrastructure/`** — implements adapters for the outside world (file system, remark, rehype, shiki). Imports from `entities/` for types only. Never imported by `entities/`, `ui-kit/`, `app/`, or `usecases/` other than through `usecases/`.
- **`usecases/`** — defines use cases (e.g. `getAllArticles`, `getPaginatedArticles`). Calls `read*` functions from `infrastructure/` and exposes clean, named functions to the rest of the app. Pagination and sorting logic live here.
- **`ui-kit/`** — React components. Imports from `entities/` (types), `usecases/` (services), and `config/` (constants). No direct infrastructure imports.
- **`app/`** — Next.js App Router pages. Thin wrappers: imports from `usecases/` and `ui-kit/`, never from `infrastructure/` directly.
- **`config/`** — plain constants with no runtime dependency on request/environment context (e.g. hardcoded social links). Not for values that legitimately vary per environment — those stay as `process.env` reads (e.g. `PUBLIC_SITE_URL` in `app/layout.tsx`). Importable by any layer; imports nothing itself.

### Ports & adapters

Infrastructure exposes low-level `read*` functions (raw I/O). Application wraps them into named use cases.

| Adapter (I/O) | Function | Use cases in `usecases/` |
|---|---|---|
| `infrastructure/articles/articles.repository.ts` | `readArticles()` | `getAllArticles`, `getLastArticles` (sorted + limited), `getPaginatedArticles`, `getTotalArticlePages` |
| `infrastructure/authors/authors.repository.ts` | `readAuthors()` | `getAllAuthors` |
| `infrastructure/mdx/mdx-utils.ts` | `remarkPlugins`, `rehypePlugins` | re-exported from `usecases/mdx.ts` |

### Directory map

| Path | Role |
|---|---|
| `src/config/` | Static constants (e.g. `social-links.ts`) — no `process.env`, no external libs |
| `src/entities/{articles,authors}/` | Zod schemas and TypeScript types |
| `src/usecases/` | Use cases: data access, pagination, MDX config |
| `src/infrastructure/{articles,authors}/` | Repository functions reading from `src/content/` |
| `src/infrastructure/mdx/` | MDX plugin configuration (`mdx-utils.ts`) |
| `src/infrastructure/mdx/plugins/` | Individual remark/rehype plugin wrappers |
| `src/ui-kit/components/atoms/MdxAnchor/` | MDX anchor override component (ui-kit, not infrastructure) |
| `src/ui-kit/components/atoms/MdxPre/` | MDX pre/code override component (ui-kit, not infrastructure) |
| `src/ui-kit/` | Design system components, feature components, page components |
| `src/ui-kit/pages/` | Full-page React components rendered by `app/` pages |
| `src/app/` | Next.js routes — one `page.tsx` per route, minimal logic |
| `src/content/` | MDX source files (articles, authors) |

## Code Conventions

Biome enforces: double quotes, semicolons, no `any`, no `console.log` (only `console.warn`/`console.error`), imports ordered alphabetically by group (builtin → external → internal → parent → sibling → index).

### Frontend

- No `style` attributes in the DOM. Never use inline styles (`style={{...}}` in JSX, or setting `.style.*` in JS/TS) — all styling must come from CSS files (CSS Modules, global stylesheets). This includes dynamic/conditional styling: express it with CSS classes and CSS variables (`var(--...)`) set via `className`, not inline `style` props.

## Testing

- **One `expect` per test.** Each `it()` block must contain exactly one `expect()` call. Split multi-assertion tests into separate, focused tests.

### Accessibility tests

Playwright + axe-core end-to-end accessibility tests live in `tests/`:

`tests/a11y.spec.ts` runs the same 9 pages (homepage, `/a-propos`, `/mentions-legales`, `/recherche`, `/articles`, `/authors`, `/programmes`, `/reseau`, `/contact`) against both themes (`data-theme="light"` and `data-theme="dark"`), via `pnpm test:ui`.

`tests/a11y-content.spec.ts` audits contributor content instead: it diffs `src/content/articles` against the PR base branch (or the working tree locally) to find new/modified files, then runs axe against the matching `/articles/{slug}` page(s) in both themes. Run locally via `pnpm test:a11y:content`; runs automatically in CI on PRs touching `src/content/**` via `.github/workflows/pr-content-a11y.yml`.

Shared axe/report logic (`runAxe`, `expectNoA11yViolations`, `formatViolations`, `printViolations`) lives in `tests/utils/axe.ts`.

**Standards enforced** (via `.withTags()` in `runAxe`, shared by both suites):

| Tag | Standard |
|---|---|
| `wcag2a` / `wcag2aa` / `wcag2aaa` | WCAG 2.0 A, AA, AAA |
| `wcag21a` / `wcag21aa` | WCAG 2.1 A, AA |
| `wcag22aa` | WCAG 2.2 AA |
| `best-practice` | axe best-practice rules |
| `RGAAv4` | RGAA 4 |

Do not remove this tag list to "run everything" — axe-core disables 16 of its 105 rules by default, and calling `.analyze()` with no tags only runs 89 of them. This tag list runs 93: it force-enables 4 rules that are real and current but opt-in (`target-size` — WCAG 2.2 AA 2.5.8 — plus three AAA rules: `color-contrast-enhanced`, `identical-links-same-purpose`, `meta-refresh-no-exceptions`), while still excluding the 5 deprecated and 7 experimental rules that neither an empty filter nor this list ever runs. Verified with `AxeBuilder`'s `.passes`/`.violations`/`.incomplete`/`.inapplicable` rule IDs.

**Theme seeding:** each test calls `page.addInitScript(() => localStorage.setItem("theme", "light/dark"))` before navigation so the `ToggleTheme` component picks up the correct theme on mount.

**Accessibility design rules** — violations to avoid when writing components:

- Use `var(--font-color)` or `var(--font-color-muted)` for text; never rely on `opacity` to reduce contrast — opacity blends the text toward the background and makes the effective contrast unpredictable across themes.
- Images adjacent to their text label must use `alt=""` to avoid `image-redundant-alt`.
- Content outside `<main>` must be in a semantic landmark. Use `<section aria-labelledby="...">` (not `<div role="region">`) for page-level title banners — Biome enforces native elements over ARIA roles.
- Do not add a second top-level `<header>` (banner landmark); the navigation already owns that role.
- No inline styles at all (see [Frontend](#frontend) conventions above) — use CSS classes/variables (`var(--background-secondary)`) instead of hardcoded rgba values so colors adapt to dark mode.

### Lighthouse tests

`tests/lighthouse.spec.ts` runs `playwright-lighthouse` audits against the same 9 pages as the accessibility tests, checking `performance` (90), `accessibility` (90), `best-practices` (90), and `seo` (90) score thresholds. Run with `pnpm test:lighthouse`.

Each page is audited with three device configurations (`deviceConfigurations`): `mobile` (Lighthouse's default config), `desktop` (`lighthouse/core/config/desktop-config.js`), and `ecoindex` (see below). Each test launches its own Chromium instance with `--remote-debugging-port` (required by Lighthouse's CDP connection) rather than reusing the shared Playwright fixture browser.

The `mobile` config uses Lighthouse's simulated throttling (4x CPU slowdown + slow 4G), which is calibrated against the host machine's raw CPU speed — on GitHub Actions' shared runners `performance` alone can swing 20+ points below a local run of the same build. `desktop` and `ecoindex` disable throttling (`cpuSlowdownMultiplier: 1`) and are the real performance gates at 90; `mobile`'s own thresholds (`mobileThresholds`) drop `performance` from the assertion for this reason, while `opts.onlyCategories` still forces the category to run so it's reported in `lighthouse-report/*-mobile.json` and rolled into `qa-scores.json`.

Performance scores are only meaningful against a production build — run `pnpm build && pnpm start` before `pnpm test:lighthouse`; scores measured against `pnpm dev` (unminified, Turbopack HMR) will be misleadingly low.

This site uses `output: "export"`, so `"start"` serves the static `out/` directory (via `serve`) instead of running `next start`, which does not support static exports. `PAGES_BASE_PATH` (GitHub Pages sub-path) is only set in CI via `actions/configure-pages`, so local builds are root-relative and `pnpm start` serves correctly at `http://localhost:3000`.

### EcoIndex (environmental impact) tests

The `ecoindex` device configuration in `tests/lighthouse.spec.ts` runs Lighthouse with the [`lighthouse-plugin-ecoindex-core`](https://github.com/cnumr/lighthouse-plugin-ecoindex) plugin — the CI-friendly, JSON-exportable counterpart to the [GreenIT-Analysis](https://github.com/cnumr/GreenIT-Analysis) browser extension, from the same organization (CNUMR) and same RWEB 5.0 referential. It adds an `eco-index-*` family of audits (`eco-index-score`, `eco-index-grade`, `eco-index-water`, `eco-index-ghg`, `eco-index-nodes`, `eco-index-requests`, `eco-index-size`) plus ~39 `rweb-*`/`bp-*` best-practice audits (print CSS, cache-control, HTTP/2, minification, inline assets, domain count, etc.) to the Lighthouse report.

Two integration details that are easy to get wrong:

- The plugin needs its own config, not just `opts.plugins`: import `lighthouse-plugin-ecoindex-core/helpers/custom-config` and pass it as `config` to `playAudit`. It wires the custom DOM/network gatherers the `eco-index-*` audits depend on — passing the plugin name via `opts.plugins` alone runs the RWEB best-practice audits fine, but leaves `eco-index-score`/`water`/`ghg`/etc. silently absent from the report.
- `playwright-lighthouse` derives `opts.onlyCategories` from `Object.keys(thresholds)` unless you set it explicitly. Since the plugin's category id is the full package name (`lighthouse-plugin-ecoindex-core` — Lighthouse's plugin loader uses the plugin name verbatim as the category key), the `ecoindex` config entry must explicitly pass `opts: { onlyCategories: [...Object.keys(thresholds), "lighthouse-plugin-ecoindex-core"] }`, or the category gets filtered out and none of the `eco-index-*`/`rweb-*` audits run.
- `eco-index-score`'s `numericValue` is a 0–1 fraction (needs `* 100`, same as `round()` for the other Lighthouse categories); `eco-index-water`/`eco-index-ghg`'s `numericValue` come through as **strings**, not numbers — cast with `Number(...)` before summing, or `totals.water += "2.25"` silently string-concatenates instead of adding.
- `lighthouse-plugin-ecoindex-core` pins its own nested `lighthouse` version, so its exported config's TS type doesn't structurally match this project's `Config` type (mismatched `puppeteer-core` types). The cast in `tests/lighthouse.spec.ts` goes through `unknown` (`as unknown as Config`) — verified safe at runtime, it's a type-only mismatch from the nested dependency, not a real incompatibility.
- It's a devDependency (AGPL-3.0-only license) used only in CI/local audits — never bundled into the shipped `out/` site — so its license doesn't affect distribution.

### QA scores pipeline

`scripts/generate-qa-scores.mjs` (run via `pnpm qa:scores`) aggregates results from `lighthouse-report/*.json` (Lighthouse categories + EcoIndex audits), `storybook-report.json`, and a fresh Axe-core run, then writes `src/content/qa-scores.json`. This file is validated by `QaScoresSchema` (`src/entities/qa-scores/qa-scores.ts`) and read via `getQaScores()` (`src/usecases/qa-scores.ts`) in the root layout, which feeds the Lighthouse/Axe/EcoIndex badges in `Footer.tsx` and the detailed breakdown in `QaScoresDetails.tsx` (rendered on `/a-propos`).

`qa-scores.json` requires all four sections (`lighthouse`, `axe`, `storybook`, `ecoindex`) — the schema has no optional fields, so `pnpm qa:scores` must run the full pipeline (`test:ui` + `test:lighthouse` first) rather than partially. It's committed to the repo and only regenerated by the `QA on demand` GitHub Actions workflow, which commits the refreshed file back to `main`.
