import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { SitemapPage } from "@/ui-kit/pages/Sitemap/SitemapPage";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "Plan du site",
  description: "Retrouvez toutes les pages du site Yeeso.",
  path: "/plan-du-site",
  basePath,
});

export default function Page() {
  return <SitemapPage />;
}
