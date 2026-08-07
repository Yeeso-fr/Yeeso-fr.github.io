import type { Metadata } from "next";
import { HomePage } from "@/ui-kit/pages/Home/HomePage";
import { getLastArticles } from "@/usecases/articles";
import { getAllAuthors } from "@/usecases/authors";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const articles = getLastArticles(3);
  const authors = getAllAuthors();

  return <HomePage articles={articles} authors={authors} />;
}
