import styled, { css } from "styled-components";
import { ColorElement } from "../../interfaces/presets";

type Props = {
  element: ColorElement;
};

const BallStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
`;

const ShadeBall = styled.div`
  ${BallStyle};

  width: 72px;
  height: 72px;
`;

const ToneBall = styled.div`
  ${BallStyle};

  width: 60px;
  height: 60px;
`;

const TintBall = styled.div`
  ${BallStyle};

  width: 48px;
  height: 48px;
`;

const MainBall = styled.div`
  ${BallStyle};

  width: 36px;
  height: 36px;
`;

const ColorBall = ({ element }: Props) => {
  return (
    <ShadeBall style={{ backgroundColor: element.shade }}>
      <ToneBall style={{ backgroundColor: element.tone }}>
        <TintBall style={{ backgroundColor: element.tint }}>
          <MainBall
            style={{ backgroundColor: element.color, color: element.contrast }}
          >
            A
          </MainBall>
        </TintBall>
      </ToneBall>
    </ShadeBall>
  );
};

export default ColorBall;
