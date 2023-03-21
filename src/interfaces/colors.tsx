import { ColorPresets } from "./presets";

export const basicColorSystem = ["primary", "secondary"] as const;
export type BasicColorSystemType = typeof basicColorSystem[number];

export type RgbColor = {
  [key: string]: number;
  red: number;
  green: number;
  blue: number;
};

export type BaseColorSystem = {
  [key in BasicColorSystemType]: string;
};

export type ColorSystem = {
  [key: string]: string;
  name: string;
} & BaseColorSystem;

export type BaseThemeColors = {
  [key in BasicColorSystemType]: ColorPresets;
};

export type ThemeColors = {
  [key: string]: ColorPresets;
} & BaseThemeColors;

export function isBasicColorSystem(
  option: string
): option is BasicColorSystemType {
  return basicColorSystem.includes(option as BasicColorSystemType);
}
