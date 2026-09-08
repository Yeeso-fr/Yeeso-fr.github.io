import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { AboutPage } from "@/ui-kit/pages/About/AboutPage";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "À Propos",
  description:
    "Découvrez la mission, l'histoire et l'équipe de Yeeso, association loi 1901 qui œuvre pour un monde de l'IT plus juste, quel que soit le genre.",
  path: "/a-propos",
  basePath,
});

export default function Page() {
  return <AboutPage />;
}
