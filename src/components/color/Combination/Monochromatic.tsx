import { FunctionComponent } from "react";
import styled from "styled-components";
import { monochromaticColorVariants } from "../../../interfaces";
import { monochromaticColorCombo } from "../../../utils/combination/monochromatic";
import { SmartColorElement } from "../Element";
import { CompinationDisplayProps } from "./interface";

const Frame = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
`;

const Monochromatic: FunctionComponent<CompinationDisplayProps> = ({
  base,
  shape,
}) => {
  const combination = monochromaticColorCombo(base);

  return (
    <Frame>
      {monochromaticColorVariants.map((variant) => (
        <SmartColorElement
          key={variant}
          element={combination[variant]}
          shape={shape}
        />
      ))}
    </Frame>
  );
};

export default Monochromatic;
