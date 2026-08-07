import { z } from "zod";

export const AuthorSchema = z.object({
  name: z.string(),
  slug: z.string(),
  avatar: z.union([z.url(), z.string().startsWith("/")]),
  pronouns: z.string().optional(),
  website: z.url().optional(),
  bluesky: z.url().optional(),
  mastodon: z.url().optional(),
  github: z.url().optional(),
  linkedin: z.url().optional(),
  medium: z.url().optional(),
  devto: z.url().optional(),
  codepen: z.url().optional(),
  content: z.string(),
});

export type Author = z.infer<typeof AuthorSchema>;
