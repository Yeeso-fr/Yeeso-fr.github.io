import "./JoinImpactSection.css";

// Same figures as the homepage's ImpactSection (src/ui-kit/components/
// templates/ImpactSection/ImpactSection.tsx) — kept in sync manually since
// each section frames its own subset/labels of the same underlying stats.
const STATS = [
  {
    value: "+ 1 250",
    label: "Jeunes sensibilisé·es",
    modifier: "join-impact-stat--purple",
  },
  {
    value: "+ 3 000",
    label: "Femmes accompagnées",
    modifier: "join-impact-stat--green",
  },
  {
    value: "+ 58",
    label: "interventions",
    modifier: "join-impact-stat--coral",
  },
  {
    value: "8",
    label: "Villes mobilisées",
    modifier: "join-impact-stat--purple",
  },
  { value: "+ 3 000", label: "Membres", modifier: "join-impact-stat--green" },
] as const;

export const JoinImpactSection = () => {
  return (
    <section className="join-impact-section" id="notre-impact">
      <div className="container">
        <span className="section-eyebrow">Notre impact</span>
        <h2 className="join-impact-section__title">
          Ensemble, nous pouvons aller plus loin
        </h2>

        <div className="join-impact-section__stats">
          {STATS.map((stat) => (
            <div
              className={`join-impact-stat ${stat.modifier}`}
              key={stat.label}
            >
              <span className="join-impact-stat__value">{stat.value}</span>
              <span className="join-impact-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>

        <p className="join-impact-section__lead">
          Chaque adhésion et chaque don nous permettent de renforcer notre
          communauté et de développer nos actions auprès des jeunes et des
          femmes, partout en France.
        </p>
      </div>
    </section>
  );
};
