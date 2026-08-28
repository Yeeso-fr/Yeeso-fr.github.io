import type { MetadataRoute } from "next";
import { getAllArticles } from "@/usecases/articles";
import { getAllAuthors } from "@/usecases/authors";

export const dynamic = "force-static";

const siteUrl = process.env.PUBLIC_SITE_URL ?? "http://localhost:3000/";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "a-propos",
    "mentions-legales",
    "articles",
    "authors",
    "programmes",
    "reseau",
    "entreprises",
    "education",
    "conferences",
    "contact",
    "faq",
  ].map((path) => ({ url: `${siteUrl}${path}${path ? "/" : ""}` }));

  const articles: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${siteUrl}articles/${article.slug}/`,
    lastModified: article.publishedAt,
  }));

  const authors: MetadataRoute.Sitemap = getAllAuthors().map((author) => ({
    url: `${siteUrl}authors/${author.slug}/`,
  }));

  return [...staticRoutes, ...articles, ...authors];
}
