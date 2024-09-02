import { ColorVariants, ThemeVariants } from "src/interfaces";
import { hslToHex } from "./conversion";

export const defaultColorHueMap: Record<ColorVariants, number> = {
  green: 120,
  pink: 300,
  blue: 240,
  yellow: 60,
  brown: 30,
};

export function getDefaultColorCode(name: ColorVariants, theme: ThemeVariants) {
  const saturation = 0.8;
  let baseLuminance;

  if (theme === "light") {
    baseLuminance = 0.3;
  } else {
    baseLuminance = 0.8;
  }

  return hslToHex({
    hue: defaultColorHueMap[name],
    saturation: saturation,
    lightness: baseLuminance,
    alpha: 255,
  });
}

export function getDefaultThemeBg(theme: ThemeVariants) {
  if (theme === "light") {
    return "#eaeaea";
  } else {
    return "#2a2a2a";
  }
}
