import { brandTokens } from "@/lib/brand-tokens";

type LettermarkIconProps = {
  borderRadius: number;
  fontSize: number;
};

export function LettermarkIcon({ borderRadius, fontSize }: LettermarkIconProps) {
  return (
    <div
      style={{
        background: brandTokens.gradient,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius,
      }}
    >
      <div
        style={{
          fontSize,
          fontWeight: 700,
          color: brandTokens.foreground,
          fontFamily: brandTokens.fontSerif,
          lineHeight: 1,
          // Optical centering: serif "A" sits slightly high without a nudge
          marginTop: fontSize * 0.06,
        }}
      >
        A
      </div>
    </div>
  );
}
