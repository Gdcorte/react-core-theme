// Definitions
export * from "./charts";
export * from "./models";
export * from "./presets";

import {
  AlertThemes,
  AlertVariants,
  ColorCombinationVariants,
  ColorElement,
  ColorVariants,
  ElevationTheme,
  FontPreset,
  MarginPreset,
  ThemeVariants,
  WindowSizes,
} from "./presets";

type BaseTheme<T, K> = {
  colors: T;
  background: ColorElement;
  disabled: ColorElement;
  alerts: AlertThemes | Record<string, ColorElement>;
  shadow: string;
  elevations: ElevationTheme;
  fonts: FontPreset;
  window: WindowSizes | Record<string, number>;
  margins: MarginPreset;
  charts: K;
  presets: {
    combination: ColorCombinationVariants | string;
    color: ColorVariants | string;
    theme: ThemeVariants | string;
  };
};

type InputSettings = {
  primary: string;
  background: string;
  disabled?: string;
  alerts?: Partial<Record<AlertVariants, string>>;
  font: Partial<FontPreset>;
};
