import { FunctionComponent } from "react"
import PalleteColor from "./PalleteColor"
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    >div {
        margin-right: 16px;
    }
`
const StyledAlertColumn = styled.div`
    >div {
        margin-top: 8px;
    }

    >div:first-child {
        margin:0;
    }
`

const PalleteCreator: FunctionComponent = ({}) => {

    return (
        <StyledContainer>  
            <PalleteColor colorName={"background"} />

            <PalleteColor colorName={"primary"} />
            <PalleteColor colorName={"secondary"} />

            <StyledAlertColumn>
                <PalleteColor colorName={"info"} />
                <PalleteColor colorName={"success"} />
            </StyledAlertColumn>

            <StyledAlertColumn>
                <PalleteColor colorName={"warning"} />
                <PalleteColor colorName={"danger"} />
            </StyledAlertColumn>
        </StyledContainer>
    )
}

export default PalleteCreator