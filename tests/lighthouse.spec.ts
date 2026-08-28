import { existsSync } from "node:fs";
import { test as base, chromium } from "@playwright/test";
import type { Config, Flags } from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";
import ecoindexConfigJson from "lighthouse-plugin-ecoindex-core/helpers/custom-config";
import { playAudit } from "playwright-lighthouse";

// lighthouse-plugin-ecoindex-core pins its own nested `lighthouse` version,
// so its Config type is structurally distinct from ours — safe to assert
// through, this is verified to work correctly at runtime.
const ecoindexConfig = ecoindexConfigJson as unknown as Config;

// Requires a production build: run `pnpm build && pnpm start` before this suite.
const baseUrl = "http://localhost:3000";
const reportDir = "lighthouse-report";

const thresholds = {
  performance: 90,
  accessibility: 90,
  "best-practices": 90,
  seo: 90,
};

// Lighthouse's default (mobile) config simulates a 4x CPU slowdown calibrated
// against the host machine's raw speed. GitHub Actions' shared runners score
// far below a typical dev laptop, so `performance` alone swings 20+ points
// between local and CI runs. `desktop` and `ecoindex` disable that throttling
// and stay the real performance gate; mobile still runs and reports the
// category (kept in `onlyCategories` below) for the qa-scores badge, it's
// just not asserted here.
const mobileThresholds = {
  accessibility: 90,
  "best-practices": 90,
  seo: 90,
};

const pages: {
  name: string;
  slug: string;
  path: string;
  skipCategories?: string[];
}[] = [
  { name: "homepage", slug: "home", path: "/" },
  { name: "about page", slug: "a-propos", path: "/a-propos" },
  {
    name: "legal mentions page",
    slug: "mentions-legales",
    path: "/mentions-legales",
  },
  { name: "articles list page", slug: "articles", path: "/articles" },
  { name: "authors list page", slug: "authors", path: "/authors" },
  { name: "programs page", slug: "programmes", path: "/programmes" },
  { name: "network page", slug: "reseau", path: "/reseau" },
  { name: "contact page", slug: "contact", path: "/contact" },
  { name: "faq page", slug: "faq", path: "/faq" },
];

type DeviceType = "mobile" | "desktop" | "ecoindex";

const deviceConfigurations: {
  label: DeviceType;
  config: Config | undefined;
  thresholds: Record<string, number>;
  opts?: Flags;
}[] = [
  {
    label: "mobile",
    config: undefined,
    thresholds: mobileThresholds,
    opts: { onlyCategories: Object.keys(thresholds) },
  },
  {
    label: "desktop",
    config: desktopConfig,
    thresholds,
    // Explicit, so per-page threshold filtering (see `skipCategories` below)
    // never shrinks the set of categories Lighthouse actually audits —
    // `playwright-lighthouse` defaults onlyCategories from `thresholds` when
    // this isn't set, which would silently drop skipped categories from the
    // report JSON that qa:scores depends on.
    opts: { onlyCategories: Object.keys(thresholds) },
  },
  {
    label: "ecoindex",
    config: ecoindexConfig,
    thresholds,
    opts: {
      onlyCategories: [
        ...Object.keys(thresholds),
        "lighthouse-plugin-ecoindex-core",
      ],
    },
  },
];

type LighthouseFixtures = {
  runLighthouseAudit: (page: {
    path: string;
    slug: string;
    config?: Config;
    thresholds: Record<string, number>;
    opts?: Flags;
  }) => Promise<void>;
};

const test = base.extend<LighthouseFixtures>({
  // biome-ignore lint/correctness/noEmptyPattern: Playwright requires the fixtures object destructure here
  runLighthouseAudit: async ({}, use, testInfo) => {
    const port = 9222 + testInfo.parallelIndex;
    const browser = await chromium.launch({
      args: [`--remote-debugging-port=${port}`],
    });

    await use(async ({ path, slug, config, thresholds, opts }) => {
      const reportPath = `${reportDir}/${slug}.html`;

      try {
        const page = await browser.newPage();
        await page.goto(`${baseUrl}${path}`);

        await playAudit({
          page,
          port,
          thresholds,
          config,
          opts,
          reports: {
            formats: { html: true, json: true },
            directory: reportDir,
            name: slug,
          },
        });
      } finally {
        if (existsSync(reportPath)) {
          await testInfo.attach(`lighthouse report for ${slug} page`, {
            path: reportPath,
            contentType: "text/html",
          });
        }
      }
    });

    await browser.close();
  },
});

test.describe("Lighthouse", () => {
  for (const {
    label,
    config,
    thresholds: deviceThresholds,
    opts,
  } of deviceConfigurations) {
    test.describe(label, () => {
      for (const { name, slug, path, skipCategories } of pages) {
        test(`${name} should meet Lighthouse score thresholds (${label})`, async ({
          runLighthouseAudit,
        }) => {
          const pageThresholds = skipCategories
            ? Object.fromEntries(
                Object.entries(deviceThresholds).filter(
                  ([category]) => !skipCategories.includes(category),
                ),
              )
            : deviceThresholds;

          await runLighthouseAudit({
            path,
            slug: `${slug}-${label}`,
            config,
            thresholds: pageThresholds,
            opts,
          });
        });
      }
    });
  }
});
