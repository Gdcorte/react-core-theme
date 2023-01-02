import { AlertPresets } from "./presets";

export const baseAlerts = ["info", "success", "warning", "danger"] as const;
export type BaseAlerts = typeof baseAlerts[number];

export type BaseInputAlerts = {
  [key in BaseAlerts]: string;
};

export interface InputAlerts extends BaseInputAlerts {
  [key: string]: string;
}

export type BaseThemeAlerts = {
  [key in BaseAlerts]: AlertPresets;
};

export interface ThemeAlerts extends BaseThemeAlerts {
  [key: string]: AlertPresets;
}

export function isAlertType(option: string): option is BaseAlerts {
  return baseAlerts.includes(option as BaseAlerts);
}
