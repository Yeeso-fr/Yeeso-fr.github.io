import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./AboutTeamSection.css";

const BUREAU = [
  {
    name: "Sandrine Waleckx",
    role: "Présidente",
    job: "Soignante",
    linkedin: "https://www.linkedin.com/in/sandrine-waleckx-a1a631215/",
  },
  {
    name: "Ibrahima Bah",
    role: "Trésorier",
    job: "Consultant IT Senior",
    linkedin: "https://www.linkedin.com/in/ibrahima-amadou-bah/",
  },
  {
    name: "David Dérigent",
    role: "Vice-Président",
    job: "Architecte Solutions",
    linkedin: "https://www.linkedin.com/in/david-d%C3%A9rigent-3220981/",
  },
  {
    name: "Pauline Bicheler Diallo",
    role: "Secrétaire Générale",
    job: "Responsable Diversité et Inclusion",
    linkedin: "https://www.linkedin.com/in/paulinebicheler/",
  },
] as const;

const SQUAD_LEADERS = [
  {
    domain: "Communication",
    name: "Virginie",
    linkedin:
      "https://www.linkedin.com/in/virginie-voyenet-%F0%9F%92%8E-59b7811/",
  },
  {
    domain: "Média et PR",
    name: "Ibrahima",
    linkedin: "https://www.linkedin.com/in/ibrahima-amadou-bah/",
  },
  {
    domain: "Stratégie",
    name: "Jeanne",
    linkedin: "https://www.linkedin.com/in/jeanne-teillac/",
  },
  {
    domain: "Sensibilisation",
    name: "Jessica",
    linkedin: "https://www.linkedin.com/in/jprot/",
  },
  {
    domain: "Animation",
    name: "Angélique",
    linkedin: "https://www.linkedin.com/in/angelique-henry/",
  },
  {
    domain: "Mentorat",
    name: "Marie-Laure",
    linkedin: "https://www.linkedin.com/in/marie-laure-mabongo-8463b891/",
  },
  {
    domain: "Partenariats",
    name: "Pauline",
    linkedin: "https://www.linkedin.com/in/paulinebicheler/",
  },
  {
    domain: "DAF, SI, Admin",
    name: "David",
    linkedin: "https://www.linkedin.com/in/david-d%C3%A9rigent-3220981/",
  },
] as const;

export const AboutTeamSection = () => {
  return (
    <section className="about-team-section" id="equipe">
      <div className="container">
        <span className="section-eyebrow">Notre équipe</span>
        <h2 className="about-team-section__title">
          Une équipe engagée, partout en France
        </h2>
        <p className="about-team-section__lead">
          Houleymatou, fondatrice et directrice générale de l'association, est
          salariée depuis avril 2026. Elle est épaulée dans le développement de
          Yeeso par 4 membres du Bureau, 8 Leaders de Squads et 8 Leaders
          d'antennes, ainsi que par une quinzaine de bénévoles.
        </p>

        <h3 className="about-team-section__subtitle">
          Le Bureau — paritaire, des profils complémentaires
        </h3>
        <div className="about-team-section__bureau">
          {BUREAU.map((member) => (
            <div className="about-team-card" key={member.name}>
              <span className="about-team-card__role">{member.role}</span>
              <p className="about-team-card__name">{member.name}</p>
              <p className="about-team-card__job">{member.job}</p>
              <StyledLink
                href={member.linkedin}
                iconOnly
                ariaLabel={`Voir le profil LinkedIn de ${member.name}`}
                className="about-team-card__linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} aria-hidden />
              </StyledLink>
            </div>
          ))}
        </div>

        <h3 className="about-team-section__subtitle">8 Leaders de Squads</h3>
        <dl className="about-team-list">
          {SQUAD_LEADERS.map((leader) => (
            <div key={leader.domain}>
              <dt>{leader.domain}</dt>
              <dd>
                <StyledLink
                  href={leader.linkedin}
                  ariaLabel={`Voir le profil LinkedIn de ${leader.name}`}
                >
                  {leader.name}
                </StyledLink>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
