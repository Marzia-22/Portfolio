"use client";

import { useEffect, useRef, useState, RefObject } from "react";

/**
 * Triggers scroll-based reveal by adding the "visible" class once the
 * element enters the viewport. Disconnects after first trigger (fire-once).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.12
): { ref: RefObject<T>; isVisible: boolean } {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

/** Simple hook: true once component mounts (for SSR safety). */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
