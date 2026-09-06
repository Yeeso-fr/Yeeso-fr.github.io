import type { Article } from "@/entities/articles/articles";
import type { Author } from "@/entities/authors/authors";
import { ArticlesList } from "@/ui-kit/articles/ArticlesList/ArticlesList";
import { Pagination } from "@/ui-kit/articles/Pagination/Pagination";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import "./ArticlesListPage.css";

interface ArticlesListPageProps {
  articles: Article[];
  authors: Author[];
  currentPage: number;
  totalPages: number;
}

export const ArticlesListPage = ({
  articles,
  authors,
  currentPage,
  totalPages,
}: ArticlesListPageProps) => {
  return (
    <>
      <PageHeader title="Articles" />
      <main id="maincontent" tabIndex={-1} className="articles_page main">
        <ArticlesList articles={articles} authors={authors} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/articles/page"
          indexHref="/articles"
        />
      </main>
    </>
  );
};
