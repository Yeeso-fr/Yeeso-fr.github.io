import { PARTNERSHIP_EMAIL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { ConsultingSection } from "@/ui-kit/components/templates/ConsultingSection/ConsultingSection";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import { PartnershipSection } from "@/ui-kit/components/templates/PartnershipSection/PartnershipSection";
import { TrainingSection } from "@/ui-kit/components/templates/TrainingSection/TrainingSection";
import "./CompanyPage.css";

export const CompanyPage = () => {
  return (
    <>
      <PageHeader title="Entreprises" logoAccent="noir" />
      <main id="maincontent" tabIndex={-1} className="main">
        <section className="company-page__intro">
          <div className="container">
            <p className="company-page__lead">
              Envie d'accélérer la mixité dans votre entreprise ? Yeeso vous
              accompagne de trois façons : devenez partenaire, faites appel à
              notre expertise conseil, ou formez vos équipes. Pour toute
              question, écrivez-nous à{" "}
              <StyledLink href={`mailto:${PARTNERSHIP_EMAIL}`}>
                {PARTNERSHIP_EMAIL}
              </StyledLink>
              .
            </p>
            <StyledLink
              href="/docs/plaquette-offre-entreprises.pdf"
              bordered={true}
              download
            >
              Télécharger notre offre de services (PDF)
            </StyledLink>
          </div>
        </section>

        <PartnershipSection />
        <ConsultingSection />
        <TrainingSection />
      </main>
    </>
  );
};
