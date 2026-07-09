import { ImageResponse } from "next/og";
import { LettermarkIcon } from "@/lib/icon-mark";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <LettermarkIcon borderRadius={6} fontSize={22} />,
    { ...size },
  );
}
