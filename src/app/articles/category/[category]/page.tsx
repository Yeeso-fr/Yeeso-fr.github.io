import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/config/seo";
import { CategoryPage } from "@/ui-kit/pages/Articles/CategoryPage";
import { getAllArticles } from "@/usecases/articles";
import { getAllAuthors } from "@/usecases/authors";

const basePath = process.env.PAGES_BASE_PATH ?? "";

type PageProps = {
  params: Promise<{ category: string }>;
};

const findArticlesForCategory = (normalizedCategory: string) =>
  getAllArticles().filter((article) =>
    article.categories.some((c) => c.toLowerCase() === normalizedCategory),
  );

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const normalizedCategory = category.toLowerCase();
  const articles = findArticlesForCategory(normalizedCategory);
  if (articles.length === 0) return {};

  const displayCategory =
    articles[0].categories.find(
      (c) => c.toLowerCase() === normalizedCategory,
    ) ?? category;

  return buildPageMetadata({
    title: `Articles — ${displayCategory}`,
    description: `Retrouvez tous les articles Yeeso publiés dans la catégorie ${displayCategory}.`,
    path: `/articles/category/${normalizedCategory}`,
    basePath,
  });
}

export default async function Page({ params }: PageProps) {
  const { category } = await params;
  const normalizedCategory = category.toLowerCase();

  const articles = findArticlesForCategory(normalizedCategory);

  if (articles.length === 0) {
    notFound();
  }

  const authors = getAllAuthors();

  return (
    <CategoryPage category={category} articles={articles} authors={authors} />
  );
}

export function generateStaticParams() {
  const categories = new Set<string>();

  for (const article of getAllArticles()) {
    for (const category of article.categories) {
      categories.add(category.toLowerCase());
    }
  }

  return Array.from(categories).map((category) => ({ category }));
}
