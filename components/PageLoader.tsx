"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = window.sessionStorage.getItem("marzia-portfolio-visited") === "true";
    const duration = reduced ? 0 : seen ? 260 : 1100;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const amount = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      setProgress(Math.round(amount * 100));
      if (amount < 1) frame = requestAnimationFrame(tick);
      else {
        window.sessionStorage.setItem("marzia-portfolio-visited", "true");
        document.documentElement.dataset.pageReady = "true";
        setLeaving(true);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <div className={`page-loader ${leaving ? "is-leaving" : ""}`} aria-label="Loading portfolio" aria-live="polite">
    <span className="page-loader__number">{String(progress).padStart(2, "0")}</span>
    <span className="page-loader__label">Marzia Tasneem / Portfolio</span>
  </div>;
}
