"use client";

import { useSearchParams } from "next/navigation";
import type { Article } from "@/entities/articles/articles";
import type { Author } from "@/entities/authors/authors";
import { ArticlesList } from "@/ui-kit/articles/ArticlesList/ArticlesList";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import "./SearchResultsPage.css";

interface SearchResultsPageProps {
  articles: Article[];
  authors: Author[];
}

export const SearchResultsFallback = () => (
  <>
    <PageHeader title="Recherche" />
    <main id="maincontent" tabIndex={-1} className="search-results main" />
  </>
);

export const SearchResultsPage = ({
  articles,
  authors,
}: SearchResultsPageProps) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const q = query.toLowerCase().trim();

  const filteredArticles = q
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.categories.some((c) => c.toLowerCase().includes(q)),
      )
    : [];

  const hasResults = filteredArticles.length > 0;

  return (
    <>
      <PageHeader title={q ? `Résultats pour « ${q} »` : "Recherche"} />
      <main id="maincontent" tabIndex={-1} className="search-results main">
        {q && !hasResults && (
          <p className="search-results__empty">
            Aucun résultat pour cette recherche.
          </p>
        )}

        {filteredArticles.length > 0 && (
          <section>
            <h2 className="search-results__section-title">Articles</h2>
            <ArticlesList
              articles={filteredArticles}
              authors={authors}
              headingLevel={3}
            />
          </section>
        )}
      </main>
    </>
  );
};
