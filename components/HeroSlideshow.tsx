"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  images: { src: string; alt: string }[];
  intervalMs?: number;
}

/**
 * Cross-fading full-bleed background slideshow.
 * First slide is eager + priority so LCP isn't waiting on JS.
 */
export default function HeroSlideshow({ images, intervalMs = 6000 }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const id = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      intervalMs
    );
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Burgundy scrim keeps the headline readable over any frame */}
      <div className="absolute inset-0 scrim" />
    </div>
  );
}
