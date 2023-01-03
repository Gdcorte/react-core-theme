import { darkColors } from "../dark";
import { InputColors } from "../interfaces";
import { BaseInputAlerts, InputAlerts } from "../interfaces/alerts";
import {
  BundledColors,
  BundledPresets,
  BundledTheme,
  BundledType,
} from "../interfaces/bundle";
import { ThemeTypes, ThemeTypesBase } from "../interfaces/types";
import { lightColors } from "../light";
import {
  buildAlertPresets,
  buildBackgroundPresets,
  buildColorPresets,
} from "./presets";

const baseBackgrounds: ThemeTypesBase = {
  light: "#fefefe",
  dark: "#2a2a2a",
};

const baseFonts = baseBackgrounds;

const baseAlerts: BaseInputAlerts = {
  info: "#70bbfd",
  success: "#4ce1b6",
  warning: "#f6da6e",
  danger: "#ff4861",
};

export function bundleThemeType(
  fonts: ThemeTypes,
  background: string,
  alerts: InputAlerts,
  colors: InputColors[],
  typeName: string
): BundledType {
  let presets: BundledPresets = {};
  let colorBundle: BundledColors = {};
  colors.forEach((color) => {
    colorBundle[color.name] = buildColorPresets(color);
    presets[color.name] = color.primary;
  });

  return {
    fonts: Object.values(fonts),
    background: buildBackgroundPresets(background),
    alerts: buildAlertPresets(alerts),
    colors: colorBundle,
    presets,
    typeName,
  };
}

export function bundleBaseThemes(): BundledTheme {
  let themes = {
    light: bundleThemeType(
      baseFonts,
      baseBackgrounds.light,
      baseAlerts,
      lightColors,
      "Light"
    ),
    dark: bundleThemeType(
      baseFonts,
      baseBackgrounds.dark,
      baseAlerts,
      darkColors,
      "Dark"
    ),
  };

  return themes;
}
