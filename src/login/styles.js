import styled from "styled-components";

export const DivFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ImgDiv = styled(DivFlex)`
    width: 70%;
    height: 80px;
    background: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
`