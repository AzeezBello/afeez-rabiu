import { ImageResponse } from "next/og";

import { SeoImageTemplate } from "@/lib/og-image";

export const alt = "Afeez Olawale Rabiu digital marketing portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<SeoImageTemplate />, size);
}
