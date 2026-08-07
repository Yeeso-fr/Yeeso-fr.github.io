import type { Author } from "@/entities/authors/authors";
import { readAuthors } from "@/infrastructure/authors/authors.repository";

export function getAllAuthors() {
  return readAuthors();
}

export type AuthorCredit = {
  name: string;
  slug?: string;
};

export function resolveAuthorCredit(
  value: string,
  authors: Author[],
): AuthorCredit {
  const author = authors.find((a) => a.slug === value);
  return author ? { name: author.name, slug: author.slug } : { name: value };
}
