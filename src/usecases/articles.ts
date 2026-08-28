import { compareDesc } from "date-fns";
import { readArticles } from "@/infrastructure/articles/articles.repository";

const ARTICLES_PER_PAGE = 6;
const WORDS_PER_MINUTE = 200;

export function getAllArticles() {
  return readArticles();
}

export function getLastArticles(limit: number) {
  return [...readArticles()]
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
    )
    .slice(0, limit);
}

export function getPaginatedArticles(page: number) {
  const articles = readArticles();
  const sorted = [...articles].sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );
  const totalPages = Math.ceil(sorted.length / ARTICLES_PER_PAGE);
  const currentPage = Math.min(Math.max(page, 1), Math.max(totalPages, 1));
  const start = (currentPage - 1) * ARTICLES_PER_PAGE;
  const end = start + ARTICLES_PER_PAGE;
  return { articles: sorted.slice(start, end), totalPages, currentPage };
}

export function getTotalArticlePages() {
  return Math.ceil(readArticles().length / ARTICLES_PER_PAGE);
}

function stripMarkdown(content: string): string {
  return content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)]\([^)]*\)/g, "$1")
    .replace(/[#>*_`~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getReadingTime(content: string): number {
  const wordCount = stripMarkdown(content).split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

const EXCERPT_LENGTH = 155;

/** Plain-text excerpt for meta descriptions, truncated on a word boundary. */
export function getExcerpt(
  content: string,
  maxLength = EXCERPT_LENGTH,
): string {
  const plainText = stripMarkdown(content);
  if (plainText.length <= maxLength) return plainText;
  return `${plainText.slice(0, maxLength).replace(/\s+\S*$/, "")}…`;
}
