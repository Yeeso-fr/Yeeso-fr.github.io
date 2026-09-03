import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./AboutAntennasSection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const ANTENNA_LEADERS = [
  {
    city: "Lyon",
    name: "Albane",
    linkedin: "https://www.linkedin.com/in/albane-fagot-veyron/",
  },
  {
    city: "Paris",
    name: "Emmanuelle",
    linkedin: "https://www.linkedin.com/in/emmanuelle-aboaf/",
  },
  {
    city: "Lille",
    name: "Jacqueline",
    linkedin: "https://www.linkedin.com/in/jacqueline-rwanyindo/",
  },
  {
    city: "Nantes",
    name: "Angi",
    linkedin: "https://www.linkedin.com/in/angi-guyard/",
  },
  {
    city: "Rennes",
    name: "Manon",
    linkedin: "https://www.linkedin.com/in/manon-carbonnel/",
  },
  {
    city: "Poitiers",
    name: "Felana",
    linkedin: "https://www.linkedin.com/in/felana-letrange/",
  },
  {
    city: "Toulouse",
    name: "Marie",
    linkedin: "https://www.linkedin.com/in/malandel/",
  },
  {
    city: "Strasbourg",
    name: "Marion",
    linkedin: "https://www.linkedin.com/in/marionlabbe/",
  },
] as const;

export const AboutAntennasSection = () => {
  return (
    <section className="about-antennas-section" id="antennes">
      <div className="container">
        <span className="section-eyebrow">Nos antennes</span>
        <h2 className="about-antennas-section__title">
          8 antennes, partout en France
        </h2>
        <p className="about-antennas-section__lead">
          Chaque antenne est portée localement par une Leader, avec le soutien
          du Bureau et des Leaders de Squads.
        </p>

        <div className="about-antennas-section__content">
          <img
            className="about-antennas-section__map"
            src={`${basePath}/img/carte-antennes.png`}
            alt="Carte de France situant les 8 antennes de Yeeso : Lille, Strasbourg, Rennes, Paris, Nantes, Poitiers, Lyon et Toulouse."
            width={1236}
            height={1272}
          />

          <dl className="about-antennas-section__list">
            {ANTENNA_LEADERS.map((leader) => (
              <div key={leader.city}>
                <dt>{leader.city}</dt>
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
      </div>
    </section>
  );
};
