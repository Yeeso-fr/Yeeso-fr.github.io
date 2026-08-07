import { CONTACT_EMAIL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { EducationSection } from "@/ui-kit/components/templates/EducationSection/EducationSection";
import { EducationToolsSection } from "@/ui-kit/components/templates/EducationToolsSection/EducationToolsSection";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import "./EducationPage.css";

export const EducationPage = () => {
  return (
    <>
      <PageHeader title="Éducation" />
      <main id="maincontent" tabIndex={-1} className="main">
        <section className="education-page__intro">
          <div className="container">
            <p className="education-page__lead">
              Yeeso sensibilise et accompagne dès le plus jeune âge pour
              déconstruire les stéréotypes de genre et faire découvrir les
              métiers du numérique. Une question, un projet ? Écrivez-nous à{" "}
              <StyledLink href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </StyledLink>
              .
            </p>
          </div>
        </section>

        <EducationSection />
        <EducationToolsSection />
      </main>
    </>
  );
};
