import { ImageResponse } from "next/og";

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
          backgroundColor: "#60212E",
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
              // Satori needs an explicit direction. Without `to bottom` the
              // whole image failed to render and the route served 0 bytes.
              "linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
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
            background: "rgba(105,172,194,0.18)",
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
            <rect width="44" height="44" rx="4" fill="#D8D1BD" />
            <rect x="10" y="10" width="5" height="24" fill="#60212E" />
            <path
              d="M20 10H36V16H26L36 26V34H20V28H30L20 18V10Z"
              fill="#60212E"
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
          <span style={{ color: "#69ACC2", marginLeft: 16 }}>
            Marketing
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#D8D1BD",
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
            border: "1px solid rgba(216,209,189,0.4)",
            borderRadius: 100,
            padding: "10px 28px",
            fontSize: 18,
            color: "#D8D1BD",
          }}
        >
          luisserranomkt.com
        </div>
      </div>
    ),
    { ...size }
  );
}
