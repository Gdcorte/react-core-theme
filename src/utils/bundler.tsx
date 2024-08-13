import {
  AlertThemes,
  BaseTheme,
  chartHues,
  ChartTheme,
  ColorVariants,
  CreateThemeDefaultPresets,
  CreateThemeProps,
} from "../interfaces";
import { generateAlertTheme } from "./alerts";
import { contrast } from "./blending";
import { generateChartsColor } from "./charts";
import { colorComboPicker, generateColorElement } from "./combination";
import { hexToHsl, hslToHex } from "./conversion";
import { generateElevationTheme } from "./elevation";

export function createTheme<C, Ch, Al>({
  colors,
  alerts,
  combination,
  chartNames,
  theme,
  name,
  window,
}: CreateThemeProps): BaseTheme<C, Ch, Al> {
  const baseHsl = hexToHsl(colors.base);
  const shadow = contrast(colors.background);

  return {
    colors: colorComboPicker(colors.base, combination) as C,
    background: generateColorElement(colors.background),
    disabled: generateColorElement(colors.disabled),
    alerts: generateAlertTheme(alerts) as Al,
    charts: generateChartsColor(
      0,
      baseHsl.saturation,
      baseHsl.lightness,
      chartNames
    ) as Ch,
    elevations: generateElevationTheme(colors.background),
    window: {
      phone: 430,
      tablet: 768,
      desktop: 1024,
      uhd: 1440,
      ...window,
    },
    shadow: shadow,
    presets: {
      combination,
      theme,
      color: name,
    },
  };
}

export function createThemeConfig({
  name,
  theme,
  combination,
}: CreateThemeDefaultPresets): CreateThemeProps {
  const saturation = 0.8;
  let baseLuminance;
  let alertLuminance;
  let background;
  let disabled;

  if (theme === "light") {
    baseLuminance = 0.3;
    alertLuminance = 0.4;
    background = "#eaeaea";
    disabled = "#cccccc";
  } else {
    baseLuminance = 0.8;
    alertLuminance = 0.65;
    background = "#2a2a2a";
    disabled = "#555555";
  }
  const hueMap: Record<ColorVariants, number> = {
    green: 120,
    pink: 300,
    blue: 240,
    yellow: 60,
    brown: 30,
  };
  const baseColor = hslToHex({
    hue: hueMap[name],
    saturation: saturation,
    lightness: baseLuminance,
    alpha: 255,
  });

  return {
    name: name,
    theme: theme,
    combination: combination,
    colors: {
      base: baseColor,
      background,
      disabled,
    },
    alerts: {
      info: hslToHex({
        hue: 240,
        saturation: 0.6,
        lightness: alertLuminance,
        alpha: 255,
      }),
      success: hslToHex({
        hue: 120,
        saturation: 0.6,
        lightness: alertLuminance,
        alpha: 255,
      }),
      warning: hslToHex({
        hue: 60,
        saturation: 0.6,
        lightness: alertLuminance,
        alpha: 255,
      }),
      danger: hslToHex({
        hue: 0,
        saturation: 0.6,
        lightness: alertLuminance,
        alpha: 255,
      }),
      neutral: hslToHex({
        hue: 0,
        saturation: 0,
        lightness: alertLuminance,
        alpha: 255,
      }),
    },
    chartNames: chartHues,
  };
}

export function createThemeWithDefaultPresets<C>({
  name,
  theme,
  combination,
}: CreateThemeDefaultPresets): BaseTheme<C, ChartTheme, AlertThemes> {
  const themeConfig = createThemeConfig({ name, theme, combination });

  return createTheme<C, ChartTheme, AlertThemes>(themeConfig);
}
