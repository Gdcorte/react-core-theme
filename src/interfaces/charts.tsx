export const chartHues = [
  "red",
  "vermilion",
  "orange",
  "yellow",
  "grass",
  "chartreuse",
  "green",
  "mint",
  "teal",
  "cyan",
  "cerulean",
  "blue",
  "indigo",
  "purple",
  "violet",
  "magenta",
  "pink",
  "salmon",
] as const;
export type ChartHues = (typeof chartHues)[number];

export type ChartTheme = Record<ChartHues, string>;
