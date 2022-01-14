import styled from "styled-components";

export const DivFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LoadingContainer = styled(DivFlex)`
    align-items: flex-start;
    margin-top: 10%;
`
export const FilterButton = styled(DivFlex)`
    color: black;
    p{
        font-size: 15px;
        margin: 0;
    }
    svg{
        width: 15px;
        height: 15px;
    }
`