import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";
import type { AuthorCredit } from "@/usecases/authors";

export const AuthorCreditLink = ({ credit }: { credit: AuthorCredit }) => {
  return credit.slug ? (
    <StyledLink href={`/authors/${credit.slug}`} prefetch={false}>
      {credit.name}
    </StyledLink>
  ) : (
    credit.name
  );
};
