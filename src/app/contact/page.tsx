import type { Metadata } from "next";
import { ContactPage } from "@/ui-kit/pages/Contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
