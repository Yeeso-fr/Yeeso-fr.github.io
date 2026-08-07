import type { Metadata } from "next";
import { AuthorsListPage } from "@/ui-kit/pages/Author/AuthorsListPage";
import { getAllAuthors } from "@/usecases/authors";

export const metadata: Metadata = {
  title: "L'équipe éditoriale",
  alternates: {
    canonical: "/authors",
  },
};

export default function Page() {
  const authors = getAllAuthors();

  return <AuthorsListPage authors={authors} />;
}
