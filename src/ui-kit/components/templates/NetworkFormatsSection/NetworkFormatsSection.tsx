import {
  faCode,
  faComments,
  faMicrophoneLines,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MEETUP_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./NetworkFormatsSection.css";

const FORMATS = [
  {
    icon: faUserGroup,
    title: "Mentorat",
    description:
      "Étudiant·es, personnes en reconversion, professionnel·les : un mentor ou une marraine vous accompagne à chaque étape de votre parcours dans la tech.",
    modifier: "network-format-card--green",
  },
  {
    icon: faCode,
    title: "Coding Dojos",
    description:
      "Des ateliers de pratique collective pour progresser en programmation, quel que soit son niveau, dans une ambiance bienveillante.",
    modifier: "network-format-card--purple",
  },
  {
    icon: faComments,
    title: "Groupes de parole en non-mixité choisie",
    description:
      "Un espace en non-mixité choisie — femmes, personnes trans et non-binaires — pour libérer la parole, partager ses expériences et trouver du soutien face aux difficultés du milieu.",
    modifier: "network-format-card--coral",
  },
  {
    icon: faMicrophoneLines,
    title: "IT Women Talks",
    description:
      "Conférences, tables rondes et témoignages : nos événements mettent en lumière l'expertise des femmes et minorités de genre dans la tech.",
    modifier: "network-format-card--noir",
  },
] as const;

export const NetworkFormatsSection = () => {
  return (
    <section className="network-formats-section" id="formats">
      <div className="container">
        <span className="section-eyebrow">Nos formats</span>
        <h2 className="network-formats-section__title">
          Des rendez-vous pour toutes et tous
        </h2>
        <p className="network-formats-section__lead">
          Étudiant·es, personnes en reconversion, professionnel·les de la tech :
          Yeeso propose des formats variés pour se former, échanger et se
          soutenir.
        </p>

        <div className="network-formats-section__cards">
          {FORMATS.map((format) => (
            <div
              className={`network-format-card ${format.modifier}`}
              key={format.title}
            >
              <FontAwesomeIcon
                icon={format.icon}
                className="network-format-card__icon"
                aria-hidden
              />
              <h3 className="network-format-card__title">{format.title}</h3>
              <p className="network-format-card__description">
                {format.description}
              </p>
            </div>
          ))}
        </div>

        <div className="network-formats-section__cta">
          <p>Retrouvez toutes nos prochaines rencontres sur Meetup.</p>
          <StyledLink href={MEETUP_URL} filled="green">
            Voir nos événements
          </StyledLink>
        </div>
      </div>
    </section>
  );
};
