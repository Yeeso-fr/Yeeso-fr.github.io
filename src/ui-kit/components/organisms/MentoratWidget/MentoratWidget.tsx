"use client";

import { useEffect } from "react";
import "./MentoratWidget.css";

const HUOLTU_SCRIPT_SRC = "https://app.huoltu.com/widget.js";
const HUOLTU_CLIENT_ID = "67b842d3768bb";

export const MentoratWidget = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${HUOLTU_SCRIPT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = HUOLTU_SCRIPT_SRC;
    script.setAttribute("data-client-id", HUOLTU_CLIENT_ID);
    document.head.appendChild(script);
  }, []);

  return <div id="rdv-widget" className="mentorat-widget" />;
};
