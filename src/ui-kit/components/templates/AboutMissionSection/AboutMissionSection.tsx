import {
  faBullseye,
  faCircleCheck,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AboutMissionSection.css";

const VALUES = [
  {
    icon: faFlag,
    title: "L'équité comme boussole",
    description:
      "Nous croyons que la compétence n'a ni genre, ni classe sociale, ni couleur de peau. Tout notre travail découle de cette conviction.",
    modifier: "about-value-card--purple",
  },
  {
    icon: faCircleCheck,
    title: "La preuve avant le discours",
    description:
      "Nous ne cherchons pas à convaincre par des slogans mais par l'expérience : ateliers, mentorat, interventions en équipe.",
    modifier: "about-value-card--green",
  },
  {
    icon: faBullseye,
    title: "La mixité, pas la substitution",
    description:
      "On construit ensemble, au-delà du genre. La mixité profite à toutes les équipes, pas à une partie contre l'autre.",
    modifier: "about-value-card--coral",
  },
] as const;

export const AboutMissionSection = () => {
  return (
    <section className="about-mission-section" id="mission">
      <div className="container">
        <div className="about-mission-section__intro">
          <div>
            <span className="section-eyebrow">Notre mission</span>
            <h2 className="about-mission-section__title">
              Rendre le monde de l'IT plus juste et plus équitable
            </h2>
          </div>
          <div className="about-mission-section__text">
            <p>
              Notre mission tient en une phrase : accélérer la féminisation des
              équipes informatiques et rendre la tech plus juste pour les femmes
              et minorités de genre. Pour y parvenir, Yeeso (re)donne confiance
              et travaille avec tous·tes, parce qu'une équipe mixte ne se
              décrète pas — elle se construit ensemble.
            </p>
            <p>
              Concrètement, cela veut dire déconstruire les préjugés par
              l'éducation et l'inspiration, faire expérimenter les bénéfices de
              la mixité au sein des organisations, et offrir un appui continu
              grâce à un réseau qui décrypte ensemble le monde de l'IT et du
              numérique.
            </p>
            <p>
              Nous mesurons notre impact non pas au nombre d'interventions, mais
              à ce qui reste après : des vocations qui se déclenchent, des
              équipes qui changent leurs rituels, des talents qui restent et
              progressent dans la tech, quel que soit leur genre.
            </p>
          </div>
        </div>

        <div className="about-mission-section__cards">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className={`about-value-card ${value.modifier}`}
            >
              <FontAwesomeIcon
                icon={value.icon}
                className="about-value-card__icon"
                aria-hidden
              />
              <h3 className="about-value-card__title">{value.title}</h3>
              <p className="about-value-card__description">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
