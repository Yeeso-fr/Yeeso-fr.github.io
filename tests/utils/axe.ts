import { AxeBuilder } from "@axe-core/playwright";
import { expect, type Page, test } from "@playwright/test";

export type Theme = "light" | "dark";

type AxeViolation = Awaited<
  ReturnType<AxeBuilder["analyze"]>
>["violations"][number];

// axe-core disables 16 of its 105 rules by default (targetsize, color-contrast-enhanced,
// identical-links-same-purpose, meta-refresh-no-exceptions, …) — most are deprecated or
// experimental, but some (like target-size, WCAG 2.2 AA 2.5.8) are simply opt-in. Passing
// these tags force-enables every rule that isn't deprecated or experimental: verified via
// AxeBuilder that omitting .withTags() only runs 89/105 rules, while this list runs 93/105.
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

export const runAxe = async (
  page: Page,
  theme: Theme,
  baseUrl: string,
  path: string,
) => {
  await page.addInitScript((t) => localStorage.setItem("theme", t), theme);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(`${baseUrl}${path}`);
  await page.waitForLoadState("networkidle");
  return new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
};

const ANSI = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

const IMPACT_COLOR: Record<string, string> = {
  critical: ANSI.bold + ANSI.red,
  serious: ANSI.red,
  moderate: ANSI.yellow,
  minor: ANSI.cyan,
};

const supportsColor = (): boolean => {
  if (process.env.NO_COLOR) return false;
  if (process.env.FORCE_COLOR || process.env.CI) return true;
  return Boolean(process.stdout.isTTY);
};

// Plain-text report (not the raw axe JSON) so it reads directly in a terminal, CI log, or attachment.
export const formatViolations = (
  violations: AxeViolation[],
  theme: Theme,
  path: string,
  { color = false }: { color?: boolean } = {},
): string => {
  if (violations.length === 0) return "";

  const paint = (code: string, text: string) =>
    color ? `${code}${text}${ANSI.reset}` : text;

  const lines = [
    paint(
      ANSI.bold + ANSI.red,
      `✗ ${violations.length} accessibility violation(s) on ${path} (${theme} theme)`,
    ),
    "",
  ];

  violations.forEach((violation, index) => {
    const impactColor = IMPACT_COLOR[violation.impact ?? ""] ?? ANSI.gray;
    lines.push(
      `${index + 1}. ${paint(impactColor, `[${violation.impact ?? "unknown impact"}]`)} ${paint(ANSI.bold, violation.id)} — ${violation.help}`,
    );
    lines.push(`   ${paint(ANSI.cyan, violation.helpUrl)}`);
    for (const node of violation.nodes) {
      lines.push(`   ${paint(ANSI.dim, "Element:")} ${node.target.join(" ")}`);
      lines.push(`     ${paint(ANSI.gray, node.html)}`);
      if (node.failureSummary) {
        for (const summaryLine of node.failureSummary.split("\n")) {
          lines.push(`     ${paint(ANSI.dim, summaryLine)}`);
        }
      }
    }
    lines.push("");
  });

  return lines.join("\n");
};

// Colored twin of formatViolations, auto-detecting terminal/CI color support — for console output only.
export const printViolations = (
  violations: AxeViolation[],
  theme: Theme,
  path: string,
): void => {
  if (violations.length === 0) return;
  console.error(
    formatViolations(violations, theme, path, { color: supportsColor() }),
  );
};

// Runs axe on `path`, reports any violation (console + attachment), and asserts there are none.
export const expectNoA11yViolations = async (
  page: Page,
  theme: Theme,
  baseUrl: string,
  path: string,
): Promise<void> => {
  const results = await runAxe(page, theme, baseUrl, path);
  const report = formatViolations(results.violations, theme, path);

  if (report) {
    const attachmentName = `${path.replace(/\//g, "_") || "root"}-${theme}-violations.txt`;
    await test.info().attach(attachmentName, {
      body: report,
      contentType: "text/plain",
    });
    printViolations(results.violations, theme, path);
  }

  expect(report).toBe("");
};
