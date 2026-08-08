import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { EducationPage } from "@/ui-kit/pages/Education/EducationPage";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "Éducation",
  description:
    "Yeeso sensibilise et accompagne dès le plus jeune âge pour déconstruire les stéréotypes de genre et faire découvrir les métiers du numérique.",
  path: "/education",
  basePath,
});

export default function Page() {
  return <EducationPage />;
}
