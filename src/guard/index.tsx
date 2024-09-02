import {
  colorVariants,
  ColorVariants,
  themeVariants,
  ThemeVariants,
} from "../interfaces";

export function isColorVariant(option: string): option is ColorVariants {
  return colorVariants.includes(option as ColorVariants);
}

export function isThemeVariant(option: string): option is ThemeVariants {
  return themeVariants.includes(option as ThemeVariants);
}
