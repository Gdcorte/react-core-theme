export const colorModels = ["rgb", "cmyk", "yiq", "hsv", "hsl", "hsi"] as const;
export type ColorModels = typeof colorModels[number];

export const rgbKeys = ["alpha", "red", "green", "blue"] as const;
export type RgbKeys = typeof rgbKeys[number];
export type RgbColor = Record<RgbKeys, number>;

export type CmykColor = Record<"alpha" | "cyan" | "magenta" | "yellow", number>;

export type HsvColor = Record<"alpha" | "hue" | "saturation" | "value", number>;

export type HslColor = Record<
  "alpha" | "hue" | "saturation" | "lightness",
  number
>;

export type HsiColor = Record<
  "alpha" | "hue" | "saturation" | "intensity",
  number
>;

export type YiqColor = Record<
  "alpha" | "luminance" | "inphase" | "quadrature",
  number
>;
