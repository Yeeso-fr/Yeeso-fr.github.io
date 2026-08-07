import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/recherche",
    },
    sitemap: `${siteUrl}sitemap.xml`,
  };
}
