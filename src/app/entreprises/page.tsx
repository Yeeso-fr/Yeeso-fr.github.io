import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { CompanyPage } from "@/ui-kit/pages/Company/CompanyPage";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "Nos prestations pour les entreprises",
  description:
    "Accélérez la mixité dans votre entreprise avec Yeeso : partenariat, conférences, formations et accompagnement à la démarche de mixité de vos équipes.",
  path: "/entreprises",
  basePath,
});

export default function Page() {
  return <CompanyPage />;
}
