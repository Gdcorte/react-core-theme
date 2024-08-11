import { BaseTheme, CreateThemeProps } from "../interfaces";
import { generateAlertTheme } from "./alerts";
import { contrast } from "./blending";
import { generateChartsColor } from "./charts";
import { colorComboPicker, generateColorElement } from "./combination";
import { hexToHsl } from "./conversion";
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

// const baseBackgrounds: ThemeTypesBase = {
//   light: "#fefefe",
//   dark: "#2a2a2a",
// };

// const baseAlerts: BaseAlertColors = {
//   info: "#70bbfd",
//   success: "#4ce1b6",
//   warning: "#f6da6e",
//   danger: "#ff4861",
// };
