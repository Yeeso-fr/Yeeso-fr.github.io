import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveImageUrl, toAbsoluteUrl, toJsonLd } from "@/config/seo";
import type { Author } from "@/entities/authors/authors";
import { AuthorPage } from "@/ui-kit/pages/Author/AuthorPage";
import { getAllArticles } from "@/usecases/articles";
import { getAllAuthors } from "@/usecases/authors";

const basePath = process.env.PAGES_BASE_PATH ?? "";
const siteUrl = process.env.PUBLIC_SITE_URL ?? "http://localhost:3000/";

const resolveAuthorDescription = (author: Author) => {
  const de = /^[aeiouhàâéèêëîïôùû]/i.test(author.name) ? "d'" : "de ";
  return `Articles ${de}${author.name} sur Yeeso.`;
};

export const generateStaticParams = async () => {
  const authors = getAllAuthors();
  return authors.map((author) => ({
    slug: author.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAllAuthors().find((a) => a.slug === slug);
  if (!author) return {};

  const description = resolveAuthorDescription(author);
  const imageUrl = resolveImageUrl(author.avatar, basePath);

  return {
    title: author.name,
    description,
    alternates: {
      canonical: `/authors/${author.slug}`,
    },
    openGraph: {
      title: author.name,
      description,
      type: "profile",
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: author.name,
      description,
      images: [imageUrl],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const authors = getAllAuthors();
  const author = authors.find((a) => a.slug === slug);

  if (!author) {
    return notFound();
  }

  const allArticles = getAllArticles();
  const articles = allArticles.filter((article) => article.author === slug);

  const jsonLd = toJsonLd({
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    image: toAbsoluteUrl(resolveImageUrl(author.avatar, basePath), siteUrl),
    url: `${siteUrl}authors/${author.slug}/`,
    sameAs: [
      author.website,
      author.bluesky,
      author.mastodon,
      author.github,
      author.linkedin,
      author.medium,
      author.devto,
      author.codepen,
    ].filter((url): url is string => Boolean(url)),
  });

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD serialized via toJsonLd, which escapes "<"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <AuthorPage author={author} articles={articles} />
    </>
  );
}
