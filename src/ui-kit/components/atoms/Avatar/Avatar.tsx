import { clsx } from "clsx";
import "./Avatar.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  border?: boolean;
};

export const Avatar = ({
  src,
  alt,
  size = 40,
  className,
  border = false,
}: AvatarProps) => {
  return (
    <figure
      className={clsx("avatar-link", border && "avatar-border", className)}
    >
      <img
        src={src.startsWith("/") ? `${basePath}${src}` : src}
        alt={alt}
        width={size}
        height={size}
        loading="lazy"
        className="avatar-image"
      />
    </figure>
  );
};
