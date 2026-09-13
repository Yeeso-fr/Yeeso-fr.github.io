import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { test } from "@playwright/test";
import matter from "gray-matter";
import { expectNoA11yViolations, type Theme } from "./utils/axe";

const baseUrl = "http://localhost:3000";

const baseRef = process.env.GITHUB_BASE_REF
  ? `origin/${process.env.GITHUB_BASE_REF}`
  : "origin/main";

type ContentPage = {
  name: string;
  path: string;
};

const CONTENT_TYPES: { folder: string; route: string }[] = [
  { folder: "articles", route: "articles" },
  { folder: "authors", route: "authors" },
];

const runGit = (args: string): string[] => {
  try {
    return execSync(`git ${args}`, { encoding: "utf8" })
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
};

const findChangedContentFiles = (): string[] => {
  const uncommitted = runGit(
    "status --porcelain --untracked-files=all -- src/content",
  ).map((line) => line.replace(/^\S+\s+/, ""));

  const committed = runGit(
    `diff --name-only --diff-filter=ACMR ${baseRef}...HEAD -- src/content`,
  );

  const all = [...uncommitted, ...committed]
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.resolve(process.cwd(), file))
    .filter((file) => fs.existsSync(file));

  return [...new Set(all)];
};

const toContentPage = (filePath: string): ContentPage | undefined => {
  const contentType = CONTENT_TYPES.find(({ folder }) =>
    filePath.includes(
      `${path.sep}src${path.sep}content${path.sep}${folder}${path.sep}`,
    ),
  );
  if (!contentType) return undefined;

  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);
  if (typeof data.slug !== "string" || data.slug.length === 0) return undefined;

  return {
    name: `${contentType.route}/${data.slug}`,
    path: `/${contentType.route}/${data.slug}`,
  };
};

const changedContentPages = [
  ...new Map(
    findChangedContentFiles()
      .map(toContentPage)
      .filter((page): page is ContentPage => page !== undefined)
      .map((page) => [page.path, page]),
  ).values(),
];

test.describe("Accessibility of your new or updated content", () => {
  if (changedContentPages.length === 0) {
    test("no new or modified article found", () => {
      test.skip(
        true,
        `Compared your working tree and branch against ${baseRef} but found no changed file under ` +
          "src/content/articles or src/content/authors. Write or edit your content, then re-run `pnpm test:a11y:content`.",
      );
    });
  }

  for (const theme of ["light", "dark"] as const satisfies Theme[]) {
    test.describe(`${theme} theme`, () => {
      for (const { name, path: contentPath } of changedContentPages) {
        test(`${name} should not have any automatically detectable accessibility violations`, async ({
          page,
        }) => {
          await expectNoA11yViolations(page, theme, baseUrl, contentPath);
        });
      }
    });
  }
});
