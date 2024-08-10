import { FunctionComponent } from "react";
import styled from "styled-components";
import { firstCharToUpper, impossibleAction } from "../../../helpers";
import { ColorCombinationVariants } from "../../../interfaces";
import Analogous from "./Analogous";
import Complementary from "./Complementary";
import DoubleComplementary from "./DoubleComplementary";
import Monochromatic from "./Monochromatic";
import SplitComplementary from "./SplitComplementary";
import Tetradic from "./Tetradic";
import Triadic from "./Triadic";

const Frame = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 10px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;

  p {
    margin: 0;
  }
`;

interface Props {
  base: string;
  variant: ColorCombinationVariants;
}

const ColorCombination: FunctionComponent<Props> = ({ base, variant }) => {
  function findColorCombo(targetVariant: ColorCombinationVariants) {
    switch (targetVariant) {
      case "analogous":
        return Analogous;

      case "complementary":
        return Complementary;

      case "complementary_split":
        return SplitComplementary;

      case "complementary_double":
        return DoubleComplementary;

      case "monochromatic":
        return Monochromatic;

      case "tetradic":
        return Tetradic;

      case "triadic":
        return Triadic;

      default:
        impossibleAction(targetVariant, "ColorCombinationPicker");
    }
  }

  const ColorElement = findColorCombo(variant);

  return (
    <Frame>
      <Title>
        <p>Color Combination: {firstCharToUpper(variant)}</p>
      </Title>

      <ColorElement base={base} />
    </Frame>
  );
};

export default ColorCombination;
