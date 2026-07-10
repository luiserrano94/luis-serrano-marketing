import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Luis Serrano Marketing Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(197,248,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(197,248,42,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glow blob */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 400,
            borderRadius: "50%",
            background: "rgba(197,248,42,0.06)",
            filter: "blur(80px)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Isotipo */}
        <div style={{ display: "flex", marginBottom: 32 }}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="44" height="44" rx="4" fill="#1A1A1A" />
            <rect x="10" y="10" width="5" height="24" fill="#C5F82A" />
            <path
              d="M20 10H36V16H26L36 26V34H20V28H30L20 18V10Z"
              fill="#C5F82A"
            />
          </svg>
        </div>

        {/* Heading */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            textAlign: "center",
            maxWidth: 900,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          Luis Serrano{" "}
          <span style={{ color: "#C5F82A", marginLeft: 16 }}>
            Marketing
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#A0A0A0",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Websites · Digital Marketing · Branding
        </div>

        {/* Domain pill */}
        <div
          style={{
            marginTop: 40,
            border: "1px solid rgba(197,248,42,0.3)",
            borderRadius: 100,
            padding: "10px 28px",
            fontSize: 18,
            color: "#C5F82A",
          }}
        >
          luisserranomkt.com
        </div>
      </div>
    ),
    { ...size }
  );
}
