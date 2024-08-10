import { FunctionComponent } from "react";
import styled from "styled-components";
import { analogousColorVariants } from "../../../interfaces";
import { analogousColorCombo } from "../../../utils/combination";
import { SmartColorElement } from "../Element";
import { CompinationDisplayProps } from "./interface";

const Frame = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
`;

const Analogous: FunctionComponent<CompinationDisplayProps> = ({
  base,
  shape,
}) => {
  const combination = analogousColorCombo(base);

  return (
    <Frame>
      {analogousColorVariants.map((variant) => (
        <SmartColorElement
          key={variant}
          element={combination[variant]}
          shape={shape}
        />
      ))}
    </Frame>
  );
};

export default Analogous;
