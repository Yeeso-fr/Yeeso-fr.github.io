import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "./ScrollCue.css";

type ScrollCueProps = {
  /** Anchor id of the next section, e.g. "#constat". */
  href: string;
  ariaLabel: string;
};

/** "There's more below" hint that doubles as a jump link to the next
 * section — a plain decorative chevron didn't invite the click the way an
 * actual link affordance does. */
export const ScrollCue = ({ href, ariaLabel }: ScrollCueProps) => (
  <Link href={href} className="scroll-cue" aria-label={ariaLabel}>
    <FontAwesomeIcon icon={faChevronDown} aria-hidden />
  </Link>
);
