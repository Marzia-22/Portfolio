import { profile } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--color-border)]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        {/* Left — name + year */}
        <div>
          <p className="font-mono text-xs text-[var(--color-text-subtle)]">
            © {year} {profile.name}
          </p>
          <p className="font-mono text-[10px] text-[var(--color-text-subtle)] opacity-60 mt-0.5">
            {profile.degree} · {profile.university}
          </p>
        </div>

        {/* Right — social links */}
        <div className="flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[var(--color-text-subtle)] hover:text-accent transition-colors"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <span className="w-px h-3 bg-[var(--color-border)]" aria-hidden="true" />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[var(--color-text-subtle)] hover:text-accent transition-colors"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <span className="w-px h-3 bg-[var(--color-border)]" aria-hidden="true" />
          <a
            href="#top"
            className="text-xs font-mono text-[var(--color-text-subtle)] hover:text-[var(--color-text-muted)] transition-colors"
            aria-label="Back to top"
          >
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  );
}
