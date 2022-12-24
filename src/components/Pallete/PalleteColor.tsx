import { FunctionComponent } from "react";
import { FontHelper } from "../../helpers";

import styled, { useTheme } from "styled-components";

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

type colorNames =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "background";

interface PalleteColor {
  colorName: colorNames;
}

const PalleteColor: FunctionComponent<PalleteColor> = ({ colorName }) => {
  const { theme } = useTheme();

  const myJsxElement = Object.entries(theme[colorName]).map((value) => {
    const [presetName, presetColor]: [string, string] = value;

    return (
      <StyledBlock
        key={`${colorName}-${presetName}`}
        style={{
          backgroundColor: presetColor,
          color: FontHelper.findBestContrast(presetColor, [
            theme.fonts.dark,
            theme.fonts.light,
          ]),
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
