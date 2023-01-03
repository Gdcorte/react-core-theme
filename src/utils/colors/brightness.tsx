import { RgbColor } from "../../interfaces";
import { hexToRgbColor } from "./raw";

export function brightnessIndex(color: RgbColor | string): number {
  if (typeof color === "string") {
    const rgbColor = hexToRgbColor(color);
    return brightnessFormula(rgbColor);
  }

  return brightnessFormula(color);
}

function brightnessFormula(color: RgbColor): number {
  // Source: https://www.w3.org/TR/AERT/#color-contrast
  return (color.red * 0.299 + color.green * 0.587 + color.blue * 0.114) / 255;
}
