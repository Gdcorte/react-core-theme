// Definitions
export * from "./charts";
export * from "./models";
export * from "./presets";

import {
  AlertVariants,
  ColorCombinationVariants,
  ColorElement,
  ColorVariants,
  ElevationTheme,
  FontPreset,
  ThemeVariants,
  WindowSizes,
} from "./presets";

export type BaseTheme<C, Ch, Al> = {
  colors: C;
  background: ColorElement;
  disabled: ColorElement;
  alerts: Al;
  shadow: string;
  elevations: ElevationTheme;
  // fonts: FontPreset;
  window: WindowSizes | Record<string, number>;
  charts: Ch;
  presets: {
    combination: ColorCombinationVariants | string;
    color: ColorVariants | string;
    theme: ThemeVariants | string;
  };
};

export type CreateThemeProps = {
  colors: {
    base: string;
    background: string;
    disabled: string;
  };
  alerts: Record<string, string>;
  chartNames: readonly string[];
  name: ColorVariants;
  theme: ThemeVariants;
  combination: ColorCombinationVariants;
  window?: Partial<WindowSizes>;
};

export type CreateThemeDefaultPresets = {
  name: ColorVariants;
  theme: ThemeVariants;
  combination: ColorCombinationVariants;
};

export type InputSettings = {
  primary: string;
  background: string;
  disabled?: string;
  alerts?: Partial<Record<AlertVariants, string>>;
  font: Partial<FontPreset>;
};
