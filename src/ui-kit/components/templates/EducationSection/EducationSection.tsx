import "./EducationSection.css";

const STAGES = [
  {
    step: "Maternelle",
    description:
      "Ateliers de sensibilisation à l'égalité filles-garçons à travers des échanges ludiques : jeux, activités et projections.",
  },
  {
    step: "Primaire",
    description:
      "Ateliers de sensibilisation à l'égalité filles-garçons et notions du monde du travail, à travers des échanges ludiques.",
  },
  {
    step: "Collège",
    description:
      "Cartographie des métiers du digital et de la tech, témoignages de rôles modèles féminins et échanges avec des professionnel·les de l'IT.",
  },
  {
    step: "Lycée",
    description:
      "Atelier animé autour d'un jeu de cartes Genre et Inégalités, et speed-meetings avec des professionnel·les pour découvrir des parcours variés dans le numérique.",
  },
  {
    step: "Écoles de reconversion",
    description:
      "Masterclass techniques et pitchs de rôles modèles, animés par des IT Women expérimentées, au sein des écoles et organismes de reconversion professionnelle.",
  },
  {
    step: "Étudiantes Tech",
    description:
      "Mentorat, parrainage et marrainage par des professionnel·les, conseils pour la recherche de stage ou d'emploi et accès aux offres de nos partenaires.",
  },
  {
    step: "Femmes en reconversion",
    description:
      "Mentorat, parrainage et marrainage par des professionnel·les, en amont et en aval de la reconversion.",
  },
  {
    step: "Femmes Tech",
    description:
      "Ateliers d'entraide autour du quotidien en entreprise, de la prise de parole et du leadership, sororité, adelphité et mentorat continu, et campagne de rôles modèles sur nos réseaux.",
  },
] as const;

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

        <ol className="education-timeline">
          {STAGES.map((stage, index) => (
            <li className="education-timeline-item" key={stage.step}>
              <span className="education-timeline-item__number">
                {index + 1}
              </span>
              <div>
                <h3 className="education-timeline-item__title">{stage.step}</h3>
                <p className="education-timeline-item__description">
                  {stage.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
