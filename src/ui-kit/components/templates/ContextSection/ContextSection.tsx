import "./ContextSection.css";

const STATS = [
  {
    value: "< 5 %",
    label:
      "des filles choisissent la spécialité Numérique et Sciences Informatiques au lycée, contre 18 % des garçons.",
    source: "DEPP, système d'information Scolarité, rentrée 2024",
    modifier: "context-stat-card--purple",
  },
  {
    value: "11 %",
    label: "de filles dans les filières informatiques des écoles d'ingénieurs.",
    source: "Haut Conseil à l'Égalité, La Femme invisible dans le numérique",
    modifier: "context-stat-card--green",
  },
  {
    value: "50 %",
    label: "des femmes quittent la tech avant 35 ans.",
    source: "Accenture × Girls Who Code, Cracking the Gender Code",
    modifier: "context-stat-card--coral",
  },
  {
    value: "+9 Md€",
    label:
      "de gain potentiel pour le PIB européen si les femmes occupaient autant d'emplois que les hommes dans le numérique.",
    source: "Commission européenne",
    modifier: "context-stat-card--noir",
  },
] as const;

export const ContextSection = () => {
  return (
    <section className="context-section" id="constat">
      <div className="container">
        <span className="section-eyebrow">Le constat</span>
        <h2 className="context-section__title">Pourquoi agir maintenant ?</h2>
        <p className="context-section__lead">
          La révolution du numérique est en marche, mais la tech manque
          cruellement de femmes : seulement 24&nbsp;% en France, et moins de
          10&nbsp;% dans les postes techniques. Pourtant, les besoins sont
          immenses : 115&nbsp;000 talents manqueront d'ici 2030, et la mixité
          pourrait générer +10&nbsp;% de PIB et +25&nbsp;% d'innovation. On ne
          peut plus se permettre de laisser la moitié des talents sur le banc de
          touche.
        </p>

        <div className="context-section__stats">
          {STATS.map((stat) => (
            <div
              className={`context-stat-card ${stat.modifier}`}
              key={stat.label}
            >
              <p className="context-stat-card__value">{stat.value}</p>
              <p className="context-stat-card__label">{stat.label}</p>
              <p className="context-stat-card__source">{stat.source}</p>
            </div>
          ))}
        </div>

        <blockquote className="context-section__quote">
          <p>
            « On ne peut pas prétendre construire un monde durable avec
            seulement la moitié de l'intelligence disponible. C'est
            mathématiquement et humainement absurde. »
          </p>
          <footer>
            Mary Robinson, première Présidente de la République d'Irlande
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
