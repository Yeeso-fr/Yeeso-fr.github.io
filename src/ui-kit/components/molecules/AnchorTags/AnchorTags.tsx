import Link from "next/link";
import { Badge } from "@/ui-kit/components/molecules/Badge/Badge";
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
          <Badge>
            <Link href={`#${item.id}`}>{item.label}</Link>
          </Badge>
        </li>
      ))}
    </ul>
  </nav>
);
