import { impossibleAction } from "../../helpers";
import { ColorCombinationVariants } from "../../interfaces";
import { analogousColorCombo } from "./analogous";
import {
  complementaryColorCombo,
  doubleComplementaryColorCombo,
  splitComplementaryColorCombo,
} from "./complementary";
import { monochromaticColorCombo } from "./monochromatic";
import { tetradicColorCombo } from "./tetradic";
import { triadicColorCombo } from "./triadic";

export function colorComboPicker(
  base: string,
  variant: ColorCombinationVariants
) {
  switch (variant) {
    case "analogous":
      return analogousColorCombo(base);

    case "complementary":
      return complementaryColorCombo(base);

    case "complementary_split":
      return splitComplementaryColorCombo(base);

    case "complementary_double":
      return doubleComplementaryColorCombo(base);

    case "monochromatic":
      return monochromaticColorCombo(base);

    case "tetradic":
      return tetradicColorCombo(base);

    case "triadic":
      return triadicColorCombo(base);

    default:
      impossibleAction(variant, "colorComboPicker");
  }
}

export * from "./analogous";
export * from "./base";
export * from "./complementary";
export * from "./monochromatic";
export * from "./tetradic";
export * from "./triadic";
