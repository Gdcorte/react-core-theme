import { FunctionComponent } from "react";
import styled from "styled-components";
import { complementaryColorVariants } from "../../../interfaces";
import { doubleComplementaryColorCombo } from "../../../utils/combination";
import { SmartColorElement } from "../Element";
import { CompinationDisplayProps } from "./interface";

const Frame = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
`;

const DoubleComplementary: FunctionComponent<CompinationDisplayProps> = ({
  base,
  shape,
}) => {
  const combination = doubleComplementaryColorCombo(base);

  return (
    <Frame>
      {/* Primary */}
      {complementaryColorVariants.map((variant) => (
        <SmartColorElement
          key={variant}
          element={combination.primary[variant]}
          shape={shape}
        />
      ))}

      {/* Secondary */}
      {complementaryColorVariants.map((variant) => (
        <SmartColorElement
          key={variant}
          element={combination.secondary[variant]}
          shape={shape}
        />
      ))}
    </Frame>
  );
};

export default DoubleComplementary;
