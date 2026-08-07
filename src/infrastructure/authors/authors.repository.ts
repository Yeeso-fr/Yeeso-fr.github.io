import { type Author, AuthorSchema } from "@/entities/authors/authors";
import { readContent } from "@/infrastructure/shared/read-content";

export function readAuthors(): Author[] {
  return readContent("authors", AuthorSchema);
}
