import { profile } from "@/data/content";
import TechAbstract from "./TechAbstract";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle top-right gradient accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">

          {/* ── Left column ── */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <p className="hero-line-1 font-mono text-xs tracking-widest text-[var(--color-text-subtle)] uppercase mb-5 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-block w-2 h-2 rounded-full bg-accent opacity-80"
              />
              {profile.degree} · {profile.university}
            </p>

            {/* Main headline — editorial, large, confident */}
            <h1 className="font-display font-semibold text-[var(--color-text)] mb-6">
              <span className="hero-line-2 block" style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.6rem)", lineHeight: "1.05", letterSpacing: "-0.025em" }}>
                Engineering ideas
              </span>
              <span className="hero-line-3 block" style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.6rem)", lineHeight: "1.05", letterSpacing: "-0.025em" }}>
                into working{" "}
                <em className="font-display italic font-semibold not-italic" style={{ color: "var(--color-accent)" }}>
                  software.
                </em>
              </span>
            </h1>

            {/* Bio */}
            <p className="hero-line-4 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed max-w-[540px] mb-9">
              Third-year CS student at KLH University. I build full-stack
              applications, work through hard problems, and care about how
              software feels — not just how it works.
            </p>

            {/* CTAs */}
            <div className="hero-line-4 flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-text)] text-[var(--color-bg)] text-sm font-medium hover:bg-[var(--color-accent)] transition-colors duration-250"
              >
                View my work
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] text-sm font-medium hover:border-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-all duration-200"
              >
                Get in touch
              </a>
            </div>

            {/* Social links */}
            <div className="hero-line-4 flex items-center gap-5">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-xs font-mono tracking-wide text-[var(--color-text-muted)]"
                aria-label="Marzia Tasneem on LinkedIn"
              >
                LinkedIn ↗
              </a>
              <span aria-hidden="true" className="w-px h-3 bg-[var(--color-border)]" />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-xs font-mono tracking-wide text-[var(--color-text-muted)]"
                aria-label="Marzia Tasneem on GitHub"
              >
                GitHub ↗
              </a>
              <span aria-hidden="true" className="w-px h-3 bg-[var(--color-border)]" />
              <span className="text-xs font-mono text-[var(--color-text-subtle)]">
                {profile.location}
              </span>
            </div>
          </div>

          {/* ── Right column — Tech abstract ── */}
          <div
            className="hero-abstract hidden lg:block relative"
            aria-hidden="true"
          >
            {/* Soft container */}
            <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                 style={{ aspectRatio: "1 / 1" }}>
              <TechAbstract />
              {/* Bottom label */}
              <div className="absolute bottom-4 right-4">
                <span className="font-mono text-[9px] text-[var(--color-text-subtle)] tracking-widest uppercase">
                  systems · networks · code
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex items-center gap-2 mt-16 opacity-40" aria-hidden="true">
          <span className="text-[10px] font-mono tracking-widest text-[var(--color-text-muted)] uppercase">Scroll</span>
          <span className="text-[10px] text-[var(--color-text-muted)]">↓</span>
        </div>
      </div>
    </section>
  );
}
