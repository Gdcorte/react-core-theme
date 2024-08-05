import { HslColor, RgbColor, rgbKeys } from "../../interfaces/models";
import { decimalToHex } from "./decimal";
import { hexToRgb } from "./hex";

export function rgbToHex(color: RgbColor): string {
  let decimal: number[] = [color.red, color.green, color.blue, color.alpha];

  return decimalToHex(decimal);
}

function isString(option: unknown): option is string {
  return typeof option === "string";
}

function determineHue(color: RgbColor, max: number, chroma: number) {
  if (chroma === 0) {
    return 0;
  }

  if (max === color.red) {
    const operation = (color.green - color.blue) / chroma;
    return 60 * (operation % 6);
  }

  if (max === color.green) {
    const operation = (color.blue - color.red) / chroma + 2;
    console.warn(color, max, chroma);
    return 60 * operation;
  }

  if (max === color.blue) {
    const operation = (color.red - color.green) / chroma + 4;
    return 60 * operation;
  }

  // Should never reach this point here
  return 980;
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
