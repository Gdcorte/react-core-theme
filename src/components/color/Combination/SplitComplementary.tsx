import { FunctionComponent } from "react";
import styled from "styled-components";
import { splitComplementaryColorVariants } from "../../../interfaces";
import { splitComplementaryColorCombo } from "../../../utils/combination";
import { SmartColorElement } from "../Element";
import { CompinationDisplayProps } from "./interface";

const Frame = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
`;

const SplitComplementary: FunctionComponent<CompinationDisplayProps> = ({
  base,
  shape,
}) => {
  const combination = splitComplementaryColorCombo(base);

  return (
    <Frame>
      {splitComplementaryColorVariants.map((variant) => (
        <SmartColorElement
          key={variant}
          element={combination[variant]}
          shape={shape}
        />
      ))}
    </Frame>
  );
};

export default SplitComplementary;
