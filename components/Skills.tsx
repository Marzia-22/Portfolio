"use client";

import { useScrollReveal } from "@/lib/hooks";
import { skills } from "@/data/content";

interface SkillGroupProps {
  label: string;
  items: string[];
  delayClass?: string;
  accent?: boolean;
}

function SkillGroup({ label, items, delayClass = "", accent = false }: SkillGroupProps) {
  return (
    <div className={`reveal ${delayClass}`}>
      <p className="skill-group-label">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className={`chip ${accent ? "chip-accent" : "chip-default"}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-[var(--color-border)]"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-6xl mx-auto px-5 sm:px-8 py-section ${isVisible ? "visible" : ""}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-20">

          {/* Left label */}
          <div>
            <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-subtle)] uppercase mb-4 lg:mb-0">
              Skills
            </p>
          </div>

          {/* Right — skill clusters */}
          <div>
            <h2
              id="skills-heading"
              className={`reveal font-display font-semibold text-[var(--color-text)] mb-10 ${isVisible ? "visible" : ""}`}
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}
            >
              What I work with
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              <SkillGroup
                label="Languages"
                items={skills.languages}
                delayClass={`reveal-delay-1 ${isVisible ? "visible" : ""}`}
                accent
              />
              <SkillGroup
                label="Frontend"
                items={skills.frontend}
                delayClass={`reveal-delay-2 ${isVisible ? "visible" : ""}`}
              />
              <SkillGroup
                label="Backend & Database"
                items={skills.backend}
                delayClass={`reveal-delay-3 ${isVisible ? "visible" : ""}`}
              />
              <SkillGroup
                label="Tools & Platforms"
                items={skills.tools}
                delayClass={`reveal-delay-4 ${isVisible ? "visible" : ""}`}
              />
              <SkillGroup
                label="Core Concepts"
                items={skills.concepts}
                delayClass={`reveal-delay-5 ${isVisible ? "visible" : ""}`}
              />
            </div>

            {/* No skill bars note */}
            <p className="mt-10 text-xs font-mono text-[var(--color-text-subtle)] opacity-60">
              No proficiency bars — expertise is relative and context-dependent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
