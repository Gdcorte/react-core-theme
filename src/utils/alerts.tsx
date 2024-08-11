import { generateColorElement } from "./combination";

export function generateAlertTheme<T>(variants: Record<string, string>): T {
  console.warn(variants);
  return Object.entries(variants).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: generateColorElement(value),
    };
  }, {}) as T;
}