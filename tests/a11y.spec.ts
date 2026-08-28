import { test } from "@playwright/test";
import { expectNoA11yViolations, type Theme } from "./utils/axe";

const baseUrl = "http://localhost:3000";

const staticPages = [
  { name: "homepage", path: "/" },
  { name: "about page", path: "/a-propos" },
  { name: "legal mentions page", path: "/mentions-legales" },
  { name: "programs page", path: "/programmes" },
  { name: "network page", path: "/reseau" },
  { name: "company page", path: "/entreprises" },
  { name: "education page", path: "/education" },
  { name: "conferences page", path: "/conferences" },
  { name: "contact page", path: "/contact" },
  { name: "faq page", path: "/faq" },
];

const entityListPages = [
  { name: "articles list page", path: "/articles" },
  { name: "authors list page", path: "/authors" },
  { name: "articles pagination page", path: "/articles/page/1" },
  { name: "articles category page", path: "/articles/category/yeeso" },
];

const entityDetailPages = [
  { name: "article detail page", path: "/articles/bienvenue-sur-yeeso" },
  { name: "author detail page", path: "/authors/houleymatou-balde" },
];

for (const theme of ["light", "dark"] as const satisfies Theme[]) {
  test.describe(`Accessibility (${theme} theme)`, () => {
    test.describe("Static pages", () => {
      for (const { name, path } of staticPages) {
        test(`${name} should not have any automatically detectable accessibility violations`, async ({
          page,
        }) => {
          await expectNoA11yViolations(page, theme, baseUrl, path);
        });
      }
    });

    test.describe("Entity list pages", () => {
      for (const { name, path } of entityListPages) {
        test(`${name} should not have any automatically detectable accessibility violations`, async ({
          page,
        }) => {
          await expectNoA11yViolations(page, theme, baseUrl, path);
        });
      }
    });

    test.describe("Entity detail pages", () => {
      for (const { name, path } of entityDetailPages) {
        test(`${name} should not have any automatically detectable accessibility violations`, async ({
          page,
        }) => {
          await expectNoA11yViolations(page, theme, baseUrl, path);
        });
      }
    });
  });
}
