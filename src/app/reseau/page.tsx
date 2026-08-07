import type { Metadata } from "next";
import { NetworkPage } from "@/ui-kit/pages/Network/NetworkPage";

export const metadata: Metadata = {
  title: "Réseau",
  alternates: {
    canonical: "/reseau",
  },
};

export default function Page() {
  return <NetworkPage />;
}
