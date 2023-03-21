import { AlertColors, ThemeAlerts } from "./alerts";
import { ColorSystem, ThemeColors } from "./colors";
import { FontSystem } from "./fonts";
import { BackgroundPresets } from "./presets";
import { BasicThemeSystemType, ThemeTypes } from "./types";

export type BundledColors = {
  [key: string]: ThemeColors;
};

export type BundledPresets = {
  [key: string]: string;
};

export interface BundledType {
  fonts: string[];
  fontSystem: ThemeTypes;
  background: BackgroundPresets;
  alerts: ThemeAlerts;
  colors: BundledColors;
  presets: BundledPresets;
  typeName: string;
}

export type BaseBundledTheme = {
  [key in BasicThemeSystemType]: BundledType;
};

export type WithBaseBundle = {
  [key: string]: BundledType;
} & BaseBundledTheme;

export type BundledTheme = {
  [key: string]: BundledType;
};

export type ThemeConfiguration = {
  fonts: FontSystem;
  background: string;
  alerts: AlertColors;
  colors: ColorSystem[];
  typeName: string;
};

export type MultiThemeConfiguration = {
  [key: string]: ThemeConfiguration;
};
