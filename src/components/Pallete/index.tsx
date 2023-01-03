import { FunctionComponent } from "react";
import styled from "styled-components";
import PalleteAlert from "./PalleteAlert";
import PalleteBackground from "./PalleteBackground";
import PalleteColor from "./PalleteColor";

const StyledContainer = styled.div`
  display: flex;
  > div {
    margin-right: 16px;
  }
`;
const StyledAlertColumn = styled.div`
  > div {
    margin-top: 8px;
  }

  > div:first-child {
    margin: 0;
  }
`;

const PalleteCreator: FunctionComponent = ({}) => {
  return (
    <StyledContainer>
      <PalleteBackground />

      <PalleteColor colorName={"primary"} />
      <PalleteColor colorName={"secondary"} />

      <StyledAlertColumn>
        <PalleteAlert colorName={"info"} />
        <PalleteAlert colorName={"success"} />
      </StyledAlertColumn>

      <StyledAlertColumn>
        <PalleteAlert colorName={"warning"} />
        <PalleteAlert colorName={"danger"} />
      </StyledAlertColumn>
    </StyledContainer>
  );
};

export default PalleteCreator;
