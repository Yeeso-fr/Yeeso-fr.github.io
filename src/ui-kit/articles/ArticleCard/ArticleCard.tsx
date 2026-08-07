import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./ArticleCard.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

type ArticleCardProps = {
  title: string;
  publishedAt: string;
  url: string;
  author?: string;
  authorUrl?: string;
  description?: string;
  categories?: string[];
  coverImage?: { src: string; alt: string };
  showAuthor?: boolean;
  headingLevel?: 2 | 3;
};

export function ArticleCard({
  title,
  publishedAt,
  url,
  author,
  authorUrl,
  description,
  categories,
  coverImage,
  showAuthor = true,
  headingLevel = 2,
}: ArticleCardProps) {
  const Heading = `h${headingLevel}` as "h2" | "h3";

  return (
    <article className="article-card framed-four-corners">
      {coverImage && (
        <img
          className="article-card__cover"
          src={
            coverImage.src.startsWith("/")
              ? `${basePath}${coverImage.src}`
              : coverImage.src
          }
          alt={coverImage.alt}
          loading="lazy"
        />
      )}

      <StyledLink
        className="article-card__header"
        href={url}
        ariaLabel={`Lire l'article : ${title}`}
      >
        <Heading className="article-card__title">{title}</Heading>
      </StyledLink>

      {showAuthor && author && (
        <div className="article-card__author-container">
          {authorUrl ? (
            <StyledLink
              href={authorUrl}
              className="article-card__author"
              prefetch={false}
            >
              Par {author}
            </StyledLink>
          ) : (
            <small className="article-card__author">Par {author}</small>
          )}
        </div>
      )}

      {publishedAt && (
        <div className="article-card__metadata">
          <time dateTime={publishedAt}>
            Publié le{" "}
            {format(parseISO(publishedAt), "d MMMM yyyy", { locale: fr })}
          </time>
        </div>
      )}

      {description && (
        <p className="article-card__first-paragraph">{description}</p>
      )}

      {categories && (
        <div className="article-card__footer">
          <ul className="article-card__categories">
            {categories.map((category) => (
              <li key={category}>
                <StyledLink
                  href={`/articles/category/${category.toLowerCase()}`}
                  bordered
                  className="article-card__category"
                  ariaLabel={`Voir tous les articles de la catégorie ${category}`}
                  prefetch={false}
                >
                  {category}
                </StyledLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
