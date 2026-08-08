import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BOOK_HELLOASSO_URL, BOOK_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./BookSection.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const BookSection = () => {
  return (
    <section className="book-section" id="livre">
      <div className="container">
        <div className="book-section__card">
          <img
            src={`${basePath}/img/photos/yeeso-livre-couverture.webp`}
            alt="Couverture du livre Yeeso : 52 portraits et conseils de femmes, 31 articles, 12 actions concrètes pour accélérer la féminisation de l'IT"
            width={450}
            height={516}
            className="book-section__cover"
          />
          <div className="book-section__content">
            <p className="book-section__title">
              <FontAwesomeIcon icon={faBook} aria-hidden />
              Notre livre « Yeeso »
            </p>
            <p>
              52 portraits de femmes qui travaillent aujourd'hui dans la tech,
              pour montrer leur présence et offrir des rôles modèles plus
              abordables et modernes. Le tome 2 est prévu pour 2027.
            </p>
            <p className="book-section__price">24,90 €</p>
            <div className="book-section__cta">
              <StyledLink href={BOOK_HELLOASSO_URL} filled="green">
                Commander sur HelloAsso
              </StyledLink>
              <StyledLink
                href={BOOK_URL}
                bordered
                className="book-section__amazon-link"
              >
                Acheter sur Amazon
              </StyledLink>
            </div>
            <p className="book-section__note">
              Une commande HelloAsso est un don à Yeeso — le livre se retire en
              main propre lors d'un de nos événements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
