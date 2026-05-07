import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 5,
          background: "#1A1A1A",
          display: "flex",
        }}
      >
        {/* Isotipo LS — mismos paths que Logo.tsx, viewBox 0 0 44 44 escalado a 32×32 */}
        <svg
          width={32}
          height={32}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Letra L (barra vertical) */}
          <rect x="10" y="10" width="5" height="24" fill="#C5F82A" />
          {/* Letra S */}
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
