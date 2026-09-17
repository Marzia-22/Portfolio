"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`nav-base ${scrolled ? "nav-scrolled" : ""}`}
        role="banner"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
          {/* Monogram */}
          <a
            href="#top"
            aria-label="Marzia Tasneem — back to top"
            className="font-mono text-sm font-medium tracking-widest text-[var(--color-text)] hover:text-accent transition-colors duration-200"
          >
            MT
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-250" />
              </a>
            ))}
          </nav>

          {/* Resume CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* Resume button — update href when you have a PDF */}
            <a
              href="#"
              aria-label="Download resume (PDF coming soon)"
              onClick={(e) => e.preventDefault()}
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-accent hover:text-accent transition-all duration-200"
            >
              Resume
              <span aria-hidden="true" className="text-xs">↗</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-[var(--color-surface-muted)] transition-colors"
            >
              <span
                className={`block w-5 h-0.5 bg-[var(--color-text)] transition-transform duration-250 origin-center ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[var(--color-text)] transition-opacity duration-250 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[var(--color-text)] transition-transform duration-250 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 md:hidden flex flex-col bg-[var(--color-bg)] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-8 pt-20 pb-12 gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-display text-3xl font-semibold text-[var(--color-text)] hover:text-accent transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="px-8 pb-10 flex flex-col gap-4">
          <div className="flex gap-5">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-sm text-[var(--color-text-muted)] hover:text-accent transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-sm text-[var(--color-text-muted)] hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
          </div>
          <p className="text-xs text-[var(--color-text-subtle)] font-mono">
            {profile.location}
          </p>
        </div>
      </div>
    </>
  );
}
