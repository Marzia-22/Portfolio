import AesthioCase from "./AesthioCase";
import GenieProject from "./GenieProject";
import OtherProjects from "./OtherProjects";

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-heading">

      {/* ── Section heading ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-section pb-10">
        <div className="flex items-end justify-between gap-4 border-b border-[var(--color-border)] pb-8">
          <div>
            <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-subtle)] uppercase mb-3">
              Selected Work
            </p>
            <h2
              id="work-heading"
              className="font-display font-semibold text-[var(--color-text)]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}
            >
              Things I&apos;ve built
            </h2>
          </div>
          <p className="hidden sm:block text-sm text-[var(--color-text-muted)] max-w-xs text-right">
            Full-stack applications, hackathon projects, and open source contributions.
          </p>
        </div>
      </div>

      {/* ── Aesthio — flagship dark section ── */}
      <AesthioCase />

      {/* ── GENIE + other projects ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-section space-y-8">

        <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-subtle)] uppercase">
          More projects
        </p>

        {/* GENIE — full width card */}
        <GenieProject />

        {/* Smaller projects — 2-col grid */}
        <OtherProjects />
      </div>
    </section>
  );
}
