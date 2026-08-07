import type { Metadata } from "next";
import { ConferencesPage } from "@/ui-kit/pages/Conferences/ConferencesPage";

export const metadata: Metadata = {
  title: "Conférences & Événements",
  alternates: {
    canonical: "/conferences",
  },
};

export default function Page() {
  return <ConferencesPage />;
}
