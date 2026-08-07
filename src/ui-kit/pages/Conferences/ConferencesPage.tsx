import { CONTACT_EMAIL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { ConferenceBenefitsSection } from "@/ui-kit/components/templates/ConferenceBenefitsSection/ConferenceBenefitsSection";
import { ConferencePartnershipSection } from "@/ui-kit/components/templates/ConferencePartnershipSection/ConferencePartnershipSection";
import { ConferenceRequirementsSection } from "@/ui-kit/components/templates/ConferenceRequirementsSection/ConferenceRequirementsSection";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import "./ConferencesPage.css";

export const ConferencesPage = () => {
  return (
    <>
      <PageHeader title="Conférences & Événements" />
      <main id="maincontent" tabIndex={-1} className="main">
        <section className="conferences-page__intro">
          <div className="container">
            <p className="conferences-page__lead">
              Organisez un événement plus inclusif avec Yeeso : mixité,
              inclusion, prévention, sécurité. Nous accompagnons les équipes
              organisatrices de conférences, meetups et événements tech, avant,
              pendant et après l'événement. Une question, un projet ?
              Écrivez-nous à{" "}
              <StyledLink href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </StyledLink>
              .
            </p>
          </div>
        </section>

        <ConferenceBenefitsSection />
        <ConferencePartnershipSection />
        <ConferenceRequirementsSection />
      </main>
    </>
  );
};
