"use client";

import { useScrollReveal } from "@/lib/hooks";
import { projects } from "@/data/content";

export default function GenieProject() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const g = projects.genie;

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${isVisible ? "visible" : ""} project-card rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden`}
      aria-label="GENIE — Hackathon Project"
    >
      {/* Achievement banner */}
      <div
        className="flex items-center gap-3 px-5 py-3 border-b border-[var(--color-border)]"
        style={{ background: "var(--color-accent-soft)" }}
      >
        <span className="text-accent" aria-hidden="true">🏆</span>
        <p className="text-xs font-medium text-[var(--color-accent-hover)]">
          {g.achievement} · {g.event}
        </p>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3
              className="font-display font-bold text-[var(--color-text)] mb-1"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}
            >
              {g.name}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] italic font-display">
              {g.tagline}
            </p>
          </div>
          <span className="chip chip-default shrink-0">Hackathon</span>
        </div>

        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
          {g.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {g.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
              <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent opacity-60" />
              {f}
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {g.stack.map((tech) => (
            <span key={tech} className="chip chip-default">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {g.github ? (
            <a
              href={g.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--color-border)] text-sm text-[var(--color-text-muted)] hover:border-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-all duration-200"
            >
              GitHub ↗
            </a>
          ) : (
            <span
              className="inline-flex items-center px-4 py-2 rounded-full border border-[var(--color-border)] text-sm text-[var(--color-text-subtle)] opacity-50 cursor-not-allowed"
              title="Repository link to be added"
            >
              GitHub
            </span>
          )}
          {g.live && (
            <a
              href={g.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--color-text)] text-[var(--color-bg)] text-sm font-medium hover:bg-accent transition-colors"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
