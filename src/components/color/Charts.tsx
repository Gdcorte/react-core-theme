import { FunctionComponent } from "react";
import styled from "styled-components";
import { chartHues, ChartTheme } from "../../interfaces";
import { rgbToHsl } from "../../utils";
import { generateChartsColor } from "../../utils/charts";

const PARENT_SIZE = 250;
const CHILD_SIZE = 30;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 8px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;

  p {
    margin: 0;
  }
`;

const Frame = styled.div`
  display: flex;
  gap: 8px;

  position: relative;
  min-width: ${PARENT_SIZE}px;
  max-width: ${PARENT_SIZE}px;
  min-height: ${PARENT_SIZE}px;
  max-height: ${PARENT_SIZE}px;
`;

const Slice = styled.div<{
  color: string;
  rotation: number;
  center: {
    x: number;
    y: number;
  };
}>`
  position: absolute;
  top: ${({ center }) => center.y}px;
  left: ${({ center }) => center.x}px;

  display: flex;
  flex-direction: column;

  min-width: ${CHILD_SIZE}px;
  height: ${CHILD_SIZE}px;
  gap: 2px;

  transform: rotate(${({ rotation }) => rotation}deg);
  transform-origin: center;

  border-radius: 5px;

  background-color: ${({ color }) => color};

  p {
    margin: 0;
  }
`;

type Props = {
  base: string;
};

const ChartColors: FunctionComponent<Props> = ({ base }) => {
  const hsl = rgbToHsl(base);

  const chartTheme = generateChartsColor<ChartTheme>(
    0,
    hsl.saturation,
    hsl.lightness
  );

  const baseDegrees = 360 / chartHues.length;

  return (
    <Container>
      <Title>
        <p>Chart Colors</p>
      </Title>

      <Frame>
        {chartHues.map((name, index) => {
          const parentOffset = (PARENT_SIZE - CHILD_SIZE) / 2;
          const radius = 100;
          const angle = baseDegrees * index;
          const rads = (Math.PI * angle) / 180;

          const center = {
            x: radius * Math.sin(rads) + parentOffset,
            y: parentOffset - radius * Math.cos(rads),
          };
          return (
            <Slice
              id={name}
              key={name}
              color={chartTheme[name]}
              rotation={angle}
              center={center}
            />
          );
        })}
      </Frame>
    </Container>
  );
};

export default ChartColors;
