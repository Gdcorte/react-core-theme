import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { ColorElement } from "../../interfaces/presets";

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

  left: 0;
`;

const Outline = styled.div`
  position: relative;

  background-color: transparent;
  border-radius: 5px;

  width: 112px;
  height: 32px;
`;

type Props = {
  element: ColorElement;
};

const ColorRectangle: FunctionComponent<Props> = ({ element }) => {
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
