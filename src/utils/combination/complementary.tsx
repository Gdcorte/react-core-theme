import {
  Complementary,
  DoubleComplementary,
  SplitComplementary,
} from "../../interfaces";
import { rotateColor } from "../blending";
import { generateColorElement } from "./base";

export function complementaryColorCombo(base: string): Complementary {
  const rotatedColor = rotateColor(base, 180);

  return {
    base: generateColorElement(base),
    complement: generateColorElement(rotatedColor),
  };
}

export function splitComplementaryColorCombo(base: string): SplitComplementary {
  const splitted = rotateColor(base, 60);
  const complement = rotateColor(base, 210);

  return {
    base: generateColorElement(base),
    split: generateColorElement(splitted),
    complement: generateColorElement(complement),
  };
}

export function doubleComplementaryColorCombo(
  base: string
): DoubleComplementary {
  const secondary = rotateColor(base, 60);

  return {
    primary: complementaryColorCombo(base),
    secondary: complementaryColorCombo(secondary),
  };
}
