import type { Author } from "@/entities/authors/authors";
import { AuthorCard } from "@/ui-kit/components/organisms/AuthorCard/AuthorCard";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import "./AuthorsListPage.css";
import type React from "react";

interface AuthorsListPageProps {
  authors: Author[];
}

export const AuthorsListPage = ({ authors }: AuthorsListPageProps) => {
  return (
    <>
      <PageHeader title="L'équipe éditoriale" />
      <main id="maincontent" tabIndex={-1} className="authors-list-page">
        <div className="container">
          <ul className="authors-list">
            {authors.map((author, index) => (
              <li
                key={author.slug}
                className="authors-list__item"
                style={
                  { "--card-index": Math.min(index, 8) } as React.CSSProperties
                }
              >
                <AuthorCard author={author} variant="mini" />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};
