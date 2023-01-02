import { ColorPresets } from "./presets";

export const baseColorSystem = ["primary", "secondary"] as const;
export type BaseColorSystem = typeof baseColorSystem[number];

export interface RgbColor {
  [key: string]: number;
  red: number;
  green: number;
  blue: number;
}

export type BaseInputColors = {
  [key in BaseColorSystem]: string;
};

export interface InputColors extends BaseInputColors {
  [key: string]: string;
  name: string;
}

export type BaseThemeColors = {
  [key in BaseColorSystem]: ColorPresets;
};

export interface ThemeColors extends BaseThemeColors {
  [key: string]: ColorPresets;
}

export function isColorType(option: string): option is BaseColorSystem {
  return baseColorSystem.includes(option as BaseColorSystem);
}
