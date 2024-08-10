import { Tetradic } from "../../interfaces";
import { rotateColor } from "../blending";
import { generateColorElement } from "./base";

export function tetradicColorCombo(base: string): Tetradic {
  const secondary = rotateColor(base, 90);
  const tertiary = rotateColor(base, 180);
  const quaternary = rotateColor(base, 270);

  return {
    primary: generateColorElement(base),
    secondary: generateColorElement(secondary),
    tertiary: generateColorElement(tertiary),
    quaternary: generateColorElement(quaternary),
  };
}
