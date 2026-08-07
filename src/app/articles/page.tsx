import type { Metadata } from "next";
import { ArticlesListPage } from "@/ui-kit/pages/Articles/ArticlesListPage";
import { getPaginatedArticles } from "@/usecases/articles";
import { getAllAuthors } from "@/usecases/authors";

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
  title: "Articles",
  alternates: {
    canonical: "/articles",
    types: {
      "application/rss+xml": "/articles/feed.xml",
    },
  },
};
