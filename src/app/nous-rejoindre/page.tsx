import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { NousRejoindrePage } from "@/ui-kit/pages/NousRejoindre/NousRejoindrePage";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "Nous rejoindre",
  description:
    "Adhérez à Yeeso ou soutenez notre mission par un don : développez votre réseau, votre expertise et votre engagement pour la mixité dans la Tech.",
  path: "/nous-rejoindre",
  basePath,
});

export default function Page() {
  return <NousRejoindrePage />;
}
