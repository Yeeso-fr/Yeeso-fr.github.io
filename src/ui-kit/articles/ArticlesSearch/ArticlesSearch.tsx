"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";
import { useId, useMemo, useState } from "react";
import type { Article } from "@/entities/articles/articles";
import type { Author } from "@/entities/authors/authors";
import { ArticlesList } from "@/ui-kit/articles/ArticlesList/ArticlesList";
import "./ArticlesSearch.css";

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

type ArticlesSearchProps = {
  /** Full, unpaginated article set to search across — the paginated
   * `articles` shown by default only cover the current page. */
  articles: Article[];
  authors: Author[];
  /** The normal paginated list + pager, shown while the search is empty. */
  children: ReactNode;
};

export const ArticlesSearch = ({
  articles,
  authors,
  children,
}: ArticlesSearchProps) => {
  const [query, setQuery] = useState("");
  const inputId = useId();

  const results = useMemo(() => {
    const normalizedQuery = normalize(query.trim());
    if (!normalizedQuery) return null;
    const getAuthorName = (article: Article) =>
      authors.find((a) => a.slug === article.author)?.name ?? article.author;
    return articles.filter((article) =>
      normalize(`${article.title} ${getAuthorName(article)}`).includes(
        normalizedQuery,
      ),
    );
  }, [query, articles, authors]);

  return (
    <div className="articles-search">
      <div className="articles-search__field">
        <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden />
        <label htmlFor={inputId} className="sr-only">
          Rechercher un article par nom ou par titre
        </label>
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Rechercher par nom ou par titre..."
        />
      </div>

      {results === null ? (
        children
      ) : results.length > 0 ? (
        <ArticlesList articles={results} authors={authors} />
      ) : (
        <p className="articles-search__empty">
          Aucun résultat pour « {query.trim()} ».
        </p>
      )}
    </div>
  );
};
