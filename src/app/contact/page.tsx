import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { ContactPage } from "@/ui-kit/pages/Contact/ContactPage";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Écoles, entreprises, bénévoles, journalistes : contactez Yeeso pour toute question ou projet autour de la mixité et de l'inclusion dans la tech.",
  path: "/contact",
  basePath,
});

export default function Page() {
  return <ContactPage />;
}
