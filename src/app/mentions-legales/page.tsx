import type { Metadata } from "next";
import { MentionsLegalesPage } from "@/ui-kit/pages/Legal/MentionsLegalesPage";

export const metadata: Metadata = {
  title: "Mentions Légales",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function Page() {
  return <MentionsLegalesPage />;
}
