/** ASCII-safe URL slug for a category (e.g. "Nos rôles modèles" -> "nos-roles-modeles").
 *
 * Kept in its own fs-free module (rather than alongside the rest of
 * usecases/articles.ts) so components that need it — like ArticleCard,
 * which can end up in a client bundle via ArticlesSearch — don't drag in
 * the article repository's `node:fs` read, which can't be bundled for the
 * browser.
 */
export function slugifyCategory(category: string): string {
  return category
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
