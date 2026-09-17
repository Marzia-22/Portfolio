"use client";

import { useScrollReveal } from "@/lib/hooks";
import { experience } from "@/data/content";

export default function Experience() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const job = experience[0];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-[var(--color-border)]"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-6xl mx-auto px-5 sm:px-8 py-section reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-20">

          {/* Left — label */}
          <div>
            <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-subtle)] uppercase mb-4 lg:mb-0">
              Experience
            </p>
          </div>

          {/* Right — job entry */}
          <div>
            <h2
              id="experience-heading"
              className="font-display font-semibold text-[var(--color-text)] mb-8"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}
            >
              Where I&apos;ve worked
            </h2>

            <article
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
              aria-label={`${job.role} at ${job.company}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="font-semibold text-[var(--color-text)] text-lg mb-0.5">
                    {job.role}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {job.company}
                  </p>
                </div>
                <span className="chip chip-default shrink-0 self-start">{job.type}</span>
              </div>

              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                {job.description}
              </p>

              <ul className="space-y-2.5">
                {job.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]"
                  >
                    <span
                      className="mt-2 shrink-0 w-1 h-1 rounded-full bg-accent opacity-60"
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
