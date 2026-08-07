import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faGraduationCap,
  faLocationDot,
  faMicrophoneLines,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BOOK_HELLOASSO_URL,
  BOOK_URL,
  LINKEDIN_URL,
} from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./ImpactSection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

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
    href: LINKEDIN_URL,
    modifier: "impact-stat-card--green",
  },
  {
    icon: faBook,
    value: "1",
    label: "livre publié",
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
      "femmes de la Tech et allié·es fédéré·es au sein de notre réseau IT Women Network",
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
          visibilité pour les rôles modèles féminins, plus de confiance pour les
          jeunes et les professionnelles, et plus de capacité d'action pour les
          écoles, entreprises et institutions qui veulent s'engager pour
          l'équité dans le numérique.
        </p>

        <dl className="impact-section__headline">
          {HEADLINE_STATS.map((stat) => (
            <div
              className={`impact-stat-card ${stat.modifier}`}
              key={stat.label}
            >
              <span className="impact-stat-card__icon-chip" aria-hidden="true">
                <FontAwesomeIcon icon={stat.icon} />
              </span>
              <dt>
                {"href" in stat ? (
                  <StyledLink
                    href={stat.href}
                    className="impact-headline-stat__link"
                  >
                    {stat.value}
                  </StyledLink>
                ) : (
                  stat.value
                )}
              </dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>

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

        <div className="impact-section__book">
          <img
            src={`${basePath}/img/photos/yeeso-livre-couverture.webp`}
            alt="Couverture du livre Yeeso : 52 portraits et conseils de femmes, 31 articles, 12 actions concrètes pour accélérer la féminisation de l'IT"
            width={450}
            height={516}
            className="impact-section__book-cover"
          />
          <div className="impact-section__book-content">
            <p className="impact-section__book-title">
              <FontAwesomeIcon icon={faBook} aria-hidden />
              Notre livre « Yeeso »
            </p>
            <p>
              52 portraits de femmes qui travaillent aujourd'hui dans la tech,
              pour montrer leur présence et offrir des rôles modèles plus
              abordables et modernes. Le tome 2 est prévu pour 2027.
            </p>
            <p className="impact-section__book-price">24,90 €</p>
            <div className="impact-section__book-cta">
              <StyledLink href={BOOK_HELLOASSO_URL} filled="green">
                Commander sur HelloAsso
              </StyledLink>
              <StyledLink
                href={BOOK_URL}
                bordered
                className="impact-section__book-amazon-link"
              >
                Acheter sur Amazon
              </StyledLink>
            </div>
            <p className="impact-section__book-note">
              Une commande HelloAsso est un don à Yeeso — le livre se retire en
              main propre lors d'un de nos événements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
