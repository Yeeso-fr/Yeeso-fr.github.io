import { type Article, ArticleSchema } from "@/entities/articles/articles";
import { readContent } from "@/infrastructure/shared/read-content";

export function readArticles(): Article[] {
  return readContent("articles", ArticleSchema);
}
