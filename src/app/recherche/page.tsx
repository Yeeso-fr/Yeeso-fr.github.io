import type { Metadata } from "next";
import { Suspense } from "react";
import {
  SearchResultsFallback,
  SearchResultsPage,
} from "@/ui-kit/pages/Search/SearchResultsPage";
import { getAllArticles } from "@/usecases/articles";
import { getAllAuthors } from "@/usecases/authors";

export const metadata: Metadata = {
  title: "Recherche",
  alternates: {
    canonical: "/recherche",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  const articles = getAllArticles();
  const authors = getAllAuthors();

  return (
    <Suspense fallback={<SearchResultsFallback />}>
      <SearchResultsPage articles={articles} authors={authors} />
    </Suspense>
  );
}
