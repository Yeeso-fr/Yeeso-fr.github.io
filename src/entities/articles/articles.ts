import { z } from "zod";
import { AuthorSchema } from "../authors/authors";

export const ArticleSchema = z.object({
  title: z.string(),
  slug: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/),
  author: AuthorSchema.shape.slug,
  coAuthor: z.string().optional(),
  publishedAt: z.iso.date(),
  categories: z.array(z.string()),
  originalUrl: z.url().optional(),
  coverImage: z
    .object({
      src: z.union([z.url(), z.string().startsWith("/")]),
      alt: z.string(),
    })
    .optional(),
  content: z.string(),
});

export type Article = z.infer<typeof ArticleSchema>;
