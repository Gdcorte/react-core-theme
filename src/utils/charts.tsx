import { chartHues, HslColor } from "../interfaces";
import { hslToHex } from "./conversion";

export function generateChartsColor<T>(
  hue: number,
  saturation: number,
  lightness: number,
  colorNames: readonly string[] = chartHues
): T {
  const startingColor: HslColor = {
    hue,
    saturation,
    lightness,
    alpha: 255,
  };

  const baseDegrees = 360 / colorNames.length;

  return colorNames.reduce((acc, name, index) => {
    const rotatedColor = {
      ...startingColor,
      hue: startingColor.hue + index * baseDegrees,
    };

    return {
      ...acc,
      [name]: hslToHex(rotatedColor),
    };
  }, {} as T);
}
