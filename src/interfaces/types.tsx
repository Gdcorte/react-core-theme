export const basicThemeSystemTypes = ["light", "dark"] as const;
export type BasicThemeSystemType = typeof basicThemeSystemTypes[number];

export type ThemeTypesBase = {
  [key in BasicThemeSystemType]: string;
};

export interface ThemeTypes extends ThemeTypesBase {
  [key: string]: string;
}

export function isBasicThemeType(
  option: string
): option is BasicThemeSystemType {
  return basicThemeSystemTypes.includes(option as BasicThemeSystemType);
}
