import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { ProgramsPage } from "@/ui-kit/pages/Programs/ProgramsPage";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "Programmes",
  description:
    "Éducation, entreprise, réseau, conférences : découvrez les quatre programmes de Yeeso pour accélérer la mixité dans la tech, de la maternelle au comité de direction.",
  path: "/programmes",
  basePath,
});

export default function Page() {
  return <ProgramsPage />;
}
