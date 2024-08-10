import { isString } from "../../helpers";
import { HslColor, RgbColor, rgbKeys } from "../../interfaces";
import { decimalToHex } from "./decimal";
import { hexToDecimal } from "./hex";

export function hexToRgb(hex: string): RgbColor {
  const decimalHex = hexToDecimal(hex);

  return {
    red: decimalHex[0],
    green: decimalHex[1],
    blue: decimalHex[2],
    alpha: decimalHex[3] ?? 255,
  };
}

export function rgbToHex(color: RgbColor): string {
  let decimal: number[] = [color.red, color.green, color.blue];

  return decimalToHex(decimal);
}

function determinePseudoHue(color: RgbColor, max: number, chroma: number) {
  if (chroma === 0) {
    return 0;
  }

  if (max === color.red) {
    const operation = (color.green - color.blue) / chroma;
    return operation % 6;
  }

  if (max === color.green) {
    const operation = (color.blue - color.red) / chroma + 2;
    return operation;
  }

  if (max === color.blue) {
    const operation = (color.red - color.green) / chroma + 4;
    return operation;
  }

  // Should never reach this point here
  throw new Error("Could not determine hue");
}

function determineHue(color: RgbColor, max: number, chroma: number) {
  const pseudoHue = 60 * determinePseudoHue(color, max, chroma);

  if (pseudoHue < 0) {
    return 360 + pseudoHue;
  }

  return pseudoHue;
}

export function rgbToHsl(rgb: RgbColor | string): HslColor {
  // Source: https://en.wikipedia.org/wiki/HSL_and_HSV
  if (isString(rgb)) {
    rgb = hexToRgb(rgb);
  }

  const normRgb = { ...rgb };
  const rgbVector = rgbKeys.reduce<number[]>((acc, value) => {
    if (value === "alpha") {
      return acc;
    }

    const normValue = rgb[value] / 255;
    normRgb[value] = normValue;

    return [...acc, normValue];
  }, []);

  const M = Math.max(...rgbVector); // Highest color
  const m = Math.min(...rgbVector); // Lowest color
  const C = M - m; // Chroma (or color range)

  const hue = determineHue(normRgb, M, C);
  const lightness = (M + m) / 2;
  const saturation =
    lightness === 0 || lightness === 1
      ? 0
      : C / (1 - Math.abs(2 * lightness - 1));

  return {
    hue,
    saturation,
    lightness,
    alpha: rgb.alpha,
  };
}
