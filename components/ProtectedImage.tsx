"use client";

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  watermarkText?: string;
}

export default function ProtectedImage({
  src,
  alt,
  className = "",
  watermarkText = "IS",
}: ProtectedImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden select-none ${className}`}
      onContextMenu={(e) => e.preventDefault()}
      draggable={false}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      {/* Transparent interaction-blocking overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "transparent" }}
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
