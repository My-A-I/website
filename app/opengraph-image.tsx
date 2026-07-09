import { ImageResponse } from "next/og";
import { brandTokens } from "@/lib/brand-tokens";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.tagline;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: brandTokens.gradient,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          color: brandTokens.foreground,
          fontFamily: brandTokens.fontSans,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: brandTokens.highlight,
            marginBottom: 24,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.companyName}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            lineHeight: 1.4,
            color: brandTokens.muted,
            maxWidth: 820,
          }}
        >
          {siteConfig.supportingLine}
        </div>
      </div>
    ),
    { ...size },
  );
}
