import { FunctionComponent } from "react";

import styled, { useTheme } from "styled-components";
import { findBestContrast } from "../../utils";

const StyledBlock = styled.div`
  height: 1rem;
  padding: 8px;
  margin-top: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    margin-left: 4px;
    margin-right: 4px;
  }
`;

const StyledContainer = styled.div``;

const PalleteBackground: FunctionComponent = ({}) => {
  const { background, fonts } = useTheme();

  const myJsxElement = Object.entries(background).map((value) => {
    const [presetName, presetColor]: [string, string] = value;

    return (
      <StyledBlock
        key={`bg-${presetName}`}
        style={{
          backgroundColor: presetColor,
          color: findBestContrast(presetColor, fonts),
        }}
      >
        <div>{presetName}</div>
        <div>{presetColor}</div>
      </StyledBlock>
    );
  });

  return (
    <StyledContainer>
      <div>
        Background
        {myJsxElement}
      </div>
    </StyledContainer>
  );
};

export default PalleteBackground;
