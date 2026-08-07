export const SITE_DESCRIPTION = "L'avenir de l'IT avec les femmes !";

export const DEFAULT_OG_IMAGE_PATH = "/og/home.jpg";

export function resolveImageUrl(src: string, basePath: string): string {
  return src.startsWith("http") ? src : `${basePath}${src}`;
}

/** JSON-LD `image`/`url` fields must be fully-qualified — unlike Next's Metadata API, they aren't resolved against metadataBase. */
export function toAbsoluteUrl(url: string, siteUrl: string): string {
  return url.startsWith("http") ? url : `${siteUrl}${url.replace(/^\//, "")}`;
}

/** Serializes JSON-LD for a `<script>` tag, escaping `<` so the payload can't break out of it. */
export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
