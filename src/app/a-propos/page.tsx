import type { Metadata } from "next";
import { AboutPage } from "@/ui-kit/pages/About/AboutPage";
import { getQaScores } from "@/usecases/qa-scores";

export const metadata: Metadata = {
  title: "À Propos",
  alternates: {
    canonical: "/a-propos",
  },
};

export default function Page() {
  const qaScores = getQaScores();

  return <AboutPage qaScores={qaScores} />;
}
