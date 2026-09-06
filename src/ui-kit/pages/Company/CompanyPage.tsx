import { AnchorTags } from "@/ui-kit/components/molecules/AnchorTags/AnchorTags";
import { CompanyConferencesSection } from "@/ui-kit/components/templates/CompanyConferencesSection/CompanyConferencesSection";
import { ConsultingSection } from "@/ui-kit/components/templates/ConsultingSection/ConsultingSection";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import { PartnershipSection } from "@/ui-kit/components/templates/PartnershipSection/PartnershipSection";
import { PartnersSection } from "@/ui-kit/components/templates/PartnersSection/PartnersSection";
import { TrainingSection } from "@/ui-kit/components/templates/TrainingSection/TrainingSection";

const CATEGORIES = [
  { id: "partenariat", label: "Partenariats" },
  { id: "conferences", label: "Conférences" },
  { id: "formation", label: "Formations" },
  { id: "conseil", label: "Conseil & accompagnement" },
];

export const CompanyPage = () => {
  return (
    <>
      <PageHeader title="Nos prestations pour les entreprises" />
      <main id="maincontent" tabIndex={-1} className="main">
        <AnchorTags
          items={CATEGORIES}
          ariaLabel="Catégories de prestations entreprises"
        />
        <PartnershipSection />
        <CompanyConferencesSection />
        <TrainingSection />
        <ConsultingSection />
        <PartnersSection />
      </main>
    </>
  );
};
