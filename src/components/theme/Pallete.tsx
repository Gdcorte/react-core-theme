import { FunctionComponent } from "react";
import styled from "styled-components";
import {
  AlertVariants,
  ColorCombinationVariants,
  ColorVariants,
  ThemeVariants,
} from "../../interfaces";
import { contrast } from "../../utils";
import { generateColorElement } from "../../utils/combination";
import {
  AlertColors,
  ChartColors,
  ColorCombination,
  ElevationColors,
  SmartColorElement,
} from "../color";

const Frame = styled.div<{ bg: string; font: string }>`
  display: flex;
  flex-direction: column;

  gap: 12px;


  padding: 20px;

  background-color: ${({ bg }) => bg}};
  color: ${({ font }) => font}};
`;

const ChartAlertsFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;

  width: 100%;
  height: 100%;
  gap: 12px;
`;

const AlertFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
`;

const DisabledFrame = styled.div`
  display: flex;
  gap: 8px;

  align-items: center;
`;

type Props = {
  colors: {
    base: string;
    background: string;
    disabled: string;
  };
  alerts: Record<AlertVariants, string>;
  name: ColorVariants;
  theme: ThemeVariants;
  combination: ColorCombinationVariants;
};

const ThemePallete: FunctionComponent<Props> = ({
  colors,
  alerts,
  name,
  theme,
  combination,
}) => {
  const bgContrast = contrast(colors.background);
  const disabled = generateColorElement(colors.disabled);

  return (
    <Frame bg={colors.background} font={bgContrast} className="pallete-frame">
      <ColorCombination base={colors.base} variant={combination} />

      <ChartAlertsFrame>
        <ChartColors base={colors.base} />

        <AlertFrame>
          <AlertColors variants={alerts} />
          <DisabledFrame>
            <p>Disabled: </p>
            <SmartColorElement element={disabled} />
          </DisabledFrame>

          <ElevationColors bg={colors.background} contrast={bgContrast} />
        </AlertFrame>
      </ChartAlertsFrame>
    </Frame>
  );
};

export default ThemePallete;
