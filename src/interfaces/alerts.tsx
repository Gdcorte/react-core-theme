import { AlertPresets } from "./presets";

export const basicAlertNames = [
  "info",
  "success",
  "warning",
  "danger",
] as const;
export type BaseAlertTypes = typeof basicAlertNames[number];

export type BaseAlertColors = {
  [key in BaseAlertTypes]: string;
};

export type AlertColors = {
  [key: string]: string;
} & BaseAlertColors;

export type BaseThemeAlerts = {
  [key in BaseAlertTypes]: AlertPresets;
};

export type ThemeAlerts = {
  [key: string]: AlertPresets;
} & BaseThemeAlerts;

export function isBasicAlertType(option: string): option is BaseAlertTypes {
  return basicAlertNames.includes(option as BaseAlertTypes);
}
