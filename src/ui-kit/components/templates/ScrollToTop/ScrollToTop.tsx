"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Next's client-side navigation is supposed to reset scroll to the top of
 * the new page, but that reset doesn't reliably fire on every device/browser
 * (notably iOS Safari) — the new page can render at whatever scroll offset
 * the previous one was left at. Force it explicitly rather than trust the
 * framework/browser default.
 *
 * Skipped when the destination URL carries a hash (e.g. an AnchorTags/
 * ScrollCue jump like `/nous-rejoindre#developper-reseau`) — landing there
 * is the deliberate target, not something to override.
 */
export const ScrollToTop = () => {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is only used to detect navigation, not read
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (window.location.hash) return;

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
