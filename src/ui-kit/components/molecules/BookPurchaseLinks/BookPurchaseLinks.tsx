import { BOOK_HELLOASSO_URL, BOOK_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import "./BookPurchaseLinks.css";

type BookPurchaseLinksProps = {
  amazonClassName?: string;
};

export const BookPurchaseLinks = ({
  amazonClassName,
}: BookPurchaseLinksProps) => (
  <>
    <StyledLink href={BOOK_HELLOASSO_URL} filled brandColor="mint">
      Commander sur HelloAsso *
    </StyledLink>
    <StyledLink href={BOOK_URL} bordered className={amazonClassName}>
      Acheter sur Amazon
    </StyledLink>
    <p className="book-purchase-links__note">
      * Une commande HelloAsso est un don à Yeeso : le livre se retire en
      main propre lors d'un de nos événements.
    </p>
  </>
);
