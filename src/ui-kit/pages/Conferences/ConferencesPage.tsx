import { ConferenceBenefitsSection } from "@/ui-kit/components/templates/ConferenceBenefitsSection/ConferenceBenefitsSection";
import { ConferencePartnershipSection } from "@/ui-kit/components/templates/ConferencePartnershipSection/ConferencePartnershipSection";
import { ConferenceRequirementsSection } from "@/ui-kit/components/templates/ConferenceRequirementsSection/ConferenceRequirementsSection";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";

export const ConferencesPage = () => {
  return (
    <>
      <PageHeader title="Conférences & Événements" />
      <main id="maincontent" tabIndex={-1} className="main">
        <ConferenceBenefitsSection />
        <ConferencePartnershipSection />
        <ConferenceRequirementsSection />
      </main>
    </>
  );
};
