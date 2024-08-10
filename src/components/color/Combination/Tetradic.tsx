import { FunctionComponent } from "react";
import styled from "styled-components";
import { tetradicColorVariants } from "../../../interfaces";
import { tetradicColorCombo } from "../../../utils/combination";
import { SmartColorElement } from "../Element";
import { CompinationDisplayProps } from "./interface";

const Frame = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
`;

const Tetradic: FunctionComponent<CompinationDisplayProps> = ({
  base,
  shape,
}) => {
  const combination = tetradicColorCombo(base);

  return (
    <Frame>
      {tetradicColorVariants.map((variant) => (
        <SmartColorElement
          key={variant}
          element={combination[variant]}
          shape={shape}
        />
      ))}
    </Frame>
  );
};

export default Tetradic;
