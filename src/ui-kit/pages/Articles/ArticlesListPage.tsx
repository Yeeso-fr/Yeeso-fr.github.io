import type { Article } from "@/entities/articles/articles";
import type { Author } from "@/entities/authors/authors";
import { ArticlesList } from "@/ui-kit/articles/ArticlesList/ArticlesList";
import { ArticlesSearch } from "@/ui-kit/articles/ArticlesSearch/ArticlesSearch";
import { Pagination } from "@/ui-kit/articles/Pagination/Pagination";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import "./ArticlesListPage.css";

interface ArticlesListPageProps {
  articles: Article[];
  /** Full, unpaginated set — powers the search across every article, not
   * just the current page's. */
  allArticles: Article[];
  authors: Author[];
  currentPage: number;
  totalPages: number;
}

export const ArticlesListPage = ({
  articles,
  allArticles,
  authors,
  currentPage,
  totalPages,
}: ArticlesListPageProps) => {
  return (
    <>
      <PageHeader title="Articles" />
      <main id="maincontent" tabIndex={-1} className="articles_page main">
        <ArticlesSearch articles={allArticles} authors={authors}>
          <ArticlesList articles={articles} authors={authors} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/articles/page"
            indexHref="/articles"
          />
        </ArticlesSearch>
      </main>
    </>
  );
};
