import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { CompanyPage } from "@/ui-kit/pages/Company/CompanyPage";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "Entreprises",
  description:
    "Accélérez la mixité dans votre entreprise avec Yeeso : partenariat, conseil en mixité des équipes tech et formation de vos collaborateur·rices.",
  path: "/entreprises",
  basePath,
});

export default function Page() {
  return <CompanyPage />;
}
