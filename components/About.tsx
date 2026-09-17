"use client";

import { useScrollReveal } from "@/lib/hooks";
import { profile, bio } from "@/data/content";

export default function About() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal(0.1);
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollReveal(0.1);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="max-w-6xl mx-auto px-5 sm:px-8 py-section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">

        {/* ── Left — bio ── */}
        <div ref={headRef} className={`reveal ${headVisible ? "visible" : ""}`}>
          <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-subtle)] uppercase mb-4">
            About
          </p>
          <h2
            id="about-heading"
            className="font-display font-semibold text-[var(--color-text)] mb-7"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}
          >
            A bit about me
          </h2>

          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed text-base">
            {bio.trim().split("\n\n").map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
          </div>
        </div>

        {/* ── Right — meta cards ── */}
        <div
          ref={bodyRef}
          className={`reveal reveal-delay-2 ${bodyVisible ? "visible" : ""} space-y-4 lg:pt-16`}
        >
          {/* Education card */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-subtle)] uppercase mb-4">
              Education
            </p>
            <p className="font-medium text-[var(--color-text)] mb-0.5">{profile.degree}</p>
            <p className="text-sm text-[var(--color-text-muted)] mb-3">{profile.university}</p>
            <div className="flex items-center justify-between text-xs text-[var(--color-text-subtle)] border-t border-[var(--color-border)] pt-3 mt-3">
              <span className="font-mono">{profile.period}</span>
              <span className="font-mono font-medium text-[var(--color-text-muted)]">
                CGPA: {profile.cgpa}
              </span>
            </div>
          </div>

          {/* Location + links card */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-subtle)] uppercase mb-4">
              Find me
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-text-muted)]">Location</span>
                <span className="text-sm font-mono text-[var(--color-text-muted)]">
                  {profile.location}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-text-muted)]">LinkedIn</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-accent hover:text-[var(--color-accent-hover)] transition-colors"
                  aria-label="Marzia Tasneem on LinkedIn"
                >
                  /marzia-tasneem ↗
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-text-muted)]">GitHub</span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-accent hover:text-[var(--color-accent-hover)] transition-colors"
                  aria-label="Marzia Tasneem on GitHub"
                >
                  /Marzia-22 ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
