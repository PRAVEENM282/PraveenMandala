import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(120deg, #050505 0%, #0d0d0d 50%, #120000 100%)",
          color: "#e2e8f0",
          padding: "80px",
          position: "relative",
          fontFamily: "Space Grotesk"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "radial-gradient(circle at 20% 20%, rgba(255, 45, 45, 0.35), transparent 40%), radial-gradient(circle at 80% 30%, rgba(163, 0, 0, 0.35), transparent 45%)",
            opacity: 0.9
          }}
        />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <p style={{ fontSize: 22, letterSpacing: "0.4em", textTransform: "uppercase" }}>
            Portfolio
          </p>
          <h1 style={{ fontSize: 64, fontWeight: 600, margin: "20px 0" }}>{siteConfig.name}</h1>
          <p style={{ fontSize: 28, color: "#9ca3af" }}>{siteConfig.subtitle}</p>
        </div>
      </div>
    ),
    size
  );
}
