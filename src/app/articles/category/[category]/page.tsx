import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/config/seo";
import { CategoryPage } from "@/ui-kit/pages/Articles/CategoryPage";
import { getAllArticles, slugifyCategory } from "@/usecases/articles";
import { getAllAuthors } from "@/usecases/authors";

const basePath = process.env.PAGES_BASE_PATH ?? "";

type PageProps = {
  params: Promise<{ category: string }>;
};

const findArticlesForCategory = (categorySlug: string) =>
  getAllArticles().filter((article) =>
    article.categories.some((c) => slugifyCategory(c) === categorySlug),
  );

const findDisplayCategory = (categorySlug: string) => {
  const articles = findArticlesForCategory(categorySlug);
  if (articles.length === 0) return undefined;

  const displayCategory = articles[0].categories.find(
    (c) => slugifyCategory(c) === categorySlug,
  );

  return { articles, displayCategory: displayCategory ?? categorySlug };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const found = findDisplayCategory(categorySlug);
  if (!found) return {};

  return buildPageMetadata({
    title: `Articles — ${found.displayCategory}`,
    description: `Retrouvez tous les articles Yeeso publiés dans la catégorie ${found.displayCategory}.`,
    path: `/articles/category/${categorySlug}`,
    basePath,
  });
}

export default async function Page({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const found = findDisplayCategory(categorySlug);

  if (!found) {
    notFound();
  }

  const authors = getAllAuthors();

  return (
    <CategoryPage
      category={found.displayCategory}
      articles={found.articles}
      authors={authors}
    />
  );
}

export function generateStaticParams() {
  const categories = new Set<string>();

  for (const article of getAllArticles()) {
    for (const category of article.categories) {
      categories.add(slugifyCategory(category));
    }
  }

  return Array.from(categories).map((category) => ({ category }));
}
