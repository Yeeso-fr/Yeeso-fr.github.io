import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { MentoratPage } from "@/ui-kit/pages/Mentorat/MentoratPage";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "Mentorat",
  description:
    "Prenez rendez-vous avec un mentor ou une marraine de l'IT Women Network et choisissez votre créneau de mentorat directement en ligne.",
  path: "/mentorat",
  basePath,
});

export default function Page() {
  return <MentoratPage />;
}
