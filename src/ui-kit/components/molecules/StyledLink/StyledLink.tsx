import { clsx } from "clsx";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import "./StyledLink.css";

export type StyledLinkProps = {
  href: string;
  children?: ReactNode;
  bordered?: boolean;
  reversed?: boolean;
  iconOnly?: boolean;
  filled?: boolean | "green";
  className?: string;
  ariaLabel?: string;
  icon?: ReactNode;
} & ComponentPropsWithoutRef<typeof Link>;

export const StyledLink = ({
  href,
  children,
  bordered = false,
  reversed = false,
  iconOnly = false,
  filled = false,
  className = "",
  ariaLabel,
  icon,
  ...props
}: StyledLinkProps) => {
  const isExternal = href.startsWith("http");
  const target = props.target || (isExternal ? "_blank" : undefined);
  const rel =
    props.rel || (target === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <Link
      href={href}
      className={clsx(
        "styled-link",
        bordered && "styled-link--bordered",
        reversed && "styled-link--reversed",
        iconOnly && "styled-link--icon",
        filled && "styled-link--filled",
        filled === "green" && "styled-link--filled-green",
        className,
      )}
      aria-label={iconOnly ? undefined : ariaLabel}
      target={target}
      rel={rel}
      {...props}
    >
      {iconOnly && ariaLabel && <span className="sr-only">{ariaLabel}</span>}
      {children}
      {target === "_blank" && (
        <span className="sr-only">&nbsp;(ouvre un nouvel onglet)</span>
      )}
      {icon && (
        <span className="styled-link--icon" aria-hidden="true">
          {icon}
        </span>
      )}
    </Link>
  );
};
