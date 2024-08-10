import {
  AnalocgousColorVariants,
  Analogous,
  analogousColorVariants,
} from "../../interfaces";
import { rotateColor } from "../blending";
import { generateColorElement } from "./base";

export function analogousColorCombo(base: string): Analogous {
  const rotationMap: Record<AnalocgousColorVariants, number> = {
    left: -60,
    leftCenter: -30,
    center: 0,
    rightCenter: 30,
    right: 60,
  };

  const combination = analogousColorVariants.reduce((acc, variant) => {
    const rotatedColor = rotateColor(base, rotationMap[variant]);

    return {
      ...acc,
      [variant]: generateColorElement(rotatedColor),
    };
  }, {} as Analogous);

  return combination;
}
