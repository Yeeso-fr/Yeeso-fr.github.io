import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LINKEDIN_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./HistorySection.css";

export const HistorySection = () => {
  return (
    <section className="history-section">
      <div className="container">
        <span className="section-eyebrow section-eyebrow--on-accent">
          Histoire
        </span>
        <h2 className="history-section__title">
          <span lang="ff">Yeeso</span> signifie « avenir » en peul. Son histoire
          est liée au parcours de sa fondatrice.
        </h2>

        <div className="history-section__content">
          <blockquote className="history-section__quote">
            <p>
              Née dans un petit village du nord de la Guinée, confrontée très
              tôt aux inégalités, je n'ai jamais douté de moi. En découvrant un
              personnage de fiction qui résolvait des enquêtes derrière son
              ordinateur, je me suis dit : si elle peut le faire, je peux le
              faire.
            </p>
            <footer>Houleymatou Baldé</footer>
          </blockquote>

          <div className="history-section__bio">
            <p>
              Ingénieure études et développement logiciel, conférencière
              professionnelle et fondatrice de Yeeso. Répertoriée dans
              l'annuaire 2024 « Le top 100 acteurs du numérique ».
            </p>
            <p>
              « Je suis une preuve que la compétence n'a ni de genre, ni de
              classe sociale, ni couleur de peau. »
            </p>
            <StyledLink href={LINKEDIN_URL} filled={true}>
              Suivre sur LinkedIn <FontAwesomeIcon icon={faArrowRightLong} />
            </StyledLink>
          </div>
        </div>
      </div>
    </section>
  );
};
