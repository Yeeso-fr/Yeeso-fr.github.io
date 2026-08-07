import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  // Content pages with many code blocks produce a DOM with hundreds of Shiki-highlighted
  // <span> tokens. axe-core's scan itself (93 rules: wcag2aaa + best-practice + RGAAv4)
  // takes ~30s on such a page — confirmed by timing AxeBuilder.analyze() in isolation,
  // independent of page load or highlighter init time — so the 30s default is too tight
  // regardless of Shiki instance count.
  timeout: 90_000,
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],
  use: {
    ...devices["Desktop Chrome"],
  },
});
