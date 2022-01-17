import styled from "styled-components";

export const DivFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const RegisterForm = styled.form`
    background-color: white;
    padding: 5%;
    box-shadow: 1px 1px 3px gray;
    border-radius: 3px;
` 
export const ErrorText = styled.p`
    color: #C62828;
    font-size: 13px;
`
export const SuccessContainer = styled(DivFlex)`
    justify-content: space-between;
    background-color: #66BB6A;
    color: white;
    box-shadow: 1px 1px 3px gray;
    border-radius: 3px;
    svg{
        margin:5px;
    }
    svg:hover{
        cursor: pointer;
    }
    p{
        display: flex;
        margin:5px;
        padding-left: 20px;
        justify-content: center;
        width: 100%;
    }
`
export const TurnoContainer = styled(DivFlex)`
    justify-content: flex-start;
    p{
        margin: 5px;
    }
`