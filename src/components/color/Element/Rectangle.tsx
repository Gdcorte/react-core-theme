import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { ElementDisplayProps } from "./interface";

const Common = css`
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 32px;
`;

const Shade = styled.div`
  ${Common};

  border-top-right-radius: 5px;

  left: 84px;
`;

const Tone = styled.div`
  ${Common};

  left: 56px;
`;

const Tint = styled.div`
  ${Common};

  left: 28px;
`;

const Main = styled.div`
  ${Common};

  border-top-left-radius: 5px;

  left: 0;
`;

const Outline = styled.div`
  position: relative;

  background-color: transparent;
  border-radius: 5px;

  width: 112px;
  height: 32px;
`;

const ColorRectangle: FunctionComponent<ElementDisplayProps> = ({
  element,
}) => {
  return (
    <Outline
      style={{
        borderBottom: `8px solid ${element.color}`,
        color: element.contrast,
      }}
    >
      <Main style={{ backgroundColor: element.color }}>A</Main>
      <Tint style={{ backgroundColor: element.tint }}>A</Tint>
      <Tone style={{ backgroundColor: element.tone }}>A</Tone>
      <Shade style={{ backgroundColor: element.shade }}>A</Shade>
    </Outline>
  );
};

export default ColorRectangle;
