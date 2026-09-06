import type { Article } from "@/entities/articles/articles";
import type { Author } from "@/entities/authors/authors";
import { ArticlesList } from "@/ui-kit/articles/ArticlesList/ArticlesList";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import "./CategoryPage.css";

interface CategoryPageProps {
  category: string;
  articles: Article[];
  authors: Author[];
}

export const CategoryPage = ({
  category,
  articles,
  authors,
}: CategoryPageProps) => {
  return (
    <>
      <PageHeader title={`Catégorie ${category}`} />
      <main id="maincontent" tabIndex={-1} className="category-page main">
        {articles.length > 0 && (
          <section>
            <h2 className="category-page__section-title">Articles</h2>
            <ArticlesList
              articles={articles}
              authors={authors}
              headingLevel={3}
            />
          </section>
        )}
      </main>
    </>
  );
};
