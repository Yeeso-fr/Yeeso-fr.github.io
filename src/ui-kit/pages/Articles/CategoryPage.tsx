import type { Article } from "@/entities/articles/articles";
import type { Author } from "@/entities/authors/authors";
import { ArticlesList } from "@/ui-kit/articles/ArticlesList/ArticlesList";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import "./CategoryPage.css";

interface CategoryPageProps {
  category: string;
  articles: Article[];
  authors: Author[];
}

/** Article titles here follow a "Name – Role" convention (e.g. "Carole
 * Michelon – Co fondatrice Me&YouToo"); splitting on the first en dash
 * gives the summary a short name to lead with instead of the full title,
 * with the role as a muted second line. Titles without that separator
 * (e.g. "Ornella Del Prado") just render as a name with no role line. */
const splitTitle = (title: string) => {
  const [name, ...rest] = title.split(" – ");
  return { name, role: rest.length > 0 ? rest.join(" – ") : undefined };
};

export const CategoryPage = ({
  category,
  articles,
  authors,
}: CategoryPageProps) => {
  const sortedByTitle = [...articles].sort((a, b) =>
    a.title.localeCompare(b.title, "fr"),
  );

  return (
    <>
      <PageHeader title={`Catégorie « ${category} »`} />
      <main id="maincontent" tabIndex={-1} className="category-page main">
        {articles.length > 0 && (
          <>
            {/* Quick-scan index — the cards below carry a cover photo and
                metadata each, so finding one name among ~20 means a lot of
                scrolling without this. */}
            <nav
              className="category-page__summary"
              aria-label={`Sommaire des articles de la catégorie ${category}`}
            >
              <h2 className="category-page__section-title">
                Sommaire ({sortedByTitle.length})
              </h2>
              <ul>
                {sortedByTitle.map((article) => {
                  const { name, role } = splitTitle(article.title);
                  return (
                    <li key={article.slug}>
                      <StyledLink
                        href={`/articles/${article.slug}`}
                        className="category-page__summary-link"
                        ariaLabel={`Lire l'article : ${article.title}`}
                      >
                        <span className="category-page__summary-name">
                          {name}
                        </span>
                        {role && (
                          <span className="category-page__summary-role">
                            {role}
                          </span>
                        )}
                      </StyledLink>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <section>
              <h2 className="category-page__section-title">Articles</h2>
              <ArticlesList
                articles={articles}
                authors={authors}
                headingLevel={3}
              />
            </section>
          </>
        )}
      </main>
    </>
  );
};
