import "./AboutTeamSection.css";

const BUREAU = [
  { name: "Sandrine Waleckx", role: "Présidente", job: "Soignante" },
  {
    name: "Ibrahima Bah",
    role: "Trésorier",
    job: "Consultant IT Senior",
  },
  {
    name: "David Dérigent",
    role: "Vice-Président",
    job: "Architecte Solutions",
  },
  {
    name: "Pauline Bicheler Diallo",
    role: "Secrétaire Générale",
    job: "Responsable Diversité et Inclusion",
  },
] as const;

const SQUAD_LEADERS = [
  { domain: "Communication", name: "Virginie" },
  { domain: "Média et PR", name: "Ibrahima" },
  { domain: "Stratégie", name: "Jeanne" },
  { domain: "Sensibilisation", name: "Jessica" },
  { domain: "Animation", name: "Angélique" },
  { domain: "Mentorat", name: "Marie-Laure" },
  { domain: "Partenariats", name: "Pauline" },
  { domain: "DAF, SI, Admin", name: "David" },
] as const;

const ANTENNA_LEADERS = [
  { city: "Lyon", name: "Albane" },
  { city: "Paris", name: "Emmanuelle" },
  { city: "Lille", name: "Jacqueline" },
  { city: "Nantes", name: "Angi" },
  { city: "Rennes", name: "Manon" },
  { city: "Poitiers", name: "Felana" },
  { city: "Toulouse", name: "Marie" },
  { city: "Strasbourg", name: "Marion" },
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
            </div>
          ))}
        </div>

        <div className="about-team-section__lists">
          <div>
            <h3 className="about-team-section__subtitle">
              8 Leaders de Squads
            </h3>
            <dl className="about-team-list">
              {SQUAD_LEADERS.map((leader) => (
                <div key={leader.domain}>
                  <dt>{leader.domain}</dt>
                  <dd>{leader.name}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="about-team-section__subtitle">
              8 Leaders d'antennes
            </h3>
            <dl className="about-team-list">
              {ANTENNA_LEADERS.map((leader) => (
                <div key={leader.city}>
                  <dt>{leader.city}</dt>
                  <dd>{leader.name}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
