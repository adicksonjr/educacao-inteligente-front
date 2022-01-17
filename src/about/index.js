import { Container, Typography } from '@mui/material';
import React from 'react';
import { AboutDiv } from './styles';

const About = () => 
    (
        <Container maxWidth='xl'>
            <AboutDiv>
                <Typography variant="h5" gutterBottom component="div">
                    1. Sobre mim
                </Typography>
                <Typography variant="body1" gutterBottom align='left'>
                    Meu nome é Adickson sou Graduando no curso de Ciência da Computação na UESPI - Universidade Estadual do Piauí , 
                    como experiência profissional já trabalhei como estagiário na FAPEPI (Fundação de Amparo à Pesquisa do Estado do Piauí) 
                    mas na parte de manutenção e com algumas aplicações com page builders como WordPress e Drupal, atualmente estou como 
                    estagiário no TRT22 em que já utilizei Asp.net Core. Com Reactjs a minha experiência se deu através da implementação de um 
                    site para uma clínica estética e de um projeto do laboratório Lambda da UESPI o qual fazia avaliação de imagens através do 
                    uso de uma rede neural para detectar covid.
                </Typography>
                <hr/>
                <Typography variant="h5" gutterBottom component="div">
                    2. Sobre as ferramentas ultilizadas
                </Typography>
                <Typography variant="body1" gutterBottom align='left'>
                    Para desenvolver o projeto utilizei a linguagem reactjs; 
                    <li>
                        Requisições na API:
                        <ul>Axios</ul>
                    </li>
                    <li>
                        Layout:
                        <ul>Material UI</ul>
                        <ul>Bootstrap</ul>
                        <ul>Styled Components</ul>
                    </li> 
                    <li>
                        Rotas:
                        <ul>React Router Dom</ul>
                    </li>
                    <li>
                        SVG’s:
                        <ul>React Icons</ul>
                        <ul>React Spinkit</ul>
                    </li>
                </Typography>
                <hr/>
                <Typography variant="h5" gutterBottom component="div">
                    3. Dificuldades encontradas
                </Typography>
                <Typography variant="body1" gutterBottom align='left'>
                    Minha principais dificuldades foram, fazer a validação de todos os campos da aplicação e  filtrar a busca na api 
                    de maneiro correta
                </Typography>
                <hr/>
                
                <Typography variant="h5" gutterBottom component="div">
                    4. Sugestões
                </Typography>
                <Typography variant="body1" gutterBottom align='left'>
                    Como sugestões seria possível pegar mais dados da api para poder avaliar diferentes condições das escolas
                </Typography>
            </AboutDiv>
        </Container>
    );

export default About;