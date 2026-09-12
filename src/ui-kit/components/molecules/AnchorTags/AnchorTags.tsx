import Link from "next/link";
import "./AnchorTags.css";

type AnchorTagsProps = {
  items: { id: string; label: string }[];
  ariaLabel: string;
};

export const AnchorTags = ({ items, ariaLabel }: AnchorTagsProps) => (
  <nav aria-label={ariaLabel} className="anchor-tags">
    <ul className="anchor-tags__list">
      {items.map((item) => (
        <li key={item.id}>
          <Link href={`#${item.id}`} className="anchor-tags__card">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
