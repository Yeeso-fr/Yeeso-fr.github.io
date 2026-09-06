import { BOOK_HELLOASSO_URL, BOOK_URL } from "@/config/social-links";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";

type BookPurchaseLinksProps = {
  amazonClassName?: string;
};

export const BookPurchaseLinks = ({
  amazonClassName,
}: BookPurchaseLinksProps) => (
  <>
    <StyledLink href={BOOK_HELLOASSO_URL} filled brandColor="mint">
      Commander sur HelloAsso
    </StyledLink>
    <StyledLink href={BOOK_URL} bordered className={amazonClassName}>
      Acheter sur Amazon
    </StyledLink>
  </>
);
