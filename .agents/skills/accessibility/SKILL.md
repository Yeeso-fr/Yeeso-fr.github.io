---
name: accessibility
description: Apply accessibility rules (WCAG 2.0 AAA, WCAG 2.1/2.2 AA, RGAA 4) when writing or reviewing code in src/content (MDX) and src/ui-kit (React/TSX, CSS). Use when adding or editing components, writing MDX articles, adding new pages, or asked to audit a11y, fix accessibility issues, check WCAG/RGAA compliance, add ARIA, fix keyboard navigation, or improve screen reader support.
---

# Accessibility (RGAA 4 / WCAG 2.0 AAA / WCAG 2.2 AA)

Scope: this skill applies **only** to files under `src/content/**/*.mdx` and `src/ui-kit/**/*.{tsx,css}`. Skip everything else (config, scripts, tests, generated code).

Goal: produce changes that pass automated axe checks and RGAA conformance. When a rule is ambiguous, prefer **native HTML semantics** over ARIA, and prefer **deleting markup** over adding attributes.

## Automated accessibility tests

Playwright + axe-core tests live in `tests/a11y.spec.ts` and run with `pnpm test:ui`. It covers 8 pages in both light (`data-theme="light"`) and dark (`data-theme="dark"`) themes.

**Standards enforced** via `.withTags()`:

| Tag | Standard |
|---|---|
| `wcag2a` / `wcag2aa` / `wcag2aaa` | WCAG 2.0 A, AA, AAA |
| `wcag21a` / `wcag21aa` | WCAG 2.1 A, AA |
| `wcag22aa` | WCAG 2.2 AA |
| `best-practice` | axe best-practice rules |
| `RGAAv4` | RGAA 4 |

Whenever you add a new page or component, run both test files and fix any violations before declaring the task done.

## How to use this skill

1. Before editing, identify which RGAA themes the file touches (images, links, forms, headings, dynamic widgets, etc.).
2. Apply the relevant rules from the checklist below.
3. Reuse the project conventions listed in the next section — do not reinvent helpers that already exist.
4. Before declaring the task done, run the verification steps at the bottom of this file.

## Project conventions to reuse

These already exist in the repo. Use them — do not duplicate them.

- **Screen-reader-only text**: utility class `.sr-only`. Apply it to a `<span>` next to an icon or inside an icon-only button. See `src/ui-kit/components/atoms/CopyButton/CopyButton.tsx`.
- **Skip link**: `<a className="skip-link" href="#maincontent">` lives in `src/ui-kit/components/templates/Navigation/Navigation.tsx`. The target `id="maincontent"` must exist on the page's `<main>`. Do not add a second skip link elsewhere.
- **External link wording**: append `<span className="sr-only">(ouvre un nouvel onglet)</span>` whenever `target="_blank"` is used. The `StyledLink` molecule (`src/ui-kit/components/molecules/StyledLink/StyledLink.tsx`) already does this — prefer that component over a raw `<a>` or Next `<Link>`.
- **French UI strings**: all visible labels, `aria-label`, `alt`, and `title` content are written in French (e.g. `aria-label="Voir tous les articles"`). Keep this consistent.
- **Disclosure pattern**: pair `aria-expanded={state}` with the trigger (see the burger button in `Navigation.tsx`). Add `aria-controls="<id-of-revealed-region>"` when the revealed region is not an adjacent sibling.
- **Required `alt` prop**: image-rendering components (e.g. `Avatar`) take `alt` as a required prop. Mirror this contract when creating new image components. Pass `alt=""` when the image is adjacent to a text label that already conveys the same information — this prevents screen readers from announcing the name twice (`image-redundant-alt` axe rule).
- **SVG titles**: inline SVGs include a `<title>` element (see `Logo`). Decorative SVGs add `aria-hidden="true"` instead.

## The 10 rules that matter most

Each rule cites the relevant RGAA thematic category. RGAA criteria reference: https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/

### 1. Images need a relevant text alternative (RGAA 1)

```tsx
// ❌ filename as alt
<img src="/diagrams/cascade.png" alt="cascade.png" />

// ❌ missing alt on informative SVG
<svg viewBox="0 0 24 24"><path d="..." /></svg>

// ✅ informative image: describe meaning, not appearance
<img src="/diagrams/cascade.png" alt="Schéma de la cascade CSS : sélecteur, spécificité, ordre" />

// ✅ purely decorative: empty alt, hide from AT
<img src="/decoration/wave.svg" alt="" aria-hidden="true" />
```

