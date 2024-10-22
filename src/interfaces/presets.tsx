// /////////////////
// Theme Presets
// /////////////////
export const themeVariants = ["light", "dark"] as const;
export type ThemeVariants = (typeof themeVariants)[number];

// /////////////////
// Color Presets
// /////////////////
export const colorVariants = [
  "green",
  "yellow",
  "blue",
  "pink",
  "brown",
] as const;
export type ColorVariants = (typeof colorVariants)[number];

// /////////////////
// Window Presets
// /////////////////
export const windowVariants = ["phone", "tablet", "desktop", "uhd"] as const;
export type WindowVariants = (typeof windowVariants)[number];

export type WindowSizes = Record<WindowVariants, number>;

// /////////////////
// Sizes Presets
// /////////////////
export const sizeVariants = ["sm", "md", "lg", "xl"] as const;
export type SizeVariants = (typeof sizeVariants)[number];

// /////////////////
// Fonts Presets
// /////////////////
export type FontSizes = Record<SizeVariants, string>;
export type FontPreset = {
  family: string;
  sizes: FontSizes;
};

// /////////////////
// Margin Presets
// /////////////////
export type MarginSizes = Record<SizeVariants, number>;
export type MarginPreset = {
  gap: MarginSizes;
  internal: MarginSizes;
  external: MarginSizes;
};

// /////////////////
// Element Presets
// /////////////////
export type ColorElement = {
  color: string;
  tint: string;
  shade: string;
  tone: string;
  contrast: string;
};

// ////////////////
// Elevation Presets
// ////////////////
export const elevationPresets = [
  "lower",
  "neutral",
  "medium",
  "higher",
] as const;
export type ElevationVariants = (typeof elevationPresets)[number];

export type ElevationTheme = Record<ElevationVariants, string>;

// ////////////////
// Shade Presets
// ////////////////
export type ShadePreset = {
  color: string;
  border: string;
};

// ////////////////
// Alert Presets
// ////////////////
export const alertTypes = [
  "danger",
  "warning",
  "info",
  "success",
  "neutral",
] as const;
export type AlertVariants = (typeof alertTypes)[number];
export type AlertThemes = Record<AlertVariants, ColorElement>;

// ////////////////
// Color Combinations
// ////////////////
export const colorCombinationVariants = [
  "monochromatic",
  "complementary",
  "complementary_split",
  "complementary_double",
  "analogous",
  "triadic",
  "tetradic",
] as const;
export type ColorCombinationVariants =
  (typeof colorCombinationVariants)[number];

export const monochromaticColorVariants = ["light", "base", "heavy"] as const;
export type MonochromaticColorVariants =
  (typeof monochromaticColorVariants)[number];
export type Monochromatic = Record<MonochromaticColorVariants, ColorElement>;

export const complementaryColorVariants = ["base", "complement"] as const;
export type ComplementaryColorVariants =
  (typeof complementaryColorVariants)[number];
export type Complementary = Record<ComplementaryColorVariants, ColorElement>;

export const splitComplementaryColorVariants = [
  "base",
  "split",
  "complement",
] as const;
export type SplitComplementaryColorVariants =
  (typeof splitComplementaryColorVariants)[number];
export type SplitComplementary = Record<
  SplitComplementaryColorVariants,
  ColorElement
>;

export const doubleComplementaryColorVariants = [
  "primary",
  "secondary",
] as const;
export type DoubleComplementaryColorVariants =
  (typeof doubleComplementaryColorVariants)[number];
export type DoubleComplementary = Record<
  DoubleComplementaryColorVariants,
  Complementary
>;

export const analogousColorVariants = [
  "left",
  "leftCenter",
  "center",
  "rightCenter",
  "right",
] as const;
export type AnalocgousColorVariants = (typeof analogousColorVariants)[number];
export type Analogous = Record<AnalocgousColorVariants, ColorElement>;

export const triadicColorVariants = [
  "primary",
  "secondary",
  "tertiary",
] as const;
export type TriadicColorVariants = (typeof triadicColorVariants)[number];
export type Triadic = Record<TriadicColorVariants, ColorElement>;

export const tetradicColorVariants = [
  ...triadicColorVariants,
  "quaternary",
] as const;
export type TetradicColorVariants = (typeof tetradicColorVariants)[number];
export type Tetradic = Record<TetradicColorVariants, ColorElement>;

export type ColorCombinationTypes =
  | Tetradic
  | Triadic
  | Analogous
  | DoubleComplementary
  | Monochromatic
  | Complementary
  | SplitComplementary;
