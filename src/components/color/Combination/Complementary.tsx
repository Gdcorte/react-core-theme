import { FunctionComponent } from "react";
import styled from "styled-components";
import { complementaryColorVariants } from "../../../interfaces";
import { complementaryColorCombo } from "../../../utils/combination";
import { SmartColorElement } from "../Element";
import { CompinationDisplayProps } from "./interface";

const Frame = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
`;

const Complementary: FunctionComponent<CompinationDisplayProps> = ({
  base,
  shape,
}) => {
  const combination = complementaryColorCombo(base);

  return (
    <Frame>
      {complementaryColorVariants.map((variant) => (
        <SmartColorElement
          key={variant}
          element={combination[variant]}
          shape={shape}
        />
      ))}
    </Frame>
  );
};

export default Complementary;
