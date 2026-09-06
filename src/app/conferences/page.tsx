import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { ConferencesPage } from "@/ui-kit/pages/Conferences/ConferencesPage";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "Conférences & Événements",
  description:
    "Organisez un événement tech plus inclusif avec Yeeso : mixité, inclusion, prévention et sécurité pour vos conférences, meetups et événements tech.",
  path: "/conferences",
  basePath,
});

export default function Page() {
  return <ConferencesPage />;
}
