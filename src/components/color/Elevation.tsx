import { FunctionComponent } from "react";
import styled from "styled-components";
import { elevationPresets } from "../../interfaces";
import { generateElevationTheme } from "../../utils/elevation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 480px;
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

const Item = styled.div<{ bg: string; border: string }>`
  display: flex;
  flex: 1 1 40%;
  justify-content: center;
  align-items: center;

  background-color: ${({ bg }) => bg};
  border-radius: 5px;

  min-width: 50px;
  min-height: 50px;
`;

type Props = {
  bg: string;
  contrast: string;
};

const Elevation: FunctionComponent<Props> = ({ bg, contrast }) => {
  const elevations = generateElevationTheme(bg);

  return (
    <Container>
      <p>Elevations</p>

      <Frame>
        {elevationPresets.map((key) => (
          <Item key={key} bg={elevations[key]} border={contrast}>
            {key}
          </Item>
        ))}
      </Frame>
    </Container>
  );
};

export default Elevation;
