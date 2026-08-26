"use client";

import Image from "next/image";

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  watermarkText?: string;
  /** Set on the one portrait that is above the fold. */
  priority?: boolean;
}

export default function ProtectedImage({
  src,
  alt,
  className = "",
  watermarkText = "IS",
  priority = false,
}: ProtectedImageProps) {
  return (
    <div
      className={`relative overflow-hidden select-none ${className}`}
      onContextMenu={(e) => e.preventDefault()}
      draggable={false}
    >
      {/* Was a CSS background-image, which Google Images cannot index and
          next/image cannot optimise. The src was already readable in the
          inline style, so nothing is less "protected" as a real <img>. */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-top select-none pointer-events-none"
        draggable={false}
      />

      {/* Transparent interaction-blocking overlay */}
      <div
        className="absolute inset-0 z-10"
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* Subtle watermark */}
      <div
        className="absolute bottom-4 right-4 z-20 pointer-events-none font-display"
        style={{
          fontSize: "28px",
          color: "rgba(255,255,255,0.15)",
          letterSpacing: "0.1em",
          lineHeight: 1,
        }}
      >
        {watermarkText}
      </div>
    </div>
  );
}
