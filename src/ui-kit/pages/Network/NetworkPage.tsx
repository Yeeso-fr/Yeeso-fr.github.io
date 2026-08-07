import { NetworkFormatsSection } from "@/ui-kit/components/templates/NetworkFormatsSection/NetworkFormatsSection";
import { NetworkSection } from "@/ui-kit/components/templates/NetworkSection/NetworkSection";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";

export const NetworkPage = () => {
  return (
    <>
      <PageHeader title="Réseau" logoAccent="vert" />
      <main id="maincontent" tabIndex={-1} className="main">
        <NetworkSection />
        <NetworkFormatsSection />
      </main>
    </>
  );
};
