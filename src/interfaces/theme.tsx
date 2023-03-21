import { ThemeAlerts } from "./alerts";
import { BundledPresets } from "./bundle";
import { ThemeColors } from "./colors";
import { FontSystem } from "./fonts";
import { BackgroundPresets } from "./presets";

export interface BaseTheme {
  presets: BundledPresets;
  fonts: string[];
  fontSystem: FontSystem;
  background: BackgroundPresets;
  alerts: ThemeAlerts;
  colors: ThemeColors;
  typeName: string;
  colorName: string;
}
