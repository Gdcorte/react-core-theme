export const baseTypes = ["light", "dark"] as const;
export type BaseTypes = typeof baseTypes[number];

export type ThemeTypesBase = {
  [key in BaseTypes]: string;
};

export interface ThemeTypes extends ThemeTypesBase {
  [key: string]: string;
}

export function isThemeType(option: string): option is BaseTypes {
  return baseTypes.includes(option as BaseTypes);
}
