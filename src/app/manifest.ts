import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yeeso",
    short_name: "Yeeso",
    icons: [
      {
        src: `${basePath}/favicons/android-chrome-192x192.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${basePath}/favicons/android-chrome-512x512.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#212f7a",
    background_color: "#f9f7ee",
    display: "standalone",
  };
}
