const slateDark = "#0f172a";
const tealDark = "#134e4a";

export const brandTokens = {
  slateDark,
  tealDark,
  gradient: `linear-gradient(135deg, ${slateDark} 0%, ${tealDark} 100%)`,
  accent: "#0d9488", // UI buttons and links (globals.css --accent)
  highlight: "#5eead4", // bright teal on dark marketing surfaces (OG, icons)
  foreground: "#f8fafc",
  muted: "#cbd5e1",
  fontSans: "system-ui, sans-serif",
  fontSerif: "Georgia, serif",
} as const;
