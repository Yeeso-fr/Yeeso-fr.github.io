import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AuthorCreditLink } from "@/ui-kit/components/atoms/AuthorCreditLink/AuthorCreditLink";

describe("AuthorCreditLink", () => {
  it("renders a link to the author page when the credit has a slug", () => {
    render(
      <AuthorCreditLink credit={{ name: "Jane Doe", slug: "jane-doe" }} />,
    );

    expect(screen.getByRole("link", { name: "Jane Doe" })).toHaveAttribute(
      "href",
      "/authors/jane-doe",
    );
  });

  it("renders the name as plain text when the credit has no slug", () => {
    render(<AuthorCreditLink credit={{ name: "John Smith" }} />);

    expect(screen.getByText("John Smith")).toBeInTheDocument();
  });

  it("does not render a link when the credit has no slug", () => {
    render(<AuthorCreditLink credit={{ name: "John Smith" }} />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
