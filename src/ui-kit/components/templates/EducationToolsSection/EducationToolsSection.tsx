import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBook, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CONTACT_EMAIL,
  LINKEDIN_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./EducationToolsSection.css";

type ToolLink = {
  href: string;
  label: string;
  icon?: IconDefinition;
  iconOnly?: boolean;
};

const TOOLS: {
  icon: IconDefinition;
  title: string;
  description: string;
  modifier: string;
  links?: ToolLink[];
}[] = [
  {
    icon: faChalkboardUser,
    title: "Interventions éducatives",
    description:
      "Des bénévoles interviennent dans les établissements scolaires, de la maternelle au supérieur, pour éveiller les vocations à travers des ateliers ludiques.",
    modifier: "education-tool-card--green",
  },
  {
    icon: faBook,
    title: "Outils pédagogiques",
    description:
      "Le livre Yeeso et des témoignages de femmes de la tech, pour déconstruire les stéréotypes et anticiper les évolutions technologiques.",
    modifier: "education-tool-card--purple",
    links: [{ href: "/#livre", label: "Découvrir le livre" }],
  },
  {
    icon: faYoutube,
    title: "Sensibilisation digitale",
    description:
      "Notre chaîne YouTube et nos campagnes de rôles modèles sur LinkedIn et TikTok diffusent des contenus inspirants pour comprendre et agir en faveur d'une tech plus inclusive.",
    modifier: "education-tool-card--coral",
    links: [
      {
        href: YOUTUBE_URL,
        label: "Voir la chaîne YouTube de Yeeso",
        icon: faYoutube,
        iconOnly: true,
      },
      {
        href: TIKTOK_URL,
        label: "Voir la page TikTok de Yeeso",
        icon: faTiktok,
        iconOnly: true,
      },
      {
        href: LINKEDIN_URL,
        label: "Voir la page LinkedIn de Yeeso",
        icon: faLinkedin,
        iconOnly: true,
      },
    ],
  },
];

export const EducationToolsSection = () => {
  return (
    <section className="education-tools-section" id="outils">
      <div className="container">
        <span className="section-eyebrow">Nos outils</span>
        <h2 className="education-tools-section__title">
          Sensibiliser, avec les bons outils
        </h2>

        <div className="education-tools-section__cards">
          {TOOLS.map((tool) => (
            <div
              className={`education-tool-card ${tool.modifier}`}
              key={tool.title}
            >
              <FontAwesomeIcon
                icon={tool.icon}
                className="education-tool-card__icon"
                aria-hidden
              />
              <h3 className="education-tool-card__title">{tool.title}</h3>
              <p className="education-tool-card__description">
                {tool.description}
              </p>
              {tool.links && (
                <div className="education-tool-card__links">
                  {tool.links.map((link) => (
                    <StyledLink
                      key={link.href}
                      href={link.href}
                      iconOnly={link.iconOnly}
                      ariaLabel={link.iconOnly ? link.label : undefined}
                    >
                      {link.icon ? (
                        <FontAwesomeIcon icon={link.icon} aria-hidden />
                      ) : (
                        link.label
                      )}
                    </StyledLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="education-tools-section__cta">
          <p>Vous êtes un établissement scolaire ?</p>
          <StyledLink href={`mailto:${CONTACT_EMAIL}`} filled brandColor="mint">
            Inviter Yeeso dans votre établissement
          </StyledLink>
        </div>
      </div>
    </section>
  );
};
