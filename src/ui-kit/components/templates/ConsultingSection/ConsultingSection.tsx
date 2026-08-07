import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PARTNERSHIP_EMAIL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./ConsultingSection.css";

const OFFERS = [
  {
    title: "Accélérer la mixité dans vos équipes tech",
    duration: "3 j cadrage & diagnostic · 3 j design · 4 j déploiement",
    sponsor: "CTO",
    stakeholders:
      "Talent Acquisition, Talent Development, HRBP CTO, Managers CTO",
    modifier: "consulting-card--green",
  },
  {
    title: "Accélérer la mixité à tous les étages",
    duration: "5 j cadrage & diagnostic · 5 j design · 4 j déploiement",
    sponsor: "DRH",
    stakeholders: "Top Managers, Talent Acquisition, Talent Development, HRBP",
    modifier: "consulting-card--purple",
  },
  {
    title: "Attirer les talents tech… et les faire rester !",
    duration: "6 j cadrage & diagnostic · 5 j design · 5 j déploiement",
    sponsor: "DRH",
    stakeholders: "CTO, Talent Acquisition, Talent Development, HRBP CTO",
    modifier: "consulting-card--coral",
  },
] as const;

export const ConsultingSection = () => {
  return (
    <section className="consulting-section" id="conseil">
      <div className="container">
        <span className="section-eyebrow">Conseil</span>
        <h2 className="consulting-section__title">Booster de mixité</h2>
        <p className="consulting-section__lead">
          <FontAwesomeIcon icon={faChartLine} aria-hidden /> Un accompagnement
          sur-mesure, mené par un·e consultant·e Yeeso senior, pour faire
          progresser la mixité dans votre organisation.
        </p>

        <div className="consulting-section__cards">
          {OFFERS.map((offer) => (
            <div
              className={`consulting-card ${offer.modifier}`}
              key={offer.title}
            >
              <h3 className="consulting-card__title">{offer.title}</h3>
              <dl className="consulting-card__details">
                <div>
                  <dt>Durée</dt>
                  <dd>{offer.duration}</dd>
                </div>
                <div>
                  <dt>Sponsor projet</dt>
                  <dd>{offer.sponsor}</dd>
                </div>
                <div>
                  <dt>Parties prenantes clés</dt>
                  <dd>{offer.stakeholders}</dd>
                </div>
                <div>
                  <dt>Consultant·e Yeeso</dt>
                  <dd>Senior</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <p className="consulting-section__note">
          Tarifs (TJM) communiqués sur devis, selon votre contexte.
        </p>
        <StyledLink href={`mailto:${PARTNERSHIP_EMAIL}`} bordered={true}>
          Demander un devis
        </StyledLink>
      </div>
    </section>
  );
};
