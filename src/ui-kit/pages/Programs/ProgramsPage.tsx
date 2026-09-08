import { BookEndorsementSection } from "@/ui-kit/components/templates/BookEndorsementSection/BookEndorsementSection";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import { ProgramsSection } from "@/ui-kit/components/templates/ProgramsSection/ProgramsSection";

export const ProgramsPage = () => {
  return (
    <>
      <PageHeader title="Programmes" />
      <main id="maincontent" tabIndex={-1} className="main">
        <ProgramsSection />
        <BookEndorsementSection />
      </main>
    </>
  );
};
