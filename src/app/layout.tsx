import { clsx } from "clsx";
import type { Metadata } from "next";
import { Arimo, Fira_Code } from "next/font/google";
import "@/ui-kit/styles/theme.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type React from "react";
import { DEFAULT_OG_IMAGE_PATH, SITE_DESCRIPTION } from "@/config/seo";
import { Footer } from "@/ui-kit/components/templates/Footer/Footer";
import { Navigation } from "@/ui-kit/components/templates/Navigation/Navigation";
import { RouteAnnouncer } from "@/ui-kit/components/templates/RouteAnnouncer/RouteAnnouncer";
import { getAllArticles } from "@/usecases/articles";
import { getQaScores } from "@/usecases/qa-scores";

config.autoAddCss = false;

const primaryFont = Arimo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const monospaceFont = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

const basePath = process.env.PAGES_BASE_PATH ?? "";
const siteUrl = process.env.PUBLIC_SITE_URL ?? "http://localhost:3000";

const themeInitScript = `
(function () {
  var theme = "dark";
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      theme = stored;
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      // No stored choice: honor an explicit system preference either way,
      // but default to dark when the browser can't report one at all.
      theme = "light";
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  } catch (e) {}
  document.documentElement.setAttribute("data-theme", theme);
})();
`;

const fontInitScript = `
(function () {
  try {
    var font = localStorage.getItem("font");
    if (font === "opendyslexic" || font === "luciole") {
      document.documentElement.setAttribute("data-font", font);
    }
  } catch (e) {}
})();
`;

const animationsInitScript = `
(function () {
  try {
    if (localStorage.getItem("animations") === "paused") {
      document.documentElement.setAttribute("data-animations", "paused");
    }
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  title: {
    default: "Yeeso",
    template: "%s | Yeeso",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: `${basePath}/favicons/favicon.ico`, sizes: "any" },
      {
        url: `${basePath}/favicons/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: `${basePath}/favicons/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      { url: `${basePath}/favicons/apple-touch-icon.png`, sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "Yeeso",
    description: SITE_DESCRIPTION,
    url: siteUrl,
    siteName: "Yeeso",
    locale: "fr_FR",
    type: "website",
    images: [
      { url: `${basePath}${DEFAULT_OG_IMAGE_PATH}`, width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeeso",
    description: SITE_DESCRIPTION,
    images: [`${basePath}${DEFAULT_OG_IMAGE_PATH}`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const qaScores = getQaScores();
  const hasArticles = getAllArticles().length > 0;

  return (
    <html
      lang="fr"
      className={clsx(primaryFont.className, monospaceFont.variable)}
      suppressHydrationWarning
    >
      <head>
        {/* Applied before hydration to avoid a theme flash and to prevent
        the global link color transition from firing on every anchor on mount. */}
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static script constant, no user input involved */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static script constant, no user input involved */}
        <script dangerouslySetInnerHTML={{ __html: fontInitScript }} />
        {/* Applied before hydration so paused entrance animations (e.g.
        the hero photo group) never get a chance to play on load. */}
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static script constant, no user input involved */}
        <script dangerouslySetInnerHTML={{ __html: animationsInitScript }} />
        <link rel="stylesheet" href={`${basePath}/print.css`} media="print" />
      </head>
      <body>
        <RouteAnnouncer />
        <Navigation hasArticles={hasArticles} />
        {children}
        <Footer qaScores={qaScores} />
      </body>
    </html>
  );
}
