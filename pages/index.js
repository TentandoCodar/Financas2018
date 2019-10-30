import React, {Fragment} from 'react';
import withReveal from 'react-reveal/withReveal';
import Fade from 'react-reveal/Fade';
import {Container, Form, Title, InputContainer,InputLabel, Input,GlobalStyle} from './styles';


function App() {
  return (
    <Fragment>
        <Container>
            <Form>
                <Title>Logue-se</Title>
                <InputContainer>
                  <InputLabel>Digite seu email</InputLabel>
                  <Input placeholder="Email"></Input>
                </InputContainer>
            </Form>
        </Container>
        <GlobalStyle></GlobalStyle>
    </Fragment>
  );
}

export default App;
