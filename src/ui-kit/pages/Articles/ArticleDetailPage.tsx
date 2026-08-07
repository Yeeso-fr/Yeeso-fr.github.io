import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import type { Article } from "@/entities/articles/articles";
import type { Author } from "@/entities/authors/authors";
import { ArticleContent } from "@/ui-kit/articles/ArticleContent/ArticleContent";
import { AuthorCardContent } from "@/ui-kit/articles/AuthorCard/AuthorCardContent";
import { AuthorCreditLink } from "@/ui-kit/components/atoms/AuthorCreditLink/AuthorCreditLink";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import type { AuthorCredit } from "@/usecases/authors";
import "./ArticleDetailPage.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

interface ArticleDetailPageProps {
  article: Article;
  author: Author | undefined;
  coAuthor: AuthorCredit | undefined;
  readingTime: number;
}

export const ArticleDetailPage = ({
  article,
  author,
  coAuthor,
  readingTime,
}: ArticleDetailPageProps) => {
  return (
    <main id="maincontent" tabIndex={-1}>
      <article className="article-page">
        <header className="article-page__header">
          <div className="article-page__header-wrapper">
            <h1 className="article-page__title">{article.title}</h1>
            <p className="article-page__meta">
              Publié le{" "}
              {format(parseISO(article.publishedAt), "d MMMM yyyy", {
                locale: fr,
              })}
              <span className="article-page__meta-separator" aria-hidden="true">
                &bull;
              </span>
              <span>{readingTime} min de lecture</span>
              <span className="article-page__meta-separator" aria-hidden="true">
                &bull;
              </span>
              <span className="font-semibold">
                par{" "}
                {author ? (
                  <StyledLink href={`/authors/${author.slug}`} prefetch={false}>
                    {author.name}
                  </StyledLink>
                ) : (
                  article.author
                )}
              </span>
              {coAuthor && (
                <>
                  <span>&amp;</span>
                  <span className="font-semibold">
                    <AuthorCreditLink credit={coAuthor} />
                  </span>
                </>
              )}
            </p>
            {article.categories && (
              <div className="article-page__categories">
                {article.categories.map((category) => (
                  <StyledLink
                    key={category}
                    href={`/articles/category/${category.toLowerCase()}`}
                    className="article-card__category"
                    bordered
                    prefetch={false}
                  >
                    {category}
                  </StyledLink>
                ))}
              </div>
            )}
            {article.originalUrl && (
              <p className="article-page__original">
                <StyledLink
                  href={article.originalUrl}
                  ariaLabel="Lire l'article original (lien externe, ouvre un nouvel onglet)"
                >
                  Lire l&apos;article original
                </StyledLink>
              </p>
            )}

            {article.coverImage && (
              <img
                className="article-page__cover"
                src={
                  article.coverImage.src.startsWith("/")
                    ? `${basePath}${article.coverImage.src}`
                    : article.coverImage.src
                }
                alt={article.coverImage.alt}
              />
            )}
          </div>
        </header>
        <ArticleContent content={article.content} />
        <div className="article-page__footer">
          {author && <AuthorCardContent author={author} headingLevel="h2" />}
        </div>
      </article>
    </main>
  );
};
