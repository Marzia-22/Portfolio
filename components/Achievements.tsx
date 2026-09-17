"use client";

import { useScrollReveal } from "@/lib/hooks";
import { achievements, certifications } from "@/data/content";

export default function Achievements() {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface-muted)]"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-6xl mx-auto px-5 sm:px-8 py-section reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Achievements */}
          <div>
            <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-subtle)] uppercase mb-4">
              Achievements
            </p>
            <h2
              id="achievements-heading"
              className="font-display font-semibold text-[var(--color-text)] mb-8"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}
            >
              Highlights
            </h2>

            <ul className="space-y-6" role="list">
              {achievements.map((a, i) => (
                <li
                  key={i}
                  className={`achievement-item ${a.highlight ? "border-accent" : ""}`}
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p
                      className={`font-medium text-sm ${
                        a.highlight
                          ? "text-[var(--color-text)]"
                          : "text-[var(--color-text)]"
                      }`}
                    >
                      {a.highlight && (
                        <span className="text-accent mr-1.5" aria-label="Top achievement">★</span>
                      )}
                      {a.title}
                    </p>
                  </div>
                  <p className="text-xs font-mono text-[var(--color-text-muted)] mb-1.5">
                    {a.event}
                  </p>
                  <p className="text-xs text-[var(--color-text-subtle)]">{a.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-subtle)] uppercase mb-4">
              Certifications
            </p>
            <h2
              className="font-display font-semibold text-[var(--color-text)] mb-8"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}
              aria-label="Certifications"
            >
              Certified in
            </h2>

            <ul className="space-y-4" role="list">
              {certifications.map((cert, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <div
                    className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-accent text-sm font-bold"
                    style={{ background: "var(--color-accent-soft)" }}
                    aria-hidden="true"
                  >
                    ✓
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text)] mb-0.5">
                      {cert.name}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">{cert.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
