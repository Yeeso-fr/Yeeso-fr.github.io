import type { Metadata } from "next";
import { CompanyPage } from "@/ui-kit/pages/Company/CompanyPage";

export const metadata: Metadata = {
  title: "Entreprises",
  alternates: {
    canonical: "/entreprises",
  },
};

export default function Page() {
  return <CompanyPage />;
}
