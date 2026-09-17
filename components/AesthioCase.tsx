"use client";

import { useScrollReveal } from "@/lib/hooks";
import { projects } from "@/data/content";

/** Elegant CSS-drawn UI placeholder — clearly labeled, replaceable. */
function InterfacePlaceholder() {
  return (
    <div className="ui-placeholder w-full relative" style={{ aspectRatio: "16 / 10" }}>
      {/* Top accent bar */}
      <div className="ui-placeholder-bar" />

      {/* Mock navigation */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
        <div className="w-16 h-1.5 rounded bg-white/10" />
        <div className="flex-1" />
        <div className="w-4 h-4 rounded-full bg-white/10" />
        <div className="w-4 h-4 rounded-full bg-white/10" />
        <div className="w-16 h-6 rounded-full bg-[var(--color-accent)]/20" />
      </div>

      {/* Mock masonry grid */}
      <div className="p-4 grid grid-cols-3 gap-2" style={{ height: "calc(100% - 52px)" }}>
        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          <div className="rounded-lg flex-1 bg-white/[0.05]" style={{ minHeight: "40px" }} />
          <div className="rounded-lg bg-white/[0.03]" style={{ minHeight: "30px" }} />
          <div className="rounded-lg border border-white/5" style={{ minHeight: "35px" }} />
        </div>
        {/* Column 2 — offset */}
        <div className="flex flex-col gap-2" style={{ marginTop: "16px" }}>
          <div className="rounded-lg bg-white/[0.06]" style={{ minHeight: "30px" }} />
          <div className="rounded-lg bg-white/[0.05]" style={{ minHeight: "45px" }} />
          <div className="rounded-lg bg-white/[0.03]" style={{ minHeight: "25px" }} />
        </div>
        {/* Column 3 */}
        <div className="flex flex-col gap-2">
          <div className="rounded-lg bg-white/[0.04]" style={{ minHeight: "35px" }} />
          <div className="rounded-lg bg-white/[0.05]" style={{ minHeight: "30px" }} />
          <div className="rounded-lg border border-white/5" style={{ minHeight: "45px" }} />
        </div>
      </div>

      {/* Placeholder label overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <p className="font-mono text-[10px] tracking-widest text-[var(--color-ink-muted)] uppercase">
            Interface Preview
          </p>
          <p className="font-mono text-[9px] text-[var(--color-ink-muted)] opacity-60 mt-1">
            Screenshots to be added
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AesthioCase() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.08);
  const { ref: previewRef, isVisible: previewVisible } = useScrollReveal(0.06);

  const p = projects.aesthio;

  return (
    <article
      id="aesthio"
      className="aesthio-section"
      aria-label="Aesthio — Featured Project Case Study"
    >
      {/* ── Header ── */}
      <div
        ref={headerRef}
        className={`max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-10 reveal ${headerVisible ? "visible" : ""}`}
      >
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="chip chip-ink">Featured Project</span>
          <span className="chip chip-ink flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            {p.status}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-20 items-start">
          {/* Title + positioning */}
          <div>
            <h3
              className="font-display font-bold text-[var(--color-ink-text)]"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                lineHeight: "0.95",
                letterSpacing: "-0.03em",
              }}
            >
              Aesthio
            </h3>
            <p
              className="font-display italic text-[var(--color-ink-muted)] mt-4"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
            >
              {p.tagline}
            </p>
          </div>

          {/* Problem statement */}
          <div className="lg:pt-3">
            <p className="text-[10px] font-mono tracking-widest text-[var(--color-ink-muted)] uppercase mb-3">
              The Idea
            </p>
            <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
              {p.problem}
            </p>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/5" />

      {/* ── Content: Description + Features ── */}
      <div
        ref={contentRef}
        className={`max-w-6xl mx-auto px-5 sm:px-8 py-12 reveal ${contentVisible ? "visible" : ""}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — what it does + AI callout */}
          <div>
            <p className="text-[10px] font-mono tracking-widest text-[var(--color-ink-muted)] uppercase mb-4">
              What it does
            </p>
            <p className="text-[var(--color-ink-text)] leading-relaxed mb-8">
              {p.description}
            </p>

            {/* AI Functionality Callout */}
            <div
              className="rounded-xl p-5 border"
              style={{
                background: "rgba(156, 74, 53, 0.08)",
                borderColor: "rgba(156, 74, 53, 0.2)",
              }}
            >
              <p className="text-[10px] font-mono tracking-widest text-[var(--color-accent)] uppercase mb-4">
                AI Functionality
              </p>
              <ul className="space-y-2.5">
                {p.aiFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--color-ink-muted)]">
                    <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-[var(--color-accent)] opacity-70" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — feature grid */}
          <div>
            <p className="text-[10px] font-mono tracking-widest text-[var(--color-ink-muted)] uppercase mb-4">
              Key Features
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {p.features.map((f) => (
                <div
                  key={f.label}
                  className="rounded-lg p-3.5 border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-200"
                >
                  <p className="text-xs font-medium text-[var(--color-ink-text)] mb-0.5">
                    {f.label}
                  </p>
                  <p className="text-xs text-[var(--color-ink-muted)]">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Interface Preview ── */}
      <div
        ref={previewRef}
        className={`max-w-6xl mx-auto px-5 sm:px-8 pb-12 reveal ${previewVisible ? "visible" : ""}`}
      >
        <p className="text-[10px] font-mono tracking-widest text-[var(--color-ink-muted)] uppercase mb-4">
          Interface Preview
        </p>
        <InterfacePlaceholder />
      </div>

      {/* ── Tech stack + Links ── */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Stack */}
          <div>
            <p className="text-[10px] font-mono tracking-widest text-[var(--color-ink-muted)] uppercase mb-3">
              Built with
            </p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((tech) => (
                <span key={tech} className="chip chip-ink">{tech}</span>
              ))}
              {p.deployment.map((d) => (
                <span key={d} className="chip chip-ink opacity-60">{d}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 shrink-0">
            {p.github ? (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-sm text-[var(--color-ink-text)] hover:bg-white/5 transition-colors"
              >
                GitHub ↗
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/5 text-sm text-[var(--color-ink-muted)] opacity-50 cursor-not-allowed"
                title="Repository link to be added"
              >
                GitHub
              </span>
            )}
            {p.live ? (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                Live Demo ↗
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-sm text-[var(--color-ink-muted)] opacity-50 cursor-not-allowed"
                title="Live link to be added"
              >
                Live Demo
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
