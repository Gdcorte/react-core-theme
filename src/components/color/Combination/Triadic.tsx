import { FunctionComponent } from "react";
import styled from "styled-components";
import { triadicColorVariants } from "../../../interfaces";
import { triadicColorCombo } from "../../../utils/combination";
import { SmartColorElement } from "../Element";
import { CompinationDisplayProps } from "./interface";

const Frame = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
`;

const Triadic: FunctionComponent<CompinationDisplayProps> = ({
  base,
  shape,
}) => {
  const combination = triadicColorCombo(base);

  return (
    <Frame>
      {triadicColorVariants.map((variant) => (
        <SmartColorElement
          key={variant}
          element={combination[variant]}
          shape={shape}
        />
      ))}
    </Frame>
  );
};

export default Triadic;
