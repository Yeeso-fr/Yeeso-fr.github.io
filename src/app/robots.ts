import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.PUBLIC_SITE_URL ?? "http://localhost:3000/";
const disallowIndexing = process.env.DISALLOW_ROBOTS === "true";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(disallowIndexing ? { disallow: "/" } : { allow: "/" }),
    },
    sitemap: `${siteUrl}sitemap.xml`,
  };
}
