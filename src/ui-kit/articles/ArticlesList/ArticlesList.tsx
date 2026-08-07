import type { Article } from "@/entities/articles/articles";
import type { Author } from "@/entities/authors/authors";
import { ArticleCard } from "@/ui-kit/articles/ArticleCard/ArticleCard";
import "./ArticlesList.css";
import type React from "react";

interface ArticlesListProps {
  articles: Article[];
  authors: Author[];
  showAuthor?: boolean;
  headingLevel?: 2 | 3;
}

export const ArticlesList = ({
  articles,
  authors,
  showAuthor = true,
  headingLevel = 2,
}: ArticlesListProps) => {
  const getAuthor = (article: Article) =>
    authors.find((a) => a.slug === article.author);

  return (
    <ul className="articles__list list-grid">
      {articles.map((article, index) => {
        const author = getAuthor(article);
        return (
          <li
            key={article.slug}
            style={
              { "--card-index": Math.min(index, 8) } as React.CSSProperties
            }
          >
            <ArticleCard
              title={article.title}
              publishedAt={article.publishedAt}
              url={`/articles/${article.slug}`}
              author={author ? author.name : article.author}
              authorUrl={author ? `/authors/${author.slug}` : undefined}
              categories={article.categories}
              coverImage={article.coverImage}
              showAuthor={showAuthor}
              headingLevel={headingLevel}
            />
          </li>
        );
      })}
    </ul>
  );
};
