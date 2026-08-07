import { compareDesc } from "date-fns";
import { SITE_DESCRIPTION } from "@/config/seo";
import { getAllArticles } from "@/usecases/articles";
import { getAllAuthors } from "@/usecases/authors";

export const dynamic = "force-static";

const siteUrl = process.env.PUBLIC_SITE_URL ?? "http://localhost:3000";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export function GET() {
  const authors = getAllAuthors();
  const articles = [...getAllArticles()].sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  const items = articles
    .map((article) => {
      const author = authors.find((a) => a.slug === article.author);
      const url = `${siteUrl}articles/${article.slug}/`;
      return `<item>
  <title>${escapeXml(article.title)}</title>
  <link>${url}</link>
  <guid>${url}</guid>
  <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
  ${author ? `<author>${escapeXml(author.name)}</author>` : ""}
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Yeeso</title>
  <link>${siteUrl}articles/</link>
  <description>${escapeXml(SITE_DESCRIPTION)}</description>
  <language>fr</language>
  ${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
