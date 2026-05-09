import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
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
          background: "linear-gradient(135deg, #050505 0%, #0d0d0d 50%, #120000 100%)",
          color: "#e2e8f0",
          fontFamily: "Space Grotesk",
          padding: "80px"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "radial-gradient(circle at 15% 20%, rgba(255, 45, 45, 0.3), transparent 45%), radial-gradient(circle at 85% 25%, rgba(163, 0, 0, 0.3), transparent 50%)",
            opacity: 0.95
          }}
        />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h1 style={{ fontSize: 58, fontWeight: 600, marginBottom: 16 }}>{siteConfig.name}</h1>
          <p style={{ fontSize: 26, color: "#b6c1d6" }}>{siteConfig.subtitle}</p>
        </div>
      </div>
    ),
    size
  );
}
