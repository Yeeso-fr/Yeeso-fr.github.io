import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { FaqPage } from "@/ui-kit/pages/Faq/FaqPage";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ",
  description:
    "Adhésion, mentorat, écoles, conférences, partenariat, mécénat : nos réponses rapides aux questions fréquemment posées sur Yeeso.",
  path: "/faq",
  basePath,
});

export default function Page() {
  return <FaqPage />;
}
