import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Timeline,
  type TimelineTone,
} from "@/ui-kit/components/organisms/Timeline/Timeline";
import "./ConferencePartnershipSection.css";

const PHASES: { title: string; items: string[]; tone: TimelineTone }[] = [
  {
    title: "Avant l'événement",
    items: [
      "Accès à nos ressources et guides",
      "Session de conseil et sensibilisation avec l'équipe organisatrice",
      "Mise en relation avec notre réseau d'intervenant·es",
      "Relais de communication auprès de notre communauté",
    ],
    tone: "green",
  },
  {
    title: "Le jour J",
    items: ["Check-list sécurité", "Prestations possibles sur devis"],
    tone: "purple",
  },
  {
    title: "Après l'événement",
    items: ["Récapitulatif sur les KPI", "Partage des contenus créés"],
    tone: "coral",
  },
];

const EXTRAS = [
  "Relecture de code de conduite",
  "Accompagnement renforcé",
  "Présence de référent·es sur place",
  "Aide au sourcing de conférencières",
  "Mentorat de speakers en non-mixité choisie (femmes, personnes trans et non-binaires)",
  "Prises de parole et tables rondes",
  "Création de contenu",
] as const;

export const ConferencePartnershipSection = () => {
  return (
    <section className="conference-partnership-section" id="partenariat">
      <div className="container">
        <span className="section-eyebrow">Partenariat</span>
        <h2 className="conference-partnership-section__title">
          Le partenariat Yeeso inclut
        </h2>

        <Timeline
          steps={PHASES.map((phase) => ({
            title: phase.title,
            tone: phase.tone,
            content: (
              <ul key={phase.title} className="conference-phase-card__list">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ),
          }))}
          columns={PHASES.length}
          cardStyle="tinted"
          breakpoint="compact"
        />

        <h3 className="conference-partnership-section__extras-title">
          Accompagnements complémentaires
        </h3>
        <p className="conference-partnership-section__extras-lead">
          Disponibles à la carte et sur devis, pour aller plus loin :
        </p>
        <ul className="conference-partnership-section__extras-list">
          {EXTRAS.map((extra) => (
            <li key={extra}>
              <FontAwesomeIcon icon={faPlus} aria-hidden />
              {extra}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
