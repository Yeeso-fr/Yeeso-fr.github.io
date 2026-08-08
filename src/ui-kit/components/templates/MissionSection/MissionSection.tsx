import { faHeart, faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

        <div className="mission-section__labels">
          <p>
            Labellisée « association à impact » par Ronalpia. Incubée par
            Femmes@Numérique.
          </p>
          <div className="mission-section__labels-logos">
            <img
              src={`${basePath}/img/logos/logo-ronalpia.webp`}
              alt="Ronalpia"
              width={600}
              height={350}
            />
            <img
              src={`${basePath}/img/logos/logo-femmes-numerique.webp`}
              alt="Femmes@Numérique"
              width={236}
              height={56}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
