import React from 'react';
import { ModalBackground, Container, Content} from './styles';

const Modal = ({msg='', children, widthModal, heightModal,loading=false}) => {
    return (
        <ModalBackground>
            <Container widthContainer={widthModal} heightContainer={heightModal} >
                {msg}
                <Content>
                    {children}
                </Content>
            </Container>
        </ModalBackground>
    );
}
export default Modal;
