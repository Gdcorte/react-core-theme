// /////////////////
// Theme Presets
// /////////////////
export const themeVariants = ["light", "dark"] as const;
export type ThemeVariants = typeof themeVariants[number];

// /////////////////
// Color Presets
// /////////////////
export const colorVariants = ["green", "yellow", "blue", "pink"] as const;
export type ColorVariants = typeof colorVariants[number];

// /////////////////
// Window Presets
// /////////////////
export const windowVariants = ["phone", "tablet", "desktop", "uhd"] as const;
export type WindowVariants = typeof windowVariants[number];

export type WindowSizes = Record<WindowVariants, number>;

// /////////////////
// Sizes Presets
// /////////////////
export const sizeVariants = ["sm", "md", "lg", "xl"] as const;
export type SizeVariants = typeof sizeVariants[number];

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
export const elevationPresets = ["lower", "neutral", "higher"] as const;
export type ElevationVariants = typeof elevationPresets[number];

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
  "success",
  "info",
  "neutral",
  "warning",
  "danger",
] as const;
export type AlertVariants = typeof alertTypes[number];
export type AlertThemes = Record<AlertVariants, ColorElement>;

// ////////////////
// Color Combinations
// ////////////////
export const ColorCombinationPresets = [
  "monochromatic",
  "complementary",
  "complementary_split",
  "complementary_double",
  "analogous",
  "triadic",
  "tetradic",
] as const;
export type BaseColorCombination = typeof ColorCombinationPresets[number];

export type Monochromatic = Record<"light" | "base" | "heavy", ColorElement>;

export type Complementary = Record<"base" | "complement", ColorElement>;

export type SplitComplementary = Record<
  "base" | "split" | "complement",
  ColorElement
>;

export type DoubleComplementary = Record<
  "primary" | "secondary",
  Complementary
>;

export type Analogous = Record<
  "left" | "leftCenter" | "center" | "rightCenter" | "right",
  ColorElement
>;

export type Triadic = Record<"left" | "base" | "right", ColorElement>;

type TetradicPair = Record<"base" | "opposite", ColorElement>;

export type Tetradic = Record<"primary" | "secondary", TetradicPair>;
