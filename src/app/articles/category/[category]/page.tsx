import { notFound } from "next/navigation";
import { CategoryPage } from "@/ui-kit/pages/Articles/CategoryPage";
import { getAllArticles } from "@/usecases/articles";
import { getAllAuthors } from "@/usecases/authors";

type PageProps = {
  params: Promise<{ category: string }>;
};

export default async function Page({ params }: PageProps) {
  const { category } = await params;
  const normalizedCategory = category.toLowerCase();

  const hasCategory = (categories: string[]) =>
    categories.some((c) => c.toLowerCase() === normalizedCategory);

  const articles = getAllArticles().filter((a) => hasCategory(a.categories));

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
