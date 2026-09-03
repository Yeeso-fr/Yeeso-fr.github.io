import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PARTNERSHIP_EMAIL } from "@/config/social-links";
import { OfferBlock } from "@/ui-kit/components/molecules/OfferBlock/OfferBlock";
import { Tabs } from "@/ui-kit/components/molecules/Tabs/Tabs";
import "./TrainingSection.css";

export const TrainingSection = () => {
  return (
    <section className="training-section" id="formation">
      <div className="container">
        <span className="section-eyebrow">Formations</span>
        <h2 className="training-section__title">Faire grandir les équipes</h2>
        <p className="training-section__lead">
          <FontAwesomeIcon icon={faGraduationCap} aria-hidden /> Des formats
          courts pour sensibiliser et outiller vos équipes, animés par Yeeso.
        </p>

        <Tabs
          ariaLabel="Offres de formation"
          items={[
            {
              id: "prise-de-parole",
              label: "Prise de parole en public",
              content: (
                <OfferBlock
                  modifier="offer-block--noir"
                  kicker="Formation • Prise de parole en public"
                  title="Trouver sa voix. Porter son message. Marquer les esprits."
                  description="Une formation pratique et interactive pour gagner en confiance, structurer ses idées et prendre la parole avec impact, nourrie d'une expérience concrète de la scène et de l'accompagnement d'intervenants."
                  bulletsIntro="Vous bénéficiez de :"
                  bullets={[
                    "une formation sur mesure",
                    "des mises en situation et retours personnalisés",
                    "des méthodes directement applicables au quotidien",
                  ]}
                  idealFor="collaborateurs, managers, experts et futurs leaders amenés à intervenir en réunion, présentation, pitch ou conférence."
                  valorisation="possibilité de valoriser la formation à son issue sur les canaux de Yeeso."
                  ctaLabel="Demander un devis ou plus d'infos"
                  ctaHref={`mailto:${PARTNERSHIP_EMAIL}`}
                />
              ),
            },
            {
              id: "management-inclusif",
              label: "Management inclusif",
              content: (
                <OfferBlock
                  modifier="offer-block--green"
                  kicker="Formation • Management & leadership inclusifs"
                  title="Manager équitablement pour faire grandir tous les talents."
                  description="Une formation pratique pour identifier les biais et mécanismes qui peuvent créer des inégalités et faire évoluer les pratiques managériales, avec une attention particulière portée aux enjeux de mixité."
                  bulletsIntro="Vous bénéficiez de :"
                  bullets={[
                    "une formation sur mesure, adaptée à votre organisation",
                    "des outils concrets pour faire évoluer les pratiques au quotidien",
                  ]}
                  idealFor="managers et responsables d'équipe souhaitant faire progresser la mixité et l'équité dans leurs pratiques."
                  valorisation="possibilité de valoriser la formation à son issue sur les canaux de Yeeso."
                  trainer="Formatrice : Houleymatou Baldé"
                  ctaLabel="Demander un devis ou plus d'infos"
                  ctaHref={`mailto:${PARTNERSHIP_EMAIL}`}
                />
              ),
            },
          ]}
        />

        <p className="training-section__note">Tarifs communiqués sur devis.</p>
      </div>
    </section>
  );
};
