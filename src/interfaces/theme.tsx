import { ThemeAlerts } from "./alerts";
import { BundledPresets } from "./bundle";
import { ThemeColors } from "./colors";
import { BackgroundPresets } from "./presets";

export interface BaseTheme {
  presets: BundledPresets;
  fonts: string[];
  background: BackgroundPresets;
  alerts: ThemeAlerts;
  colors: ThemeColors;
  typeName: string;
  colorName: string;
}
