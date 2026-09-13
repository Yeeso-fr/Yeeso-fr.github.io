import type { QaScores } from "@/entities/qa-scores/qa-scores";
import "./QaScoresDetails.css";

type QaScoresDetailsProps = {
  qaScores: QaScores | null;
};

export const QaScoresDetails = ({ qaScores }: QaScoresDetailsProps) => {
  if (!qaScores) return null;

  const generatedAt = new Date(qaScores.generatedAt).toLocaleDateString(
    "fr-FR",
    { day: "numeric", month: "long", year: "numeric" },
  );

  return (
    <section
      className="qa-scores-details"
      id="qualite"
      aria-labelledby="qualite-title"
    >
      <h2 id="qualite-title">7. Qualité &amp; Accessibilité</h2>
      <p>
        Nous auditons automatiquement chaque page du site avec{" "}
        <strong>Lighthouse</strong>, <strong>Axe-core</strong> et{" "}
        <strong>EcoIndex</strong> (référentiel RWEB du Collectif Conception
        Numérique Responsable). Dernière mesure : {generatedAt}.
      </p>

      <div className="qa-scores-details__subsection">
        <h3>Lighthouse</h3>
        <ul className="qa-scores-details__list">
          <li className="qa-scores-details__item">
            <h4>Performance</h4>
            <p>{qaScores.lighthouse.performance}/100</p>
          </li>
          <li className="qa-scores-details__item">
            <h4>Accessibilité</h4>
            <p>{qaScores.lighthouse.accessibility}/100</p>
          </li>
          <li className="qa-scores-details__item">
            <h4>Bonnes pratiques</h4>
            <p>{qaScores.lighthouse.bestPractices}/100</p>
          </li>
          <li className="qa-scores-details__item">
            <h4>SEO</h4>
            <p>{qaScores.lighthouse.seo}/100</p>
          </li>
        </ul>
      </div>

      <div className="qa-scores-details__subsection">
        <h3>Axe-core</h3>
        <ul className="qa-scores-details__list">
          <li className="qa-scores-details__item">
            <h4>Accessibilité (WCAG 2.2 / RGAA 4)</h4>
            <p>
              {qaScores.axe.score}%, {qaScores.axe.rulesPassed}/
              {qaScores.axe.rulesTotal} règles validées
            </p>
          </li>
        </ul>
      </div>

      <div className="qa-scores-details__subsection">
        <h3>EcoIndex</h3>
        <ul className="qa-scores-details__list">
          <li className="qa-scores-details__item">
            <h4>Impact environnemental</h4>
            <p>
              {qaScores.ecoindex.score}/100, Note {qaScores.ecoindex.grade}
            </p>
          </li>
          <li className="qa-scores-details__item">
            <h4>Eau consommée</h4>
            <p>{qaScores.ecoindex.water} cl par visite</p>
          </li>
          <li className="qa-scores-details__item">
            <h4>Gaz à effet de serre</h4>
            <p>{qaScores.ecoindex.ghg} g eqCO2 par visite</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
