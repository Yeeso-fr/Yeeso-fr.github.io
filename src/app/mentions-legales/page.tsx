import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { MentionsLegalesPage } from "@/ui-kit/pages/Legal/MentionsLegalesPage";
import { getQaScores } from "@/usecases/qa-scores";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "Mentions Légales",
  description:
    "Mentions légales du site Yeeso : éditeur, hébergement et crédits de l'association loi 1901 dédiée à la féminisation des métiers de l'informatique.",
  path: "/mentions-legales",
  basePath,
});

export default function Page() {
  const qaScores = getQaScores();

  return <MentionsLegalesPage qaScores={qaScores} />;
}
