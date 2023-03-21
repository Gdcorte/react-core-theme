import { BasicThemeSystemType } from "./types";

export type BasicThemeFonts = {
  [key in BasicThemeSystemType]: string;
};

export type FontSystem = {
  [key: string]: string;
} & BasicThemeFonts;
