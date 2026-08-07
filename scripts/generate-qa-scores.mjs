import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { AxeBuilder } from "@axe-core/playwright";
import { chromium } from "playwright";

const BASE_URL = process.env.QA_BASE_URL ?? "http://localhost:3000";
const LIGHTHOUSE_DIR = "lighthouse-report";
const STORYBOOK_REPORT_PATH = "storybook-report.json";
const OUTPUT_PATH = "src/content/qa-scores.json";

const PAGE_PATHS = [
  "/",
  "/a-propos",
  "/mentions-legales",
  "/recherche",
  "/articles",
  "/authors",
  "/programmes",
  "/reseau",
  "/contact",
];

const THEMES = ["light", "dark"];

// Keep in sync with tests/utils/axe.ts AXE_TAGS.
const AXE_TAGS = [
  "wcag2a",
  "wcag2aa",
  "wcag2aaa",
  "wcag21a",
  "wcag21aa",
  "wcag22aa",
  "best-practice",
  "RGAAv4",
];

const round = (value) => Math.round(value * 100);

async function collectAxeScore() {
  const browser = await chromium.launch();
  let rulesPassed = 0;
  let rulesTotal = 0;

  try {
    for (const pagePath of PAGE_PATHS) {
      for (const theme of THEMES) {
        const context = await browser.newContext();
        try {
          const page = await context.newPage();
          await page.addInitScript(
            (t) => localStorage.setItem("theme", t),
            theme,
          );
          await page.emulateMedia({ reducedMotion: "reduce" });
          await page.goto(`${BASE_URL}${pagePath}`);
          await page.waitForLoadState("networkidle");

          const results = await new AxeBuilder({ page })
            .withTags(AXE_TAGS)
            .analyze();

          rulesPassed += results.passes.length;
          rulesTotal += results.passes.length + results.violations.length;
        } finally {
          await context.close();
        }
      }
    }
  } finally {
    await browser.close();
  }

  return {
    score: rulesTotal === 0 ? 0 : Math.round((rulesPassed / rulesTotal) * 100),
    rulesPassed,
    rulesTotal,
  };
}

// Slugs with `skipCategories: ["seo"]` in tests/lighthouse.spec.ts — keep in sync.
const SEO_EXCLUDED_SLUGS = ["recherche"];

function collectLighthouseScore() {
  if (!existsSync(LIGHTHOUSE_DIR)) {
    throw new Error(
      `Missing ${LIGHTHOUSE_DIR}/ — run \`pnpm test:lighthouse\` first.`,
    );
  }

  const files = readdirSync(LIGHTHOUSE_DIR).filter(
    (file) => file.endsWith("-mobile.json") || file.endsWith("-desktop.json"),
  );

  if (files.length === 0) {
    throw new Error(
      `No Lighthouse JSON reports found in ${LIGHTHOUSE_DIR}/ — run \`pnpm test:lighthouse\` first.`,
    );
  }

  const totals = {
    performance: 0,
    accessibility: 0,
    bestPractices: 0,
    seo: 0,
  };
  let seoCount = 0;

  for (const file of files) {
    const report = JSON.parse(
      readFileSync(path.join(LIGHTHOUSE_DIR, file), "utf8"),
    );
    totals.performance += report.categories.performance.score;
    totals.accessibility += report.categories.accessibility.score;
    totals.bestPractices += report.categories["best-practices"].score;

    // The search page is intentionally `noindex` (see the `skipCategories`
    // exclusion in tests/lighthouse.spec.ts), which fails Lighthouse's
    // `is-crawlable` SEO audit by design. Its `seo` category score is still
    // written to the report (so qa:scores doesn't crash on a missing
    // category) but must stay out of the site-wide seo average, or the
    // intentional noindex penalty distorts every other page's real score.
    if (!SEO_EXCLUDED_SLUGS.some((slug) => file.startsWith(`${slug}-`))) {
      totals.seo += report.categories.seo.score;
      seoCount += 1;
    }
  }

  const count = files.length;

  return {
    performance: round(totals.performance / count),
    accessibility: round(totals.accessibility / count),
    bestPractices: round(totals.bestPractices / count),
    seo: round(totals.seo / seoCount),
  };
}

// Standard EcoIndex grade scale — https://www.ecoindex.fr/comment-ca-marche/#le-calcul-de-la-note
const ECOINDEX_GRADE_THRESHOLDS = [
  [80, "A"],
  [70, "B"],
  [55, "C"],
  [40, "D"],
  [25, "E"],
  [10, "F"],
];

function gradeForEcoindexScore(score) {
  for (const [threshold, grade] of ECOINDEX_GRADE_THRESHOLDS) {
    if (score > threshold) return grade;
  }
  return "G";
}

function collectEcoindexScore() {
  if (!existsSync(LIGHTHOUSE_DIR)) {
    throw new Error(
      `Missing ${LIGHTHOUSE_DIR}/ — run \`pnpm test:lighthouse\` first.`,
    );
  }

  const files = readdirSync(LIGHTHOUSE_DIR).filter((file) =>
    file.endsWith("-ecoindex.json"),
  );

  if (files.length === 0) {
    throw new Error(
      `No EcoIndex JSON reports found in ${LIGHTHOUSE_DIR}/ — run \`pnpm test:lighthouse\` first.`,
    );
  }

  const totals = { score: 0, water: 0, ghg: 0 };

  for (const file of files) {
    const report = JSON.parse(
      readFileSync(path.join(LIGHTHOUSE_DIR, file), "utf8"),
    );
    totals.score += Number(report.audits["eco-index-score"].numericValue);
    totals.water += Number(report.audits["eco-index-water"].numericValue);
    totals.ghg += Number(report.audits["eco-index-ghg"].numericValue);
  }

  const count = files.length;
  const score = round(totals.score / count);

  return {
    score,
    grade: gradeForEcoindexScore(score),
    water: Math.round((totals.water / count) * 100) / 100,
    ghg: Math.round((totals.ghg / count) * 100) / 100,
  };
}

function collectStorybookScore() {
  if (!existsSync(STORYBOOK_REPORT_PATH)) {
    throw new Error(
      `Missing ${STORYBOOK_REPORT_PATH} — run \`pnpm test:ui\` first.`,
    );
  }

  const report = JSON.parse(readFileSync(STORYBOOK_REPORT_PATH, "utf8"));
  const testsTotal = report.numTotalTests;
  const testsPassed = report.numPassedTests;

  return {
    score: testsTotal === 0 ? 0 : Math.round((testsPassed / testsTotal) * 100),
    testsPassed,
    testsTotal,
  };
}

async function main() {
  const lighthouse = collectLighthouseScore();
  const storybook = collectStorybookScore();
  const axe = await collectAxeScore();
  const ecoindex = collectEcoindexScore();

  const output = {
    generatedAt: new Date().toISOString(),
    lighthouse,
    axe,
    storybook,
    ecoindex,
  };

  writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`);
  console.warn(`QA scores written to ${OUTPUT_PATH}`);
  console.warn(output);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
