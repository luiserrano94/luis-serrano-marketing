"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export interface Slide {
  src: string;
  alt: string;
  tone: "light" | "dark";
}

interface Props {
  images: Slide[];
  active: number;
  onChange: (i: number) => void;
  /** Held tone from the parent — crosses at the midpoint of the fade. */
  tone: "light" | "dark";
  intervalMs?: number;
}

/**
 * Cross-fading full-bleed background slideshow. The parent owns `active`
 * so it can restyle the copy for light vs dark frames.
 */
export default function HeroSlideshow({
  images,
  active,
  onChange,
  tone,
  intervalMs = 4000,
}: Props) {
  // Only the first frame ships with the page. The rest mount as they are
  // needed (plus the one after the current), so the hero costs one image on
  // load instead of four.
  const [mounted, setMounted] = useState<number[]>([0]);
  useEffect(() => {
    const next = (active + 1) % images.length;
    setMounted((m) =>
      m.includes(active) && m.includes(next)
        ? m
        : Array.from(new Set([...m, active, next]))
    );
  }, [active, images.length]);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(
      () => onChange((active + 1) % images.length),
      intervalMs
    );
    return () => clearInterval(id);
  }, [active, images.length, intervalMs, onChange]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Decorative: the hero headline carries the meaning, so an empty
              alt keeps screen readers from announcing a photo that adds
              nothing. Deliberate, not an oversight. */}
          {mounted.includes(i) && (
            <Image
              src={img.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          )}
        </div>
      ))}

      {/* Scrim flips with the frame so the copy always has something to sit on */}
      <div
        className="absolute inset-0 transition-[background] duration-[1400ms]"
        style={{
          background:
            tone === "light"
              ? "linear-gradient(to top, rgba(250,247,242,0.90) 0%, rgba(250,247,242,0.70) 45%, rgba(250,247,242,0.22) 100%)"
              : "linear-gradient(to top, rgba(20,12,10,0.78) 0%, rgba(20,12,10,0.42) 42%, rgba(20,12,10,0.12) 100%)",
        }}
      />
    </div>
  );
}
