import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./AboutActionSection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const ACTIONS = [
  "Ateliers et interventions scolaires pour déconstruire les stéréotypes tôt.",
  "Accompagnement des entreprises sur le recrutement, les rituels et les carrières.",
  "Mentorat, conférences et rôles modèles portés par l'IT Women Network.",
  "Partenariats avec les organisations qui partagent nos valeurs.",
] as const;

export const AboutActionSection = () => {
  return (
    <section className="about-action-section" id="comment-nous-agissons">
      <div className="container about-action-section__container">
        <figure className="about-action-section__photo">
          <img
            src={`${basePath}/img/photos/yeeso-evenement-networking.webp`}
            alt="Membres de l'équipe Yeeso lors d'un événement de réseautage, devant les kakémonos présentant les programmes de l'association"
            width={1400}
            height={1050}
          />
        </figure>

        <div className="about-action-section__content">
          <span className="section-eyebrow">Comment nous agissons</span>
          <h2 className="about-action-section__title">
            De la maternelle au comité de direction
          </h2>
          <ul className="about-action-section__list">
            {ACTIONS.map((action) => (
              <li key={action}>
                <FontAwesomeIcon icon={faAsterisk} aria-hidden />
                {action}
              </li>
            ))}
          </ul>
          <div className="about-action-section__cta">
            <StyledLink href="/programmes" filled={true}>
              Voir nos programmes
            </StyledLink>
            <StyledLink href="/articles" bordered={true}>
              Lire le blog
            </StyledLink>
          </div>
        </div>
      </div>
    </section>
  );
};
