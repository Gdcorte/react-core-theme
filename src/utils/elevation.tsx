import { ElevationTheme } from "../interfaces";
import { hexToHsl, hslToHex } from "./conversion";

export function generateElevationTheme(background: string): ElevationTheme {
  const hsl = hexToHsl(background);
  const delta = 0.1;

  let lower;
  let medium;
  let higher;
  if (hsl.lightness > 0.7) {
    console.warn("Using light background for elevation", hsl, delta);
    lower = hslToHex({
      ...hsl,
      lightness: hsl.lightness + delta,
    });

    medium = hslToHex({
      ...hsl,
      lightness: hsl.lightness - delta,
    });

    higher = hslToHex({
      ...hsl,
      lightness: hsl.lightness - 2 * delta,
    });
  } else {
    lower = hslToHex({
      ...hsl,
      lightness: hsl.lightness - delta,
    });

    medium = hslToHex({
      ...hsl,
      lightness: hsl.lightness + delta,
    });

    higher = hslToHex({
      ...hsl,
      lightness: hsl.lightness + 2 * delta,
    });
  }

  return {
    lower,
    neutral: background,
    medium,
    higher,
  };
}
