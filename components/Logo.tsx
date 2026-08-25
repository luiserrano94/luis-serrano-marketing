interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Editorial wordmark: sand serif "LS" monogram in a hairline rule,
 * name set in spaced small caps. No filled chip — reads as a masthead.
 */
export default function Logo({ size = "md", className = "" }: LogoProps) {
  const scales = { sm: 0.72, md: 1, lg: 1.3 };
  const scale = scales[size];
  const w = Math.round(196 * scale);
  const h = Math.round(46 * scale);

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 196 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Luis Serrano Marketing Services"
    >
      {/* Monogram in a hairline square */}
      <rect
        x="0.6"
        y="0.6"
        width="42.8"
        height="42.8"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <text
        x="22"
        y="30.5"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="400"
        fontSize="21"
        letterSpacing="0.5"
      >
        LS
      </text>

      {/* Sky rule as the accent */}
      <rect x="56" y="9" width="1" height="26" fill="#69ACC2" />

      {/* Name — serif, editorial */}
      <text
        x="68"
        y="21"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="400"
        fontSize="15"
        letterSpacing="0.8"
      >
        Luis Serrano
      </text>

      {/* Descriptor — tracked small caps */}
      <text
        x="68.5"
        y="35"
        fill="currentColor"
        fontFamily="system-ui, sans-serif"
        fontWeight="500"
        fontSize="6.5"
        letterSpacing="2.6"
      >
        MARKETING SERVICES
      </text>
    </svg>
  );
}
