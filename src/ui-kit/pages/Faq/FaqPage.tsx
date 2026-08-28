import { FaqSection } from "@/ui-kit/components/templates/FaqSection/FaqSection";
import { MembershipCallout } from "@/ui-kit/components/templates/MembershipCallout/MembershipCallout";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";

export const FaqPage = () => {
  return (
    <>
      <PageHeader title="FAQ" />
      <main id="maincontent" tabIndex={-1} className="main">
        <FaqSection />

        <section>
          <div className="container">
            <MembershipCallout />
          </div>
        </section>
      </main>
    </>
  );
};
