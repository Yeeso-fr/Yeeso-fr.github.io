import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faGraduationCap,
  faLocationDot,
  faMicrophoneLines,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BOOK_URL, LINKEDIN_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./ImpactSection.css";

const HEADLINE_STATS = [
  {
    icon: faLocationDot,
    value: "8",
    label: "antennes en France",
    modifier: "impact-stat-card--purple",
  },
  {
    icon: faLinkedin,
    value: "+14 000",
    label: "abonné·es sur LinkedIn (Yeeso et fondatrice)",
    srOnlyLabel: "abonnés sur LinkedIn, consulter la page LinkedIn",
    href: LINKEDIN_URL,
    modifier: "impact-stat-card--green",
  },
  {
    icon: faBook,
    value: "1",
    label: "livre publié",
    srOnlyLabel: "livre publié à acheter sur Amazon",
    note: "Un 2ᵉ livre est en préparation, à paraître en 2027",
    href: BOOK_URL,
    modifier: "impact-stat-card--coral",
  },
] as const;

const PILLARS = [
  {
    icon: faGraduationCap,
    title: "Sensibiliser",
    value: "+ 1 250",
    description:
      "jeunes sensibilisées aux métiers de la tech (+58 interventions éducatives menées à l'échelle nationale)",
    modifier: "impact-card--green",
  },
  {
    icon: faPeopleGroup,
    title: "Soutenir",
    value: "+3 000",
    description:
      "femmes, minorités de genre et allié·es de la Tech fédéré·es au sein de notre réseau IT Women Network",
    modifier: "impact-card--purple",
  },
  {
    icon: faMicrophoneLines,
    title: "Inspirer",
    value: "+60",
    description:
      "conférences et Masterclass organisées aux côtés de nos partenaires",
    modifier: "impact-card--coral",
  },
] as const;

export const ImpactSection = () => {
  return (
    <section className="impact-section" id="impact">
      <div className="container">
        <span className="section-eyebrow">Notre impact</span>
        <h2 className="impact-section__title">Notre impact depuis 2024</h2>
        <p className="impact-section__lead">
          Au-delà des chiffres, l'impact de Yeeso se traduit par plus de
          visibilité pour des rôles modèles trop souvent invisibilisés, plus de
          confiance pour les jeunes et les professionnel·les, et plus de
          capacité d'action pour les écoles, entreprises et institutions qui
          veulent s'engager pour l'équité dans le numérique.
        </p>

        <div className="impact-section__headline">
          {HEADLINE_STATS.map((stat) => (
            <div
              className={`impact-stat-card ${stat.modifier}`}
              key={stat.label}
            >
              <span className="impact-stat-card__icon-chip" aria-hidden="true">
                <FontAwesomeIcon icon={stat.icon} />
              </span>
              <span className="impact-stat-card__value">
                {"href" in stat ? (
                  <StyledLink
                    href={stat.href}
                    className="impact-headline-stat__link"
                  >
                    {stat.value}
                    {"srOnlyLabel" in stat && (
                      <span className="sr-only">&nbsp;{stat.srOnlyLabel}</span>
                    )}
                  </StyledLink>
                ) : (
                  stat.value
                )}
              </span>
              <p className="impact-stat-card__label">{stat.label}</p>
              {"note" in stat && (
                <p className="impact-stat-card__note">{stat.note}</p>
              )}
            </div>
          ))}
        </div>

        <div className="impact-section__cards">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className={`impact-card ${pillar.modifier}`}
            >
              <FontAwesomeIcon
                icon={pillar.icon}
                className="impact-card__icon"
                aria-hidden
              />
              <h3 className="impact-card__title">{pillar.title}</h3>
              <p className="impact-card__value">{pillar.value}</p>
              <p className="impact-card__description">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
