import { clsx } from "clsx";
import Link from "next/link";
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import {
  BRAND_COLORS,
  type BrandColorName,
} from "@/ui-kit/styles/theme/brandColors";
import "./StyledLink.css";

export type StyledLinkProps = {
  href: string;
  children?: ReactNode;
  bordered?: boolean;
  reversed?: boolean;
  iconOnly?: boolean;
  filled?: boolean;
  /** Fill color, picked from the Yeeso brand chart — only applies when `filled`. Defaults to "primary" (blue). Named `brandColor` (not `color`) to avoid colliding with the native, deprecated anchor `color` attribute. */
  brandColor?: BrandColorName;
  /** Fill with an arbitrary CSS color instead of a brand-chart `brandColor` — only applies when `filled`. */
  customColor?: string;
  /** Text color paired with `customColor` (ignored otherwise). Defaults to white. */
  customTextColor?: string;
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
  brandColor,
  customColor,
  customTextColor,
  className = "",
  ariaLabel,
  icon,
  style,
  ...props
}: StyledLinkProps) => {
  const isExternal = href.startsWith("http");
  const target = props.target || (isExternal ? "_blank" : undefined);
  const rel =
    props.rel || (target === "_blank" ? "noopener noreferrer" : undefined);

  const fill = customColor
    ? {
        background: customColor,
        foreground: customTextColor ?? "var(--color-light)",
      }
    : brandColor
      ? BRAND_COLORS[brandColor]
      : undefined;

  return (
    <Link
      href={href}
      className={clsx(
        "styled-link",
        bordered && "styled-link--bordered",
        reversed && "styled-link--reversed",
        iconOnly && "styled-link--icon",
        filled && "styled-link--filled",
        className,
      )}
      style={
        filled && fill
          ? ({
              "--styled-link-fill": fill.background,
              "--styled-link-fill-fg": fill.foreground,
              ...style,
            } as CSSProperties)
          : style
      }
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
