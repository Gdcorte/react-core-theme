import { FunctionComponent } from "react";

import styled, { useTheme } from "styled-components";
import { BasicColorSystemType } from "../../interfaces/colors";
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

interface PalleteColor {
  colorName: BasicColorSystemType;
}

const PalleteColor: FunctionComponent<PalleteColor> = ({ colorName }) => {
  const { colors, fonts } = useTheme();

  const myJsxElement = Object.entries(colors[colorName]).map((value) => {
    const [presetName, presetColor]: [string, string] = value;

    return (
      <StyledBlock
        key={`${colorName}-${presetName}`}
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
        {colorName}
        {myJsxElement}
      </div>
    </StyledContainer>
  );
};

export default PalleteColor;
