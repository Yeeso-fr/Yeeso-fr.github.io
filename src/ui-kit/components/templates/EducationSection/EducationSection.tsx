import {
  Timeline,
  type TimelineTone,
} from "@/ui-kit/components/organisms/Timeline/Timeline";
import "./EducationSection.css";

const STAGES: { title: string; description: string; tone: TimelineTone }[] = [
  {
    title: "Maternelle",
    description:
      "Ateliers de sensibilisation à l'égalité filles-garçons à travers des échanges ludiques : jeux, activités et projections.",
    tone: "green",
  },
  {
    title: "Primaire",
    description:
      "Ateliers de sensibilisation à l'égalité filles-garçons et notions du monde du travail, à travers des échanges ludiques.",
    tone: "purple",
  },
  {
    title: "Collège",
    description:
      "Cartographie des métiers du digital et de la tech, témoignages de rôles modèles féminins et échanges avec des professionnel·les de l'IT.",
    tone: "blue",
  },
  {
    title: "Lycée",
    description:
      "Atelier animé autour d'un jeu de cartes Genre et Inégalités, et speed-meetings avec des professionnel·les pour découvrir des parcours variés dans le numérique.",
    tone: "coral",
  },
  {
    title: "Études supérieures",
    description:
      "Masterclass techniques et pitchs de rôles modèles, animés par des IT Women expérimentées, au sein des écoles et organismes de reconversion professionnelle.",
    tone: "green",
  },
  {
    title: "Stages et alternances",
    description:
      "Mentorat, marrainage par des professionnel·les, conseils pour la recherche de stage ou d'emploi et accès aux offres de nos partenaires.",
    tone: "purple",
  },
  {
    title: "En reconversion",
    description:
      "Mentorat, parrainage et marrainage par des professionnel·les, en amont et en aval de la reconversion.",
    tone: "blue",
  },
  {
    title: "Professionnel·es",
    description:
      "Ateliers d'entraide autour du quotidien en entreprise, de la prise de parole et du leadership, sororité, adelphité et mentorat continu, et campagne de rôles modèles sur nos réseaux.",
    tone: "coral",
  },
];

export const EducationSection = () => {
  return (
    <section className="education-section" id="ateliers">
      <div className="container">
        <span className="section-eyebrow">Nos ateliers</span>
        <h2 className="education-section__title">
          De la maternelle au monde du travail
        </h2>
        <p className="education-section__lead">
          Yeeso intervient à chaque étape du parcours scolaire et professionnel
          pour déconstruire les stéréotypes et faire découvrir les métiers du
          numérique, à travers 8 ateliers.
        </p>

        <Timeline
          steps={STAGES.map((stage) => ({
            title: stage.title,
            tone: stage.tone,
            content: (
              <p key={stage.title} className="timeline-item__description">
                {stage.description}
              </p>
            ),
          }))}
          columns={4}
          stepLabel="Étape {index} sur {total}"
        />
      </div>
    </section>
  );
};
