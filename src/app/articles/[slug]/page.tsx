import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DEFAULT_OG_IMAGE_PATH,
  resolveImageUrl,
  toAbsoluteUrl,
  toJsonLd,
} from "@/config/seo";
import type { Article } from "@/entities/articles/articles";
import { ArticleDetailPage } from "@/ui-kit/pages/Articles/ArticleDetailPage";
import { getAllArticles, getReadingTime } from "@/usecases/articles";
import { getAllAuthors, resolveAuthorCredit } from "@/usecases/authors";

const basePath = process.env.PAGES_BASE_PATH ?? "";
const siteUrl = process.env.PUBLIC_SITE_URL ?? "http://localhost:3000";

const resolveArticleImage = (article: Article) =>
  article.coverImage
    ? {
        url: resolveImageUrl(article.coverImage.src, basePath),
        alt: article.coverImage.alt,
      }
    : {
        url: `${basePath}${DEFAULT_OG_IMAGE_PATH}`,
        width: 1200,
        height: 630,
      };

export const generateStaticParams = async () => {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getAllArticles().find((a) => a.slug === slug);
  if (!article) return {};

  const image = resolveArticleImage(article);

  return {
    title: article.title,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      type: "article",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      images: [image.url],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const articles = getAllArticles();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return notFound();

  const authors = getAllAuthors();
  const author = authors.find((a) => a.slug === article.author);
  const coAuthor = article.coAuthor
    ? resolveAuthorCredit(article.coAuthor, authors)
    : undefined;

  const readingTime = getReadingTime(article.content);

  const jsonLd = toJsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    author: { "@type": "Person", name: author?.name ?? article.author },
    datePublished: article.publishedAt,
    image: toAbsoluteUrl(resolveArticleImage(article).url, siteUrl),
    mainEntityOfPage: `${siteUrl}articles/${article.slug}/`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD serialized via toJsonLd, which escapes "<"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <ArticleDetailPage
        article={article}
        author={author}
        coAuthor={coAuthor}
        readingTime={readingTime}
      />
    </>
  );
}
