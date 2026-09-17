"use client";

import { useScrollReveal } from "@/lib/hooks";
import { profile } from "@/data/content";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-[var(--color-border)]"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-6xl mx-auto px-5 sm:px-8 py-section reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="max-w-2xl">
          <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-subtle)] uppercase mb-5">
            Contact
          </p>

          <h2
            id="contact-heading"
            className="font-display font-semibold text-[var(--color-text)] mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: "1.1", letterSpacing: "-0.025em" }}
          >
            Have an idea, or just want to talk?
          </h2>

          <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-10">
            I&apos;m always open to interesting conversations — about projects,
            opportunities, or just something you&apos;re building.
            Reach out on LinkedIn or GitHub.
          </p>

          {/* Contact cards */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Marzia on LinkedIn"
              className="flex-1 group flex items-center gap-4 p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-accent hover:bg-[var(--color-accent-soft)] transition-all duration-250"
            >
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-accent text-sm group-hover:bg-white transition-colors"
                style={{ background: "var(--color-accent-soft)" }}
                aria-hidden="true"
              >
                in
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-text)]">LinkedIn</p>
                <p className="text-xs text-[var(--color-text-muted)] font-mono">
                  /marzia-tasneem
                </p>
              </div>
              <span className="ml-auto text-[var(--color-text-subtle)] group-hover:text-accent transition-colors text-sm" aria-hidden="true">
                ↗
              </span>
            </a>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Marzia's work on GitHub"
              className="flex-1 group flex items-center gap-4 p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-text-muted)] transition-all duration-250"
            >
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-[var(--color-text-muted)] text-xs"
                style={{ background: "var(--color-surface-muted)" }}
                aria-hidden="true"
              >
                GH
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-text)]">GitHub</p>
                <p className="text-xs text-[var(--color-text-muted)] font-mono">/Marzia-22</p>
              </div>
              <span className="ml-auto text-[var(--color-text-subtle)] group-hover:text-[var(--color-text-muted)] transition-colors text-sm" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          {/* Email note */}
          {profile.email ? (
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-accent transition-colors font-mono"
            >
              {profile.email}
            </a>
          ) : (
            <p className="text-xs font-mono text-[var(--color-text-subtle)] opacity-60">
              {/* Email placeholder — add your address to data/content.ts */}
              Email available via LinkedIn DM
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
