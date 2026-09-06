import type { Article } from "@/entities/articles/articles";
import type { Author } from "@/entities/authors/authors";
import { ArticlesList } from "@/ui-kit/articles/ArticlesList/ArticlesList";
import { AuthorCardContent } from "@/ui-kit/articles/AuthorCard/AuthorCardContent";
import "./AuthorPage.css";

interface AuthorPageProps {
  author: Author;
  articles: Article[];
}

export const AuthorPage = ({ author, articles }: AuthorPageProps) => {
  const authorAsArray = [author];

  return (
    <main id="maincontent" tabIndex={-1} className="author-page">
      <div className="author-page__header">
        <div className="author-page__header-wrapper">
          <AuthorCardContent author={author} headingLevel="h1" />
        </div>
      </div>

      {articles.length > 0 && (
        <section className="author-page__articles">
          <div className="author-page__section-container">
            <h2 className="author-page__title">Ses articles</h2>
            <ArticlesList
              articles={articles}
              authors={authorAsArray}
              showAuthor={false}
              headingLevel={3}
            />
          </div>
        </section>
      )}
    </main>
  );
};
