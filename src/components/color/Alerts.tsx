import { FunctionComponent } from "react";
import styled from "styled-components";
import { AlertThemes, alertTypes, AlertVariants } from "../../interfaces";
import { generateAlertTheme } from "../../utils/alerts";
import { SmartColorElement } from "./Element";
import { ColorElementDisplayShapes } from "./Element/interface";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 240px;
  gap: 12px;

  p {
    margin: 0;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
`;

const Item = styled.div`
  display: flex;
  flex: 1 1 40%;
  justify-content: center;
`;

type Props = {
  variants: Record<AlertVariants, string>;
  shape?: ColorElementDisplayShapes;
};

const Alerts: FunctionComponent<Props> = ({ variants, shape }) => {
  const alerts = generateAlertTheme<AlertThemes>(variants);

  return (
    <Container>
      <p>Alerts</p>

      <Frame>
        {alertTypes.map((key) => (
          <Item key={key}>
            <SmartColorElement element={alerts[key]} shape={shape} />
          </Item>
        ))}
      </Frame>
    </Container>
  );
};

export default Alerts;
