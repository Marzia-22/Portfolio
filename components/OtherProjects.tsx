"use client";

import { useScrollReveal } from "@/lib/hooks";
import { projects } from "@/data/content";

interface SmallProjectCardProps {
  name: string;
  tagline: string;
  type: string;
  description: string;
  features: string[];
  stack: string[];
  github: string | null;
  note?: string;
  delayClass?: string;
}

function SmallProjectCard({
  name,
  tagline,
  type,
  description,
  features,
  stack,
  github,
  note,
  delayClass = "",
}: SmallProjectCardProps) {
  return (
    <article
      className={`project-card flex flex-col h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7 ${delayClass}`}
      aria-label={`${name} — ${type}`}
    >
      {/* Type badge */}
      <div className="flex items-center justify-between gap-2 mb-5">
        <span className="chip chip-default text-[10px] tracking-wider">{type}</span>
      </div>

      {/* Title */}
      <h3
        className="font-display font-semibold text-[var(--color-text)] mb-1.5"
        style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", letterSpacing: "-0.015em" }}
      >
        {name}
      </h3>
      <p className="text-xs italic font-display text-[var(--color-text-muted)] mb-4">
        {tagline}
      </p>

      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5 flex-1">
        {description}
      </p>

      {note && (
        <p className="text-xs font-mono text-[var(--color-text-subtle)] border border-[var(--color-border)] rounded-lg px-3 py-2 mb-5">
          {note}
        </p>
      )}

      {/* Features — compact */}
      {features.length > 0 && (
        <ul className="space-y-1.5 mb-5">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-xs text-[var(--color-text-muted)]"
            >
              <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[var(--color-border)]" />
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {stack.map((tech) => (
          <span key={tech} className="chip chip-default text-[10px]">
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-[var(--color-accent-hover)] transition-colors"
        >
          View on GitHub ↗
        </a>
      ) : (
        <span className="text-xs font-mono text-[var(--color-text-subtle)] opacity-50">
          Link to be added
        </span>
      )}
    </article>
  );
}

export default function OtherProjects() {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`grid grid-cols-1 sm:grid-cols-2 gap-5 reveal ${isVisible ? "visible" : ""}`}
    >
      <SmallProjectCard
        name={projects.careerRec.name}
        tagline={projects.careerRec.tagline}
        type={projects.careerRec.type}
        description={projects.careerRec.description}
        features={projects.careerRec.features}
        stack={projects.careerRec.stack}
        github={projects.careerRec.github}
        delayClass="reveal-delay-1"
      />
      <SmallProjectCard
        name={projects.nasaSpaceApps.name}
        tagline={projects.nasaSpaceApps.tagline}
        type={projects.nasaSpaceApps.type}
        description={projects.nasaSpaceApps.description}
        features={[]}
        stack={[]}
        github={projects.nasaSpaceApps.github}
        note={projects.nasaSpaceApps.note}
        delayClass="reveal-delay-2"
      />
    </div>
  );
}
