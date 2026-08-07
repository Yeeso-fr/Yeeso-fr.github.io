import Link from "next/link";
import "./Pagination.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string; // ex: "/articles/page"
  indexHref: string; // ex: "/articles" - href used for page 1
};

export function Pagination({
  currentPage,
  totalPages,
  basePath,
  indexHref,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const hrefForPage = (page: number) =>
    page === 1 ? indexHref : `${basePath}/${page}`;

  const pages = new Set<number>();

  pages.add(1);

  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i > 1 && i < totalPages) {
      pages.add(i);
    }
  }

  pages.add(totalPages);

  const orderedPages = Array.from(pages).sort((a, b) => a - b);

  return (
    <nav aria-label="Pagination">
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="pagination__item">
            <Link
              className="pagination__item-link"
              href={hrefForPage(currentPage - 1)}
              rel="prev"
              aria-label="Page précédente"
            >
              <span aria-hidden="true">←</span>
              <span className="sr-only">Précédent</span>
            </Link>
          </li>
        )}

        {orderedPages.map((page, index) => {
          const prevPage = orderedPages[index - 1];

          return (
            <li key={page} className="pagination__item">
              {prevPage && page - prevPage > 1 && (
                <span className="pagination-ellipsis" aria-hidden="true">
                  …
                </span>
              )}

              {page === currentPage ? (
                <span aria-current="page">{page}</span>
              ) : (
                <Link
                  className="pagination__item-link"
                  href={hrefForPage(page)}
                  aria-label={`Aller à la page ${page}`}
                >
                  {page}
                </Link>
              )}
            </li>
          );
        })}

        {currentPage < totalPages && (
          <li className="pagination__item">
            <Link
              className="pagination__item-link"
              href={`${basePath}/${currentPage + 1}`}
              rel="next"
              aria-label="Page suivante"
            >
              <span className="sr-only">Suivant</span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
