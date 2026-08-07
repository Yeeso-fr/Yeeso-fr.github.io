import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CONTACT_EMAIL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./ConferenceRequirementsSection.css";

const REQUIREMENTS = [
  "Adhérer à notre charte de valeurs",
  "Mettre en place un code de conduite",
  "Prévoir un dispositif de signalement",
  "Communiquer sur le partenariat",
  "Partager un bilan diversité après l'événement",
] as const;

const VALUES = [
  "Inclusion réelle",
  "Accessibilité",
  "Sécurité",
  "Respect",
  "Transparence",
  "Amélioration continue",
] as const;

export const ConferenceRequirementsSection = () => {
  return (
    <section className="conference-requirements-section" id="engagement">
      <div className="container">
        <span className="section-eyebrow">Engagement mutuel</span>
        <h2 className="conference-requirements-section__title">
          Ce que nous demandons en échange
        </h2>
        <p className="conference-requirements-section__lead">
          Une entraide qui a du sens.
        </p>

        <ul className="conference-requirements-section__list">
          {REQUIREMENTS.map((requirement) => (
            <li key={requirement}>
              <FontAwesomeIcon icon={faAngleRight} aria-hidden />
              {requirement}
            </li>
          ))}
        </ul>

        <blockquote className="conference-requirements-section__quote">
          <p>
            « La force d'un collectif, ce sont les personnes qui le composent,
            mais aussi une belle équipe qui le gère ! »
          </p>
          <footer>Houleymatou Baldé, cofondatrice</footer>
        </blockquote>

        <h3 className="conference-requirements-section__values-title">
          Notre socle commun
        </h3>
        <ul className="conference-requirements-section__values">
          {VALUES.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>

        <div className="conference-requirements-section__cta">
          <StyledLink
            href="/docs/plaquette-partenariat-conferences.pdf"
            bordered={true}
            download
          >
            Télécharger la plaquette (PDF)
          </StyledLink>
          <StyledLink href={`mailto:${CONTACT_EMAIL}`} filled="green">
            Discutons-en
          </StyledLink>
        </div>
      </div>
    </section>
  );
};
