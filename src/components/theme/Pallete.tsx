import { FunctionComponent } from "react";
import styled from "styled-components";
import {
  ColorCombinationVariants,
  ColorVariants,
  ThemeVariants,
} from "../../interfaces";
import { contrast } from "../../utils";
import { ChartColors, ColorCombination } from "../color";

const Frame = styled.div<{ bg: string; font: string }>`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  gap: 12px;


  padding: 20px;

  background-color: ${({ bg }) => bg}};
  color: ${({ font }) => font}};
`;

const ChartAlertsFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100%;
  gap: 12px;
`;

type Props = {
  colors: {
    base: string;
    background: string;
  };
  name: ColorVariants;
  theme: ThemeVariants;
  combination: ColorCombinationVariants;
};

const ThemePallete: FunctionComponent<Props> = ({
  colors,
  name,
  theme,
  combination,
}) => {
  const bgContrast = contrast(colors.background);
  return (
    <Frame bg={colors.background} font={bgContrast} className="pallete-frame">
      <ColorCombination base={colors.base} variant={combination} />

      <ChartAlertsFrame>
        <ChartColors base={colors.base} />
      </ChartAlertsFrame>
    </Frame>
  );
};

export default ThemePallete;
