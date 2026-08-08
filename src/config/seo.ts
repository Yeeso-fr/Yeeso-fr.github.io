export const SITE_DESCRIPTION =
  "Yeeso accélère la féminisation des métiers de l'IT : sensibilisation dès l'école, accompagnement des entreprises, mentorat et réseau IT Women Network.";

export const DEFAULT_OG_IMAGE_PATH = "/og/home.jpg";

export function resolveImageUrl(src: string, basePath: string): string {
  return src.startsWith("http") ? src : `${basePath}${src}`;
}

/** Shared title/description/canonical/OG/Twitter block for static pages — explicit per page (rather than relying on layout inheritance) so each page's social share shows its own title, description and the default OG image. */
export function buildPageMetadata({
  title,
  description,
  path,
  basePath,
}: {
  title: string;
  description: string;
  path: string;
  basePath: string;
}) {
  const imageUrl = `${basePath}${DEFAULT_OG_IMAGE_PATH}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

/** JSON-LD `image`/`url` fields must be fully-qualified — unlike Next's Metadata API, they aren't resolved against metadataBase. */
export function toAbsoluteUrl(url: string, siteUrl: string): string {
  return url.startsWith("http") ? url : `${siteUrl}${url.replace(/^\//, "")}`;
}

/** Serializes JSON-LD for a `<script>` tag, escaping `<` so the payload can't break out of it. */
export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
