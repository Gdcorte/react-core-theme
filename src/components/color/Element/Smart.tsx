import { FunctionComponent } from "react";
import { impossibleAction } from "../../../helpers";
import ColorBall from "./Ball";
import { ColorElementDisplayShapes, ElementDisplayProps } from "./interface";
import ColorRectangle from "./Rectangle";

type Props = {
  shape?: ColorElementDisplayShapes;
} & ElementDisplayProps;

const ElementPicker: FunctionComponent<Props> = ({
  shape,
  ...displayProps
}) => {
  if (shape === undefined) return <ColorRectangle {...displayProps} />;

  switch (shape) {
    case "ball":
      return <ColorBall {...displayProps} />;

    case "rectangle":
      return <ColorRectangle {...displayProps} />;

    default:
      impossibleAction(shape, "ColorElementDisplayPicker");
  }
};

export default ElementPicker;
