import { ColorElement } from "../../../interfaces";

export type ElementDisplayProps = {
  element: ColorElement;
};

export const colorElementDisplayShapes = ["ball", "rectangle"] as const;
export type ColorElementDisplayShapes =
  (typeof colorElementDisplayShapes)[number];
