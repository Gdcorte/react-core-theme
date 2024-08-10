import { Triadic } from "../../interfaces";
import { rotateColor } from "../blending";
import { generateColorElement } from "./base";

export function triadicColorCombo(base: string): Triadic {
  const secondary = rotateColor(base, 120);
  const tertiary = rotateColor(base, 240);

  return {
    primary: generateColorElement(base),
    secondary: generateColorElement(secondary),
    tertiary: generateColorElement(tertiary),
  };
}
