import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/config/seo";
import { ArticlesListPage } from "@/ui-kit/pages/Articles/ArticlesListPage";
import {
  getPaginatedArticles,
  getTotalArticlePages,
} from "@/usecases/articles";
import { getAllAuthors } from "@/usecases/authors";

const basePath = process.env.PAGES_BASE_PATH ?? "";

type PageProps = {
  params: Promise<{
    page: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { page } = await params;
  const currentPage = Number(page);

  if (Number.isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const { articles, totalPages } = getPaginatedArticles(currentPage);

  if (currentPage > totalPages) {
    notFound();
  }

  const authors = getAllAuthors();

  return (
    <ArticlesListPage
      articles={articles}
      authors={authors}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}

export function generateStaticParams() {
  const totalPages = getTotalArticlePages();

  return Array.from({ length: totalPages }, (_, i) => ({
    page: String(i + 1),
  }));
}

export const dynamic = "error";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { page } = await params;
  const currentPage = Number(page);

  return buildPageMetadata({
    title: currentPage === 1 ? "Articles" : `Articles – page ${currentPage}`,
    description:
      "Le blog de Yeeso : articles rédigés par la communauté autour de l'IT, de la diversité et de l'inclusion dans la tech.",
    path: currentPage === 1 ? "/articles" : `/articles/page/${currentPage}`,
    basePath,
  });
}
