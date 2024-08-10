import { Monochromatic } from "../../interfaces";
import { shade, tint } from "../blending";
import { generateColorElement } from "./base";

export function monochromaticColorCombo(base: string): Monochromatic {
  const light = tint(base, 0.5);
  const heavy = shade(base, 0.5);

  return {
    light: generateColorElement(light),
    base: generateColorElement(base),
    heavy: generateColorElement(heavy),
  };
}
