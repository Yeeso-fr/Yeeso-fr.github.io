import { ANTENNA_LEADERS } from "@/config/antenna-leaders";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./AboutAntennasSection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const AboutAntennasSection = () => {
  return (
    <section className="about-antennas-section" id="antennes">
      <div className="container">
        <span className="section-eyebrow">Nos antennes</span>
        <h2 className="about-antennas-section__title">
          {ANTENNA_LEADERS.length} antennes, partout en France
        </h2>
        <p className="about-antennas-section__lead">
          Chaque antenne est portée localement par une Leader, avec le soutien
          du Bureau et des Leaders de Squads.
        </p>

        <div className="about-antennas-section__content">
          <img
            className="about-antennas-section__map"
            src={`${basePath}/img/carte-antennes.webp`}
            alt="Carte de France situant les 9 antennes de Yeeso : Lille, Strasbourg, Rennes, Paris, Nantes, Poitiers, Lyon, Toulouse et Biarritz."
            width={1305}
            height={1206}
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
