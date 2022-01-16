import styled from 'styled-components';

export const ModalBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background-color: rgba(0,0,0,0.8);
    z-index: 9999;
`;
export const Container = styled.div`
    background-color: white;
    color: black;
    width: ${props => props.widthContainer || '300px'} ;
    height: ${props => props.heightContainer || '100px'} ;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        margin: 10px !important;
    }
`;