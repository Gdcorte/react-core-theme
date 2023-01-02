export const shadePresets = [
  "shade1",
  "shade2",
  "shade3",
  "shade4",
  "shade5",
] as const;
export type ShadePresets = typeof shadePresets[number];

export type BaseShadePresets = {
  [key in ShadePresets]: string;
};

export const actionablePresets = [
  "hover",
  "selected",
  "focus",
  "disabled",
] as const;
export type ActionablePresets = typeof actionablePresets[number];

export type BaseActionablePresets = {
  [key in ActionablePresets]: string;
};

export type BaseActionablesWeights = {
  [key in ActionablePresets]: number;
};

export interface BackgroundPresets extends BaseShadePresets {
  base: string;
}

export interface AlertPresets extends BaseActionablePresets {
  base: string;
}

export interface ColorPresets extends BaseShadePresets, BaseActionablePresets {
  base: string;
}

export function isShadePreset(option: unknown): option is ShadePresets {
  return shadePresets.includes(option as ShadePresets);
}

export function isActionablePreset(
  option: unknown
): option is ActionablePresets {
  return actionablePresets.includes(option as ActionablePresets);
}
