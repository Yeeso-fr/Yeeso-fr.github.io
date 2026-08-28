import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Article } from "@/entities/articles/articles";

vi.mock("@/infrastructure/articles/articles.repository", () => ({
  readArticles: vi.fn(),
}));

const { readArticles } = await import(
  "@/infrastructure/articles/articles.repository"
);
const { getExcerpt, getPaginatedArticles, getReadingTime } = await import(
  "@/usecases/articles"
);

const mockedReadArticles = vi.mocked(readArticles);

function makeArticle(overrides: Partial<Article> = {}): Article {
  return {
    title: "Titre",
    slug: "titre",
    author: "houleymatou-balde",
    publishedAt: "2026-01-01",
    categories: ["Yeeso"],
    content: "Un contenu quelconque.",
    ...overrides,
  };
}

describe("getReadingTime", () => {
  it("rounds to the nearest minute at 200 words per minute", () => {
    const content = Array.from({ length: 400 }, () => "mot").join(" ");
    expect(getReadingTime(content)).toBe(2);
  });

  it("never returns less than 1 minute", () => {
    expect(getReadingTime("un seul mot")).toBe(1);
  });

  it("strips markdown syntax before counting words", () => {
    const content =
      "# Titre\n\n**gras** _italique_ [lien](https://ex.com) `code`";
    expect(getReadingTime(content)).toBe(1);
  });
});

describe("getExcerpt", () => {
  it("returns the plain text unchanged when shorter than the limit", () => {
    expect(getExcerpt("Un texte court.")).toBe("Un texte court.");
  });

  it("truncates on a word boundary and appends an ellipsis when over the limit", () => {
    const content = "mot ".repeat(60).trim();
    const excerpt = getExcerpt(content);
    expect(excerpt.endsWith("…")).toBe(true);
    expect(excerpt.length).toBeLessThanOrEqual(156);
  });

  it("strips markdown syntax from the excerpt", () => {
    const content =
      "**Yeeso** est une [association](https://yeeso.fr) dédiée à l'IT.";
    expect(getExcerpt(content)).toBe(
      "Yeeso est une association dédiée à l'IT.",
    );
  });

  it("respects a custom maxLength", () => {
    const content =
      "Un texte suffisamment long pour être tronqué à une limite personnalisée basse.";
    const excerpt = getExcerpt(content, 20);
    expect(excerpt.length).toBeLessThanOrEqual(21);
    expect(excerpt.endsWith("…")).toBe(true);
  });
});

describe("getPaginatedArticles", () => {
  const articles: Article[] = Array.from({ length: 10 }, (_, i) =>
    makeArticle({
      slug: `article-${i}`,
      publishedAt: `2026-01-${String(i + 1).padStart(2, "0")}`,
    }),
  );

  beforeEach(() => {
    mockedReadArticles.mockReturnValue(articles);
  });

  it("sorts articles by publish date, most recent first", () => {
    const { articles: page1 } = getPaginatedArticles(1);
    expect(page1[0].slug).toBe("article-9");
  });

  it("slices articles into pages of 6", () => {
    const { articles: page1, totalPages } = getPaginatedArticles(1);
    expect(page1).toHaveLength(6);
    expect(totalPages).toBe(2);
  });

  it("clamps page numbers above the last page to the last page", () => {
    const { currentPage, articles: lastPageArticles } =
      getPaginatedArticles(99);
    expect(currentPage).toBe(2);
    expect(lastPageArticles).toHaveLength(4);
  });

  it("clamps page numbers below 1 to page 1", () => {
    const { currentPage } = getPaginatedArticles(0);
    expect(currentPage).toBe(1);
  });

  it("returns an empty page without erroring when there are no articles", () => {
    mockedReadArticles.mockReturnValue([]);
    const {
      totalPages,
      currentPage,
      articles: empty,
    } = getPaginatedArticles(1);
    expect(totalPages).toBe(0);
    expect(currentPage).toBe(1);
    expect(empty).toHaveLength(0);
  });
});
