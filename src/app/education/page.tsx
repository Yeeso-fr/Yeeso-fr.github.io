import type { Metadata } from "next";
import { EducationPage } from "@/ui-kit/pages/Education/EducationPage";

export const metadata: Metadata = {
  title: "Éducation",
  alternates: {
    canonical: "/education",
  },
};

export default function Page() {
  return <EducationPage />;
}
