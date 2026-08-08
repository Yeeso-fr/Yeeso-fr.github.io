import type { Metadata } from "next";
import { toAbsoluteUrl, toJsonLd } from "@/config/seo";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  MEETUP_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from "@/config/social-links";
import { HomePage } from "@/ui-kit/pages/Home/HomePage";
import { getLastArticles } from "@/usecases/articles";
import { getAllAuthors } from "@/usecases/authors";

const basePath = process.env.PAGES_BASE_PATH ?? "";
const siteUrl = process.env.PUBLIC_SITE_URL ?? "http://localhost:3000/";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const articles = getLastArticles(3);
  const authors = getAllAuthors();

  const jsonLd = toJsonLd({
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Yeeso",
    url: siteUrl,
    logo: toAbsoluteUrl(
      `${basePath}/img/logos/logo-principal-bleu.webp`,
      siteUrl,
    ),
    description:
      "Yeeso accélère la féminisation des métiers de l'IT : sensibilisation dès l'école, accompagnement des entreprises, mentorat et réseau IT Women Network.",
    email: CONTACT_EMAIL,
    areaServed: "FR",
    sameAs: [LINKEDIN_URL, INSTAGRAM_URL, YOUTUBE_URL, TIKTOK_URL, MEETUP_URL],
  });

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD serialized via toJsonLd, which escapes "<"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <HomePage articles={articles} authors={authors} />
    </>
  );
}
