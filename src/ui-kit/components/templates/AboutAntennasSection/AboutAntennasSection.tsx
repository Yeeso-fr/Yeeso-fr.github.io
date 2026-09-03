import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./AboutAntennasSection.css";

const ANTENNA_LEADERS = [
  {
    city: "Lyon",
    name: "Albane",
    linkedin: "https://www.linkedin.com/in/albane-fagot-veyron/",
    x: 223,
    y: 123,
  },
  {
    city: "Paris",
    name: "Emmanuelle",
    linkedin: "https://www.linkedin.com/in/emmanuelle-aboaf/",
    x: 165,
    y: 52,
  },
  {
    city: "Lille",
    name: "Jacqueline",
    linkedin: "https://www.linkedin.com/in/jacqueline-rwanyindo/",
    x: 181,
    y: 18,
  },
  {
    city: "Nantes",
    name: "Angi",
    linkedin: "https://www.linkedin.com/in/angi-guyard/",
    x: 75,
    y: 90,
  },
  {
    city: "Rennes",
    name: "Manon",
    linkedin: "https://www.linkedin.com/in/manon-carbonnel/",
    x: 72,
    y: 69,
  },
  {
    city: "Poitiers",
    name: "Felana",
    linkedin: "https://www.linkedin.com/in/felana-letrange/",
    x: 119,
    y: 104,
  },
  {
    city: "Toulouse",
    name: "Marie",
    linkedin: "https://www.linkedin.com/in/malandel/",
    x: 144,
    y: 173,
  },
  {
    city: "Strasbourg",
    name: "Marion",
    linkedin: "https://www.linkedin.com/in/marionlabbe/",
    x: 272,
    y: 62,
  },
] as const;

// Stylized "hexagone" outline, not a precise coastline — dot positions are
// placed from each city's real coordinates so the relative spread reads
// true, but the outline itself is illustrative.
const FRANCE_OUTLINE =
  "M150,5 L280,55 L255,195 L120,205 L15,145 L8,45 Z";

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
          <svg
            className="about-antennas-section__map"
            viewBox="0 0 300 210"
            role="img"
            aria-hidden="true"
          >
            <path d={FRANCE_OUTLINE} className="about-antennas-section__outline" />
            {ANTENNA_LEADERS.map((leader) => (
              <g key={leader.city}>
                <circle
                  cx={leader.x}
                  cy={leader.y}
                  r={5}
                  className="about-antennas-section__dot"
                />
                <text
                  x={leader.x}
                  y={leader.y - 9}
                  className="about-antennas-section__dot-label"
                  textAnchor="middle"
                >
                  {leader.city}
                </text>
              </g>
            ))}
          </svg>

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
