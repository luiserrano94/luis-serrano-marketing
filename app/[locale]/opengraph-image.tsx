import { ImageResponse } from "next/og";

export const alt = "Luis Serrano · Creative Direction & Visual Art";
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
          justifyContent: "flex-end",
          backgroundColor: "#0E0B0A",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#A9997F" }}>CREATIVE DIRECTOR · VISUAL ARTIST</div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 18 }}>
          <div style={{ display: "flex", fontSize: 94, color: "#EFE7D9", lineHeight: 1.02 }}>Creative direction</div>
          <div style={{ display: "flex", fontSize: 94, color: "#EFE7D9", lineHeight: 1.02 }}>and visual art.</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#A9997F", marginTop: 28 }}>Luis Serrano</div>
      </div>
    ),
    { ...size }
  );
}
