import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import { ContactForm } from "@/ui-kit/components/organisms/ContactForm/ContactForm";
import { MembershipCallout } from "@/ui-kit/components/templates/MembershipCallout/MembershipCallout";
import { PageHeader } from "@/ui-kit/components/templates/PageHeader/PageHeader";
import "./ContactPage.css";

export const ContactPage = () => {
  return (
    <>
      <PageHeader title="Contact" />
      <main id="maincontent" tabIndex={-1} className="main">
        <section className="contact-page">
          <div className="container">
            <p className="contact-page__lead">
              Écoles, entreprises, bénévoles, journalistes : écrivez-nous. Nous
              répondons sous quelques jours ouvrés.
            </p>

            <div className="contact-page__grid">
              <ContactForm />

              <div className="contact-page__info">
                <StyledLink
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="contact-card contact-card--green"
                >
                  <FontAwesomeIcon icon={faEnvelope} aria-hidden />
                  <span className="contact-card__label">E-mail</span>
                  <strong>{CONTACT_EMAIL}</strong>
                </StyledLink>

                <div className="contact-card contact-card--purple">
                  <FontAwesomeIcon icon={faLocationDot} aria-hidden />
                  <span className="contact-card__label">Siège</span>
                  <strong>Lyon, France</strong>
                </div>

                <StyledLink
                  href={LINKEDIN_URL}
                  className="contact-card contact-card--orange"
                >
                  <FontAwesomeIcon icon={faLinkedin} aria-hidden />
                  <span className="contact-card__label">LinkedIn</span>
                  <strong>Houleymatou Baldé</strong>
                </StyledLink>

                <div className="contact-card">
                  <strong>Yeeso</strong>
                  <p>
                    Association loi 1901 à but non lucratif, dédiée à la
                    féminisation des métiers de l'informatique, de l'école à
                    l'entreprise.
                  </p>
                  <StyledLink href="/mentions-legales">
                    Mentions légales
                  </StyledLink>
                </div>
              </div>
            </div>

            <MembershipCallout />
          </div>
        </section>
      </main>
    </>
  );
};
