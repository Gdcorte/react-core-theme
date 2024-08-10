import { HslColor, RgbColor } from "../../interfaces";
import { hexToRgb, rgbToHex, rgbToHsl } from "./rgb";

function hueToPseudoRgb(hue: number, C: number, X: number): RgbColor {
  if (hue < 60) {
    return {
      red: C,
      green: X,
      blue: 0,
      alpha: 255,
    };
  } else if (hue < 120) {
    return {
      red: X,
      green: C,
      blue: 0,
      alpha: 255,
    };
  } else if (hue < 180) {
    return {
      red: 0,
      green: C,
      blue: X,
      alpha: 255,
    };
  } else if (hue < 240) {
    return {
      red: 0,
      green: X,
      blue: C,
      alpha: 255,
    };
  } else if (hue < 300) {
    return {
      red: X,
      green: 0,
      blue: C,
      alpha: 255,
    };
  } else {
    return {
      red: C,
      green: 0,
      blue: X,
      alpha: 255,
    };
  }
}

function normalizePseudoRgb(value: number, m: number) {
  return Math.round((value + m) * 255);
}

export function hslToRgb(hsl: HslColor): RgbColor {
  const C = (1 - Math.abs(2 * hsl.lightness - 1)) * hsl.saturation;

  const X = C * (1 - Math.abs(((hsl.hue / 60) % 2) - 1));

  const m = hsl.lightness - C / 2;

  const pseudoRgb = hueToPseudoRgb(hsl.hue, C, X);

  return {
    red: normalizePseudoRgb(pseudoRgb.red, m),
    green: normalizePseudoRgb(pseudoRgb.green, m),
    blue: normalizePseudoRgb(pseudoRgb.blue, m),
    alpha: pseudoRgb.alpha,
  };
}

export function hexToHsl(hex: string): HslColor {
  const rgb = hexToRgb(hex);

  return rgbToHsl(rgb);
}

export function hslToHex(hsl: HslColor): string {
  const rgb = hslToRgb(hsl);

  return rgbToHex(rgb);
}
