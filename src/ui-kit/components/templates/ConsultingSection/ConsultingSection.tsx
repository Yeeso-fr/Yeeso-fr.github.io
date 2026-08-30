import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PARTNERSHIP_EMAIL } from "@/config/social-links";
import { OfferBlock } from "@/ui-kit/components/molecules/OfferBlock/OfferBlock";
import { Tabs } from "@/ui-kit/components/molecules/Tabs/Tabs";
import "./ConsultingSection.css";

export const ConsultingSection = () => {
  return (
    <section className="consulting-section" id="conseil">
      <div className="container">
        <span className="section-eyebrow">Conseil & accompagnement</span>
        <h2 className="consulting-section__title">Transformer les pratiques</h2>
        <p className="consulting-section__lead">
          <FontAwesomeIcon icon={faChartLine} aria-hidden /> Passez de
          l'engagement aux actions concrètes, accompagné·e par Yeeso.
        </p>

        <Tabs
          ariaLabel="Offres de conseil et d'accompagnement"
          items={[
            {
              id: "demarche-mixite",
              label: "Démarche de mixité",
              content: (
                <OfferBlock
                  modifier="offer-block--coral"
                  kicker="Accompagnement à la démarche de mixité"
                  title="Passez de l'engagement aux actions concrètes."
                  description="Yeeso accompagne votre entreprise pour identifier ses enjeux de mixité et construire, avec vos collaborateurs, des solutions adaptées à vos réalités."
                  bulletsIntro="Vous bénéficiez de :"
                  bullets={[
                    "des solutions co-construites avec vos équipes",
                    "un plan d'action concret et priorisé",
                    "un suivi à 6 mois pour mesurer les avancées",
                  ]}
                  idealFor="les entreprises souhaitant structurer ou accélérer leur démarche de mixité et passer concrètement à l'action."
                  valorisation="possibilité de mettre en lumière les actions réellement engagées sur les canaux de Yeeso à l'issue du suivi à 6 mois."
                  ctaLabel="Demander un devis ou plus d'infos"
                  ctaHref={`mailto:${PARTNERSHIP_EMAIL}`}
                />
              ),
            },
            {
              id: "sensibilisation-sexisme",
              label: "Sensibilisation sexisme",
              content: (
                <OfferBlock
                  modifier="offer-block--noir"
                  kicker="Accompagnement • Sensibilisation sexisme"
                  title="Mettre toute l'équipe au même niveau de connaissances."
                  description="La Fresque du Sexisme (atelier collaboratif) ou une sensibilisation personnalisée, pour mettre toute l'équipe au même niveau de connaissances sur le sujet et poser une base commune."
                  trainer="Formatrice : Manon Carbonnel"
                  ctaLabel="Demander un devis ou plus d'infos"
                  ctaHref={`mailto:${PARTNERSHIP_EMAIL}`}
                />
              ),
            },
          ]}
        />

        <p className="consulting-section__note">
          Tarifs communiqués sur devis, selon votre contexte.
        </p>
      </div>
    </section>
  );
};
