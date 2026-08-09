import { ConsultingSection } from "@/ui-kit/components/templates/ConsultingSection/ConsultingSection";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import { PartnershipSection } from "@/ui-kit/components/templates/PartnershipSection/PartnershipSection";
import { PartnersSection } from "@/ui-kit/components/templates/PartnersSection/PartnersSection";
import { TrainingSection } from "@/ui-kit/components/templates/TrainingSection/TrainingSection";

export const CompanyPage = () => {
  return (
    <>
      <PageHeader title="Entreprises" />
      <main id="maincontent" tabIndex={-1} className="main">
        <PartnershipSection />
        <PartnersSection />
        <TrainingSection />
        <ConsultingSection />
      </main>
    </>
  );
};
