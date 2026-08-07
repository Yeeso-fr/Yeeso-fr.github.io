import type { Metadata } from "next";
import { ProgramsPage } from "@/ui-kit/pages/Programs/ProgramsPage";

export const metadata: Metadata = {
  title: "Programmes",
  alternates: {
    canonical: "/programmes",
  },
};

export default function Page() {
  return <ProgramsPage />;
}
