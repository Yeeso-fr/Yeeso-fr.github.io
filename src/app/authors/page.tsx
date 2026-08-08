import type { Metadata } from "next";
import { buildPageMetadata } from "@/config/seo";
import { AuthorsListPage } from "@/ui-kit/pages/Author/AuthorsListPage";
import { getAllAuthors } from "@/usecases/authors";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = buildPageMetadata({
  title: "L'équipe éditoriale",
  description:
    "Découvrez l'équipe éditoriale de Yeeso : les autrices et auteurs qui contribuent au blog de l'association autour de l'IT et de l'inclusion.",
  path: "/authors",
  basePath,
});

export default function Page() {
  const authors = getAllAuthors();

  return <AuthorsListPage authors={authors} />;
}
