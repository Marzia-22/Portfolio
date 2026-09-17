"use client";

import { useScrollReveal } from "@/lib/hooks";
import { learning } from "@/data/content";

export default function CurrentlyLearning() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="learning"
      aria-labelledby="learning-heading"
      className="border-t border-[var(--color-border)]"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-6xl mx-auto px-5 sm:px-8 py-section-sm reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-20 items-start">

          {/* Label */}
          <div>
            <p className="text-[10px] font-mono tracking-widest text-[var(--color-text-subtle)] uppercase mb-4 lg:mb-0">
              Currently Exploring
            </p>
          </div>

          {/* Content */}
          <div>
            <h2
              id="learning-heading"
              className="font-display font-semibold text-[var(--color-text)] mb-2"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
            >
              What I&apos;m learning
            </h2>
            <p className="text-sm text-[var(--color-text-muted)] mb-7">
              Active areas of growth — not expertise, just genuine interest and effort.
            </p>

            <div className="flex flex-wrap gap-3">
              {learning.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-text-subtle)] transition-colors duration-200 group"
                >
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-accent transition-colors">
                      {item.label}
                    </p>
                    <p className="text-[10px] text-[var(--color-text-subtle)] font-mono">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
