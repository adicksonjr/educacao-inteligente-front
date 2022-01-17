import styled from "styled-components";

export const DivFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const AboutDiv = styled(DivFlex)`
    padding: 5%;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 1px 1px 3px gray;
    border-radius: 3px;
    hr{
        width: 100%;
        height: 1px;
    }
`