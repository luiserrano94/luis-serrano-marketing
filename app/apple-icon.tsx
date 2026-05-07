import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 28,
          background: "#1A1A1A",
          display: "flex",
        }}
      >
        {/* Isotipo LS — mismo viewBox que icon.tsx, escalado a 180×180 */}
        <svg
          width={180}
          height={180}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="10" width="5" height="24" fill="#C5F82A" />
          <path
            d="M20 10H36V16H26L36 26V34H20V28H30L20 18V10Z"
            fill="#C5F82A"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
