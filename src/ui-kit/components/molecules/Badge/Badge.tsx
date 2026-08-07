import { clsx } from "clsx";
import type React from "react";
import type { ReactNode } from "react";
import "./Badge.css";

export type BadgeProps = {
  children: ReactNode;
  color?: string;
  filled?: boolean;
  className?: string;
};

export const Badge = ({
  children,
  color,
  filled = false,
  className,
}: BadgeProps) => {
  return (
    <div
      className={clsx("badge", { "badge--filled": filled }, className)}
      style={color ? ({ "--badge-color": color } as React.CSSProperties) : {}}
    >
      {children}
    </div>
  );
};
