import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LINKEDIN_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./AboutHistorySection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const TIMELINE = [
  {
    step: "Le point de départ",
    title: "Un parcours qui devient une mission",
    description:
      "Née dans un petit village du nord de la Guinée, Houleymatou Baldé se construit face à l'excision, au patriarcat, aux inégalités sociales, au racisme et au sexisme — sans jamais douter d'elle-même. Un rôle modèle croisé à l'écran oriente sa vocation vers l'informatique.",
    tone: "green",
  },
  {
    step: "La conviction",
    title: "Le déclic « si elle peut le faire, je peux le faire »",
    description:
      "Baccalauréat scientifique, puis études d'informatique, puis une carrière d'ingénieure études et développement logiciel. Le constat s'impose : ce qui a manqué, ce n'était pas la capacité, c'était la représentation.",
    tone: "purple",
  },
  {
    step: "La création",
    title: "Yeeso, « avenir » en peul",
    description:
      "L'association loi 1901 naît pour transformer une histoire personnelle en action collective : rendre le monde de l'IT plus juste et plus équitable, quel que soit le genre, dès la scolarisation.",
    tone: "blue",
  },
  {
    step: "Aujourd'hui",
    title: "Deux programmes et un réseau",
    description:
      "Le programme Éducation intervient de la maternelle au monde du travail. Le programme Entreprise accompagne les organisations. L'IT Women Network prolonge l'action par le mentorat et l'entraide.",
    tone: "coral",
  },
] as const;

export const AboutHistorySection = () => {
  return (
    <section className="about-history-section" id="histoire">
      <div className="container">
        <span className="section-eyebrow">Notre histoire</span>
        <h2 className="about-history-section__title">
          <span lang="ff">« yeeso »</span> signifie avenir en peul, langue
          parlée dans une vingtaine de pays africains.
        </h2>

        <div className="about-history-section__content">
          <ol className="about-history-section__timeline">
            {TIMELINE.map((item, index) => (
              <li
                className={`about-timeline-item about-timeline-item--${item.tone}`}
                key={item.step}
              >
                <span className="about-timeline-item__number">{index + 1}</span>
                <div className="about-timeline-item__content">
                  <span className="about-timeline-item__eyebrow">
                    {item.step}
                  </span>
                  <h3 className="about-timeline-item__title">{item.title}</h3>
                  <p className="about-timeline-item__description">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="about-history-section__profile">
            <figure className="about-history-section__photo">
              <img
                src={`${basePath}/img/photos/team/houleymatou-hero.webp`}
                alt="Houleymatou Baldé, fondatrice de Yeeso"
                width={840}
                height={1120}
              />
            </figure>
            <div className="about-history-section__bio">
              <h3>Houleymatou Baldé</h3>
              <p>
                Ingénieure études et développement logiciel, conférencière
                professionnelle et fondatrice de Yeeso. Répertoriée dans
                l'annuaire 2024 « Le top 100 acteurs du numérique ».
              </p>
              <StyledLink href={LINKEDIN_URL} filled={true}>
                Suivre sur LinkedIn <FontAwesomeIcon icon={faArrowRightLong} />
              </StyledLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