In MDX:

```mdx
<!-- ❌ -->
![octocat.png](https://octodex.github.com/images/minion.png)

<!-- ✅ informative -->
![Octocat habillé en minion, mascotte d'un article sur la modularité](https://octodex.github.com/images/minion.png)

<!-- ✅ decorative (rare in articles) -->
![](https://example.com/separator.svg)
```

### 2. Links must have an explicit accessible name (RGAA 6)

The link text alone (or text + `aria-label`) must describe the destination out of context.

```tsx
// ❌ ambiguous
<StyledLink href="/articles/cascade">cliquez ici</StyledLink>

// ❌ icon-only link with no label
<StyledLink href="https://discord.gg/..." iconOnly icon={<DiscordIcon />} />

// ✅ explicit text
<StyledLink href="/articles/cascade">Lire l'article sur la cascade</StyledLink>

// ✅ icon-only with aria-label
<StyledLink
  href="https://www.linkedin.com/company/yeeso-itwomen-network/"
  iconOnly
  icon={<LinkedinIcon />}
  ariaLabel="Voir la page LinkedIn de Yeeso"
/>
```

In MDX, never leave bare URLs or "ici"/"clic" as link text:

```mdx
<!-- ❌ -->
Plus d'infos [ici](https://w3.org/WAI/).

<!-- ✅ -->
Plus d'infos sur [le site officiel du W3C WAI](https://w3.org/WAI/).
```

### 3. Use `<button>` for actions and `<a href>` for navigation (RGAA 7)

```tsx
// ❌ div pretending to be a button
<div onClick={handleClick} className="cta">Copier</div>

// ❌ link with no href used as a button
<a onClick={handleClick}>Copier</a>

// ✅ button for actions
<button type="button" onClick={handleClick}>Copier</button>

// ✅ link for navigation (use the project Link/StyledLink)
<StyledLink href="/articles/page/1">Voir les articles</StyledLink>
```

Always set `type="button"` on `<button>` elements that are not form submitters — otherwise they default to `type="submit"` and can break forms.

### 4. One `<h1>` per page, no level skips (RGAA 9)

```mdx
<!-- ❌ extra h1 inside an article (the page template already renders one) -->
# Bienvenue
## Sommaire

<!-- ❌ skipping a level -->
## Section
#### Sous-sous-section

<!-- ✅ start at h2, increment by one -->
## Sommaire
### Détail
```

In `src/ui`, page templates render the `<h1>` from the content title. Component-level files should not introduce a second `<h1>`. Use `<h2>` and below.

### 5. Every form field has an associated label (RGAA 11)

```tsx
// ❌ placeholder masquerading as a label
<input type="email" placeholder="Votre email" />

// ❌ label not associated
<label>Email</label>
<input type="email" />

// ✅ explicit association via htmlFor / id
<label htmlFor="newsletter-email">Email</label>
<input id="newsletter-email" type="email" name="email" required />

// ✅ wrapping (also acceptable)
<label>
  Email
  <input type="email" name="email" required />
</label>
```

Group related fields with `<fieldset><legend>`. Mark required fields with the `required` attribute, and announce errors with `aria-describedby` pointing to the error message.

### 6. Color & contrast (RGAA 3, 10)

The automated tests enforce **WCAG 2.0 AAA** thresholds (the highest level):

| Text size | Minimum contrast |
|---|---|
| Normal text (< 18.66px bold or < 24px) | **7:1** (AAA) |
| Large text (≥ 18.66px bold or ≥ 24px) | **4.5:1** (AAA) |
| UI components and icons | **3:1** |

Never convey meaning by color alone — pair it with text, an icon, or a pattern.

```tsx
// ❌ status conveyed only by color
<span style={{ color: "red" }}>{message}</span>

// ✅ color + icon + text
<span className="error">
  <ErrorIcon aria-hidden="true" /> Erreur : {message}
</span>
```

**Never use `opacity` to visually mute text.** Opacity blends text toward the background and makes the effective contrast unpredictable across themes. Use `--font-color-muted` instead:

```css
/* ❌ opacity reduces effective contrast in ways that are hard to predict */
.footer__description { opacity: 0.8; }

/* ✅ semantic muted color — passes 7:1 in both light and dark */
.footer__description { color: var(--font-color-muted); }
```

**Never hardcode background colors as rgba values.** Hardcoded values do not adapt to the dark theme and will cause contrast failures:

