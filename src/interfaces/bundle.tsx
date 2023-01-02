import { ThemeAlerts } from "./alerts";
import { ThemeColors } from "./colors";
import { BackgroundPresets } from "./presets";
import { BaseTypes } from "./types";

export type BundledColors = {
  [key: string]: ThemeColors;
};

export type BundledPresets = {
  [key: string]: string;
};

export interface BundledType {
  fonts: string[];
  background: BackgroundPresets;
  alerts: ThemeAlerts;
  colors: BundledColors;
  presets: BundledPresets;
  typeName: string;
}

type BaseBundledTheme = {
  [key in BaseTypes]: BundledType;
};

export interface BundledTheme extends BaseBundledTheme {
  [key: string]: BundledType;
}
