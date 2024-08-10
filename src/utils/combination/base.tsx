import { ColorElement } from "../../interfaces";
import { contrast, shade, tint, tone } from "../blending";

export function generateColorElement(base: string): ColorElement {
  return {
    color: base,
    shade: shade(base),
    tint: tint(base),
    tone: tone(base),
    contrast: contrast(base),
  };
}