```tsx
// ❌ rgba(255,255,255,0.9) blends with the dark page background → near-white
<div style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>

// ✅ theme-aware variable
<div style={{ backgroundColor: "var(--background-secondary)" }}>
```

When adding new colors in CSS, verify the contrast with https://webaim.org/resources/contrastchecker/ before committing. **Both light and dark themes must pass** — run `pnpm test:ui` to confirm.

### 7. Keyboard accessibility & visible focus (RGAA 7, 10, 12)

Every interactive element must be reachable with `Tab`, activatable with `Enter`/`Space`, and have a visible focus indicator.

```css
/* ❌ removing the focus ring with no replacement */
button:focus { outline: none; }

/* ✅ replace with a visible :focus-visible style */
button:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

- Never set `tabIndex` to a positive number. Use `tabIndex={0}` only on non-interactive elements you have made interactive (rare — prefer the native element).
- Custom widgets must support the keyboard interactions documented in the WAI-ARIA Authoring Practices.
- Tab order must follow the visual reading order. If you find yourself reaching for `tabIndex` to fix this, the DOM order is probably wrong.

### 8. Declare the language (RGAA 8)

- The page's `<html lang="fr">` is set by the root layout — do not override it inside components.
- For inline text in another language, add `lang` on the element:

```tsx
// ✅ foreign-language inline text
<p>
  Le terme anglais <span lang="en">cascade</span> désigne ici l'ordre d'application des règles.
</p>
```

### 9. Landmarks & document structure (RGAA 9, 12)

A page should use the landmark elements:

```tsx
<header>…</header>
<nav>…</nav>
<main id="maincontent">…</main>
<footer>…</footer>
```

- Exactly one `<main>` per page, with `id="maincontent"` so the skip link works.
- The site navigation owns the only top-level `<header>` (banner landmark). Do not add a second `<header>` at page level — it creates a `landmark-no-duplicate-banner` violation.
- For page-level title banners that need a landmark region, use `<section aria-labelledby="...">` — not `<div role="region">` (Biome's `lint/a11y/useSemanticElements` rejects ARIA roles when a native semantic element exists). A named `<section>` implicitly becomes a `region` landmark:

```tsx
// ❌ Biome rejects — use native element instead
<div role="region" aria-labelledby="title-id">…</div>

// ✅ native element + accessible name → implicit region landmark
<section aria-labelledby="title-id">
  <h1 id="title-id">{title}</h1>
