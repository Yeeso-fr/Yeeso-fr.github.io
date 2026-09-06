import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBluesky,
  faCodepen,
  faDev,
  faDiscord,
  faGithub,
  faLinkedin,
  faMastodon,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightLong,
  faCheck,
  faCopy,
  faEnvelope,
  faGlobe,
  faMagnifyingGlass,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import { StyledLink } from "@/ui-kit/components/molecules/StyledLink/StyledLink";

// Curated subset actually used across the site, keyed by name for the MDX
// `?icon=` param. Avoid `import * as` from FontAwesome packages here: it
// pulls the full 1000+/500+ icon set into every page's bundle.
const allIcons: Record<string, IconProp> = {
  faArrowRightLong,
  faBluesky,
  faCheck,
  faCodepen,
  faCopy,
  faDev,
  faDiscord,
  faEnvelope,
  faGithub,
  faGlobe,
  faLinkedin,
  faMagnifyingGlass,
  faMastodon,
  faMedium,
  faPlay,
};

export const MdxAnchor = ({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  if (!href) return <a {...props}>{children}</a>;

  try {
    const url = new URL(href, "https://local.test");
    const bordered = url.searchParams.has("bordered");
    const reversed = url.searchParams.has("reversed");
    const iconOnly = url.searchParams.has("iconOnly");
    const iconName = url.searchParams.get("icon");

    url.searchParams.delete("bordered");
    url.searchParams.delete("reversed");
    url.searchParams.delete("iconOnly");
    url.searchParams.delete("icon");

    const finalHref =
      href.startsWith("http") || href.startsWith("/")
        ? url.toString().replace("https://local.test", "")
        : href;

    let icon: React.ReactNode;
    if (iconName) {
      const faName = iconName.startsWith("fa")
        ? iconName
        : `fa${iconName.charAt(0).toUpperCase()}${iconName.slice(1)}`;

      if (faName in allIcons) {
        icon = <FontAwesomeIcon icon={allIcons[faName]} />;
      }
    }

    return (
      <StyledLink
        href={finalHref}
        bordered={bordered}
        reversed={reversed}
        iconOnly={iconOnly}
        icon={icon}
        {...props}
      >
        {children}
      </StyledLink>
    );
  } catch (_e) {
    return (
      <StyledLink href={href} {...props}>
        {children}
      </StyledLink>
    );
  }
};
