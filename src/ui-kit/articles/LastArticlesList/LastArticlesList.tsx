import type { Article } from "@/entities/articles/articles";
import type { Author } from "@/entities/authors/authors";
import { ArticleCard } from "@/ui-kit/articles/ArticleCard/ArticleCard";
import "./LastArticlesList.css";

interface LastArticlesListProps {
  articles: Article[];
  authors: Author[];
}

export const LastArticlesList = ({
  articles,
  authors,
}: LastArticlesListProps) => {
  const getAuthor = (article: Article) =>
    authors.find((a) => a.slug === article.author);

  return (
    <ul className="last-articles__list list-grid list-grid--featured">
      {articles.map((article) => {
        const author = getAuthor(article);
        return (
          <li key={article.slug}>
            <ArticleCard
              title={article.title}
              publishedAt={article.publishedAt}
              url={`/articles/${article.slug}`}
              author={author ? author.name : article.author}
              authorUrl={author ? `/authors/${author.slug}` : undefined}
              categories={article.categories}
              coverImage={article.coverImage}
              headingLevel={3}
            />
          </li>
        );
      })}
    </ul>
  );
};
