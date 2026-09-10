"use client";
import { useCallback, useEffect, useState } from "react";

/** Immersive image viewer. Any `<img data-zoom data-i="N">` on the page opens
 *  the overlay at index N; arrows/keyboard cycle through `images`. Mounted once
 *  per project page — no per-image wiring. */
export default function Lightbox({ images, closeLabel }: { images: string[]; closeLabel: string }) {
  const [i, setI] = useState<number | null>(null);
  const open = i !== null;
  const close = useCallback(() => setI(null), []);
  const go = useCallback(
    (d: number) => setI((v) => (v === null ? v : (v + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const img = (e.target as HTMLElement).closest("img[data-zoom]");
      if (!img) return;
      const idx = Number(img.getAttribute("data-i"));
      if (!Number.isNaN(idx)) setI(idx);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  if (!open) return null;
  return (
    <div className="zoom" role="dialog" aria-modal="true" onClick={close}>
      <button className="zoom-x" onClick={close} aria-label={closeLabel}>
        {closeLabel}
      </button>
      <button
        className="zoom-prev"
        onClick={(e) => { e.stopPropagation(); go(-1); }}
        aria-label="Previous"
      >
        ‹
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="zoom-img" src={images[i as number]} alt="" onClick={(e) => e.stopPropagation()} />
      <button
        className="zoom-next"
        onClick={(e) => { e.stopPropagation(); go(1); }}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
