import {
  AlertColors,
  ColorSystem,
  ThemeAlerts,
  ThemeColors,
} from "../interfaces";
import {
  BackgroundPresets,
  BaseActionablePresets,
  BaseActionablesWeights,
  BaseShadePresets,
  isActionablePreset,
  isShadePreset,
} from "../interfaces/presets";
import { autoMix } from "./colors";

export function buildShades(base: string): BaseShadePresets {
  let shadedColor: BaseShadePresets = {
    shade1: "#ffffff",
    shade2: "#ffffff",
    shade3: "#ffffff",
    shade4: "#ffffff",
    shade5: "#ffffff",
  };

  for (let index = 1; index <= 5; index++) {
    let shadeKey = `shade${index}`;
    if (isShadePreset(shadeKey)) {
      shadedColor[shadeKey] = autoMix(base, index / 10);
    }
  }

  return shadedColor;
}

export function buildActionables(base: string): BaseActionablePresets {
  let actionableColor: BaseActionablePresets = {
    disabled: `${base}40`,
    hover: "",
    selected: "",
    focus: "",
  };
  const actionableWeights: BaseActionablesWeights = {
    hover: 0.2,
    focus: 0.4,
    selected: 0.6,
    disabled: 0,
  };

  Object.entries(actionableWeights).map(([action, weight]) => {
    if (isActionablePreset(action)) {
      if (weight == 0) {
        return;
      }

      actionableColor[action] = autoMix(base, weight);
    }
  });

  return actionableColor;
}

export function buildAlertPresets(alerts: AlertColors): ThemeAlerts {
  const arrayPresets: Partial<ThemeAlerts> = {};

  Object.keys(alerts).forEach((value) => {
    let actionables = buildActionables(alerts[value]);

    arrayPresets[value] = {
      base: alerts[value],
      ...actionables,
    };
  });

  return arrayPresets as ThemeAlerts;
}

export function buildColorPresets(color: ColorSystem): ThemeColors {
  const colorPresets: Partial<ThemeColors> = {};

  Object.keys(color).forEach((value) => {
    if (value == "name") {
      return;
    }
    const base = color[value];
    let shades = buildShades(base);
    let actionables = buildActionables(base);

    colorPresets[value] = {
      base: base,
      ...actionables,
      ...shades,
    };
  });

  return colorPresets as ThemeColors;
}

export function buildBackgroundPresets(base: string): BackgroundPresets {
  const backgroundPresets = buildShades(base);

  return {
    base,
    ...backgroundPresets,
  };
}
