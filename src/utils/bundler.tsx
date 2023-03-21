import { darkColors } from "../dark";
import { ColorSystem, FontSystem } from "../interfaces";
import { AlertColors, BaseAlertColors } from "../interfaces/alerts";
import {
  BaseBundledTheme,
  BundledColors,
  BundledPresets,
  BundledTheme,
  BundledType,
  MultiThemeConfiguration,
} from "../interfaces/bundle";
import { ThemeTypesBase } from "../interfaces/types";
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

const baseAlerts: BaseAlertColors = {
  info: "#70bbfd",
  success: "#4ce1b6",
  warning: "#f6da6e",
  danger: "#ff4861",
};

export function bundleThemeType(
  fonts: FontSystem,
  background: string,
  alerts: AlertColors,
  colors: ColorSystem[],
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
    fontSystem: fonts,
    background: buildBackgroundPresets(background),
    alerts: buildAlertPresets(alerts),
    colors: colorBundle,
    presets,
    typeName,
  };
}

export function bundleBaseThemes(): BaseBundledTheme {
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

export function bundleCustomThemes(
  config: MultiThemeConfiguration
): BundledTheme {
  let presets = Object.keys(config);
  let themes: BundledTheme = {};

  presets.forEach((themePreset) => {
    let currentThemeConfig = config[themePreset];
    themes[themePreset] = bundleThemeType(
      currentThemeConfig.fonts,
      currentThemeConfig.background,
      currentThemeConfig.alerts,
      currentThemeConfig.colors,
      themePreset
    );
  });

  return themes;
}
