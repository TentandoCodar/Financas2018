import React, {Fragment} from 'react';
import withReveal from 'react-reveal/withReveal';
import Fade from 'react-reveal/Fade';
import {Container, Form, Title, Input,GlobalStyle} from './styles';


function App() {
  return (
    <Fragment>
        <Container>
            <Form>
                <Title>Logue-se</Title>
                <Input placeholder="Digite seu email"></Input>
            </Form>
        </Container>
        <GlobalStyle></GlobalStyle>
    </Fragment>
  );
}

export default App;
