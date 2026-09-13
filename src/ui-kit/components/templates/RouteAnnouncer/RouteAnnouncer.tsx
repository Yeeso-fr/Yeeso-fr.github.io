"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Next.js client-side navigations never trigger a full page reload, so
 * screen reader users get none of the cues a real reload gives them: no
 * "page loading" state and no focus reset. This mirrors that behavior by
 * moving focus to <main id="maincontent"> and announcing the new page
 * title on every route change.
 * See https://access42.net/accessibilite-rechargement-page-single-page-applications/
 */
export const RouteAnnouncer = () => {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const [announcement, setAnnouncement] = useState("");

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is only used to detect navigation, not read
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    document.getElementById("maincontent")?.focus({ preventScroll: true });

    const raf = requestAnimationFrame(() => {
      setAnnouncement(document.title);
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <div className="sr-only" role="status" aria-live="polite">
      {announcement}
    </div>
  );
};
