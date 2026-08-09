import { faHeart, faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DIVERSITES_ET_ENTREPRISES_URL,
  FEMMES_NUMERIQUE_URL,
  RONALPIA_URL,
} from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./MissionSection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const PILLARS = [
  {
    icon: faStar,
    title: "Confiance en soi",
    description:
      "Déconstruire les préjugés par l'éducation et l'inspiration, dès le plus jeune âge.",
    modifier: "mission-card--purple",
  },
  {
    icon: faHeart,
    title: "Croire en les autres",
    description:
      "Collaborer au-delà du genre et expérimenter concrètement les bénéfices de la mixité.",
    modifier: "mission-card--green",
  },
  {
    icon: faUsers,
    title: "L'appui en continu",
    description:
      "Un réseau qui partage ces valeurs et décrypte ensemble le monde de l'IT et du numérique.",
    modifier: "mission-card--orange",
  },
] as const;

const STATS = [
  { value: "24 %", label: "de femmes dans les métiers du numérique en France" },
  {
    value: "2 programmes",
    label: "Éducation et Entreprise, de la maternelle au travail",
  },
  { value: "1 réseau", label: "IT Women Network, mentorat et entraide" },
] as const;

const AUDIENCE_CTAS = [
  {
    text: "Vous êtes un établissement scolaire ?",
    href: "/education",
    label: "Découvrir le programme Éducation",
    modifier: "mission-audience-cta--green",
  },
  {
    text: "Vous êtes une entreprise ?",
    href: "/entreprises",
    label: "Découvrir notre offre Entreprise",
    modifier: "mission-audience-cta--purple",
  },
] as const;

export const MissionSection = () => {
  return (
    <section className="mission-section" id="mission">
      <div className="container">
        <span className="section-eyebrow">Notre mission</span>
        <h2 className="mission-section__title">
          Accélérer la féminisation des équipes informatiques. Yeeso (re)donne
          confiance à celles et ceux que la tech invisibilise.
        </h2>

        <div className="mission-section__cards">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className={`mission-card ${pillar.modifier}`}
            >
              <FontAwesomeIcon
                icon={pillar.icon}
                className="mission-card__icon"
                aria-hidden
              />
              <h3 className="mission-card__title">{pillar.title}</h3>
              <p className="mission-card__description">{pillar.description}</p>
            </div>
          ))}
        </div>

        <dl className="mission-section__stats">
          {STATS.map((stat) => (
            <div className="mission-section__stat" key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mission-section__audience-ctas">
          {AUDIENCE_CTAS.map((cta) => (
            <div
              className={`mission-audience-cta ${cta.modifier}`}
              key={cta.href}
            >
              <p>{cta.text}</p>
              <StyledLink href={cta.href} bordered={true}>
                {cta.label}
              </StyledLink>
            </div>
          ))}
        </div>

        <div className="mission-section__labels">
          <p>
            Labellisée « association à impact » par Ronalpia. Incubée par
            Femmes@Numérique. Lauréate du{" "}
            <StyledLink href={DIVERSITES_ET_ENTREPRISES_URL}>
              Trophée de la Transmission et de l'Intergénération 2026
            </StyledLink>{" "}
            décerné par Diversités et Entreprises.
          </p>
          <div className="mission-section__labels-logos">
            <StyledLink href={RONALPIA_URL}>
              <img
                src={`${basePath}/img/logos/associations/ronalpia.webp`}
                alt="Ronalpia"
                width={3528}
                height={1668}
              />
            </StyledLink>
            <StyledLink href={FEMMES_NUMERIQUE_URL}>
              <img
                src={`${basePath}/img/logos/associations/femmes-at-numerique.webp`}
                alt="Femmes@Numérique"
                width={236}
                height={56}
              />
            </StyledLink>
          </div>
        </div>
      </div>
    </section>
  );
};