</section>
```

- Wrap site navigation in `<nav>` and give it an `aria-label` if multiple `<nav>` regions exist (e.g. `aria-label="Navigation principale"` vs `aria-label="Pagination"`).
- Use `<ul>` / `<ol>` for lists, including lists of cards. Do not flatten a list into a sequence of `<div>`s.

### 10. Dynamic content (RGAA 7, 10)

- Toggles use `aria-expanded` (and `aria-controls` when the panel is not adjacent).
- Loading states use `aria-busy="true"` on the affected region.
- Status messages that appear without user focus moving (search results count, toast notifications) live in a region with `role="status"` or `aria-live="polite"`. Use `aria-live="assertive"` only for errors that interrupt the user.
- Respect motion preferences:

```css
/* ✅ scale back animations when the user asked */
@media (prefers-reduced-motion: reduce) {
  .animated-thing { animation: none; transition: none; }
}
```

- Auto-playing media, carousels, or marquees must have a visible pause/stop control. Prefer not autoplaying at all.

## MDX-specific rules (`src/content/**/*.mdx`)

- **Headings**: start at `##`. The page `<h1>` is rendered from the article `title` frontmatter — adding `# …` inside the body produces a second `<h1>`.
- **Images**: alt text describes the image's role in the article, not the filename. For decorative images, use `![](url)` — but in articles, images are almost always informative.
- **Links**: link text must make sense out of context. Replace "ici" / "ce lien" / "cliquez" with the destination's purpose.
- **External links**: when authoring with the project's link directive (`{target="_blank"}`), trust the renderer to add the sr-only "(ouvre un nouvel onglet)" — do not duplicate it.
- **Tables**: use markdown table syntax (not raw `<table>`), which produces semantic `<thead>`/`<th>`. Add a heading or sentence above the table so it has context (markdown tables have no `<caption>`).
- **Code blocks**: always specify the language (` ```js`, ` ```css`, ` ```tsx`) so syntax highlighting renders and screen readers can announce the language.
- **Custom directives** (`:::warning`, `:::info`, etc.): use them instead of styling colored `<div>`s by hand — the directives carry the right semantics.
- **Abbreviations**: use the `*[ABBR]: expansion` syntax so the expansion is exposed to assistive tech.

## TSX-specific rules (`src/ui-kit/**/*.tsx`)

- **Prefer native elements** over ARIA. `<button>` over `<div role="button">`. `<a href>` over `<span role="link">`. `<details>/<summary>` over a custom collapsible.
- **Icon-only buttons** need either visible text or a `<span className="sr-only">` child describing the action. Mirror `CopyButton`.
- **External links**: use `StyledLink` — it already handles `target`, `rel`, and the sr-only "(ouvre un nouvel onglet)". When you must write a raw `<a>`, replicate all three.
- **Disclosures (menus, accordions, dropdowns)**:
  - `aria-expanded={isOpen}` on the trigger.
  - `aria-controls="<panel-id>"` when the panel is not the next sibling.
  - The trigger must toggle on `Enter` and `Space` (native `<button>` does this for free).
  - Closing on `Escape` is expected for menus, dialogs, and popovers.
- **Custom widgets**: if you are about to add three or more ARIA attributes by hand, stop and check https://www.w3.org/WAI/ARIA/apg/patterns/ for the canonical pattern. If the canonical pattern is heavier than the use case warrants, fall back to a native element.
- **Images / SVGs in components**:
  - `<img>` must have an `alt` attribute (empty string only when decorative).
  - Inline `<svg>` either gets a `<title>` (informative) or `aria-hidden="true"` + `focusable="false"` (decorative).
  - Avatars and image components should take `alt` as a required prop.
- **Avoid `tabIndex={-1}`** except to programmatically focus a non-interactive container (e.g. a heading after route change). It removes the element from keyboard order.
- **Avoid hover-only affordances**: if information is revealed on hover, it must also be available on focus (`:focus`/`:focus-visible`).
- **Client-only widgets** with `"use client"`: ensure the server-rendered fallback is still accessible (no orphan ARIA states, no buttons that need JS to work showing without it).

## Severity cheat sheet (use when reviewing)

Flag these in this order:

**Critical** — blocks users with disabilities:
- Missing `alt` on informative images.
- Missing label on form input.
- `<div>` / `<span>` used as a button or link.
- Keyboard trap or non-keyboard-reachable interaction.
- Removed focus outline with no replacement.
- Contrast below 4.5:1 for body text.

**Serious** — degrades the experience significantly:
- Missing page language or wrong `lang` value.
- Skipped heading levels or multiple `<h1>`.
- Link text like "ici" / "cliquez" / a bare URL.
- Autoplay without pause control.
- Missing skip link or `<main>` landmark.

**Moderate** — fix as part of normal hygiene:
- Icon button missing an `sr-only` label.
- `target="_blank"` without the "(ouvre un nouvel onglet)" sr-only text.
- Missing `aria-expanded` on a disclosure trigger.
- Status message that does not use `aria-live` / `role="status"`.
- Animation that does not respect `prefers-reduced-motion`.

## Verification before declaring done

For any UI change in `src/ui-kit`:

1. **Keyboard**: `Tab` through the change. Every interactive element receives focus, in the visual order, with a visible focus indicator. `Enter` / `Space` activates. `Escape` closes menus/dialogs.
2. **Automated**: run `pnpm test:ui` (runs `a11y.spec.ts` against both light and dark themes). Resolve all violations before merging. These enforce WCAG 2.0 AAA, WCAG 2.2 AA, and RGAA 4.
3. **Zoom**: verify the change still works at 200% browser zoom — no clipped text, no horizontal scroll on body text.
4. **Reduced motion**: toggle `prefers-reduced-motion` in DevTools (Rendering panel) and confirm large animations stop.

For MDX changes in `src/content`:

1. Render the article locally. Confirm there is exactly one visible `<h1>` (the page title).
2. Read each image's `alt` text out loud — does it tell you what the image conveys?
3. Read each link's text out of context — does it tell you where the link goes?

## References

- RGAA criteria (French, authoritative for this project): https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/
- WCAG 2.0 AAA quick reference: https://www.w3.org/WAI/WCAG20/quickref/
- WCAG 2.2 quick reference: https://www.w3.org/WAI/WCAG22/quickref/
- WAI-ARIA Authoring Practices (patterns for widgets): https://www.w3.org/WAI/ARIA/apg/patterns/
- Contrast checker (verify both light and dark themes): https://webaim.org/resources/contrastchecker/
