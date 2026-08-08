import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { NetworkPage } from "@/ui-kit/pages/Network/NetworkPage";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "Réseau",
  description:
    "IT Women Network : mentorat, coding dojos, groupes de parole et conférences. Rejoignez le réseau d'entraide de Yeeso pour progresser ensemble dans l'IT.",
  path: "/reseau",
  basePath,
});

export default function Page() {
  return <NetworkPage />;
}
