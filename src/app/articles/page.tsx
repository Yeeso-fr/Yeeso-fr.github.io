import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { ArticlesListPage } from "@/ui-kit/pages/Articles/ArticlesListPage";
import { getPaginatedArticles } from "@/usecases/articles";
import { getAllAuthors } from "@/usecases/authors";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export default function Page() {
  const { articles, totalPages } = getPaginatedArticles(1);
  const authors = getAllAuthors();

  return (
    <ArticlesListPage
      articles={articles}
      authors={authors}
      currentPage={1}
      totalPages={totalPages}
    />
  );
}

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Articles",
    description:
      "Le blog de Yeeso : articles rédigés par la communauté autour de l'IT, de la diversité et de l'inclusion dans la tech.",
    path: "/articles",
    basePath,
  }),
  alternates: {
    canonical: "/articles",
    types: {
      "application/rss+xml": "/articles/feed.xml",
    },
  },
};
