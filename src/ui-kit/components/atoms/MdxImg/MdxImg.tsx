import type React from "react";
import { GifPlayer } from "@/ui-kit/components/molecules/GifPlayer/GifPlayer";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const MdxImg = ({
  src,
  ...props
}: Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
}) => {
  const resolvedSrc = src.startsWith("/") ? `${basePath}${src}` : src;

  if (/\.gif($|\?)/i.test(src)) {
    return <GifPlayer src={resolvedSrc} {...props} />;
  }

  return (
    // biome-ignore lint/a11y/useAltText: alt is always supplied by the MDX author via ...props
    <img src={resolvedSrc} loading="lazy" {...props} />
  );
};
