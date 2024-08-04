// Definitions

import {
  AlertThemes,
  BaseColorCombination,
  ColorElement,
  ColorVariants,
  ElevationTheme,
  FontPreset,
  MarginPreset,
  ShadePreset,
  ThemeVariants,
  WindowSizes,
} from "./presets";

type ChartThemes = {};

type BaseTheme<T> = {
  colors: T;
  background: ColorElement;
  disabled: ColorElement;
  alerts: AlertThemes | Record<string, ColorElement>;
  shade: ShadePreset;
  elevations: ElevationTheme;
  fonts: FontPreset;
  window: WindowSizes | Record<string, number>;
  margins: MarginPreset;
  charts: ChartThemes;
  presets: {
    combination: BaseColorCombination | string;
    color: ColorVariants | string;
    theme: ThemeVariants | string;
  };
};
