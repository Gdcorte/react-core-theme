export const primaryHues = ["red", "blue", "yellow"] as const;
export const secondaryHues = ["green", "orange", "violet"] as const;
export const tertiaryHues = [
  "purple",
  "magenta",
  "vermillion",
  "amber",
  "charteuse",
  "teal",
] as const;

const chartHues = [...primaryHues, ...secondaryHues, ...tertiaryHues] as const;

export type ChartHues = typeof chartHues[number];

export type ChartTheme = Record<ChartHues, string>;
