interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const scales = { sm: 0.7, md: 1, lg: 1.3 };
  const scale = scales[size];
  const w = Math.round(180 * scale);
  const h = Math.round(48 * scale);

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 180 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Luis Serrano Marketing Services"
    >
      {/* Monogram "IS" box */}
      <rect x="0" y="0" width="44" height="44" rx="4" fill="#0C0A09" />

      {/* Letter I */}
      <rect x="10" y="10" width="5" height="24" fill="#84CC16" />

      {/* Letter S */}
      <path
        d="M20 10H36V16H26L36 26V34H20V28H30L20 18V10Z"
        fill="#84CC16"
      />

      {/* Vertical separator */}
      <rect x="52" y="6" width="1.5" height="32" fill="#E7E5E4" />

      {/* LUIS SERRANO text */}
      <text
        x="62"
        y="22"
        fill="#0C0A09"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        fontSize="13"
        letterSpacing="1.5"
      >
        LUIS SERRANO
      </text>

      {/* MARKETING SERVICES text */}
      <text
        x="62"
        y="36"
        fill="#57534E"
        fontFamily="system-ui, sans-serif"
        fontWeight="400"
        fontSize="7.5"
        letterSpacing="1.4"
      >
        MARKETING SERVICES
      </text>
    </svg>
  );
}
