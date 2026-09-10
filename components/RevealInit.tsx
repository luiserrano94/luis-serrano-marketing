"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Reveals `.reveal` elements as they enter the viewport. `js-reveal` on <html>
 *  gates the hidden state so no-JS renders visible.
 *
 *  Re-runs on every route change: the layout (and this component) persist across
 *  client-side navigations, so without re-observing, a newly navigated page's
 *  `.reveal` elements would never be revealed and stay invisible.
 *
 *  Fails open: if IntersectionObserver is unavailable, reduced motion is on, or
 *  the observer never fires, a timeout reveals everything — content is never
 *  left permanently hidden. */
export default function RevealInit() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    const revealAll = () => els.forEach((el) => el.classList.add("in"));

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    // Safety net: never leave content hidden if the observer misfires.
    const safety = window.setTimeout(revealAll, 1800);
    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [pathname]);
  return null;
}
