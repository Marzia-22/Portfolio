"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const move = (event: PointerEvent) => {
      if (cursor.current) cursor.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };
    const enter = (event: Event) => {
      if ((event.currentTarget as HTMLElement).matches("a, .project-row")) cursor.current?.classList.add("is-hovering");
    };
    const leave = () => cursor.current?.classList.remove("is-hovering");
    const interactive = document.querySelectorAll("a, .project-row");

    document.body.classList.add("has-custom-cursor");
    window.addEventListener("pointermove", move, { passive: true });
    interactive.forEach((item) => { item.addEventListener("pointerenter", enter); item.addEventListener("pointerleave", leave); });
    return () => { document.body.classList.remove("has-custom-cursor"); window.removeEventListener("pointermove", move); interactive.forEach((item) => { item.removeEventListener("pointerenter", enter); item.removeEventListener("pointerleave", leave); }); };
  }, []);

  return <div ref={cursor} className="custom-cursor" aria-hidden="true" />;
}
