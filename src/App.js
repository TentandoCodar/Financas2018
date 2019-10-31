import React, {Fragment,useState,useEffect} from 'react';
import withReveal from 'react-reveal/withReveal';
import Fade from 'react-reveal/Fade';
import {Container, Form, Title, InputContainer,InputLabel, Input,ButtonContainer,Button,GlobalStyle} from './styles';
import './index.css';

function App() {

  const [height,setHeight] = useState(0);
  const [image,setImage] = useState('./assets/ImagemForFinances.jpg')
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  useEffect(() => {
    setHeight(window.innerHeight)
  },[])

  function handleSubmit(event) {
    
  }

  return (
    <Fragment>
        <Container height={height} className="FormContainer">
            <Form>
                <Title>Logue-se</Title>
                <InputContainer>
                  <InputLabel>Digite seu email</InputLabel>
                  <Input value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email"></Input>
                </InputContainer>
                <InputContainer>
                  <InputLabel>Digite sua senha</InputLabel>
                  <Input value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Senha"></Input>
                </InputContainer>
                <ButtonContainer>
                  <Button onClick={handleSubmit}>Logar</Button>
                </ButtonContainer>
            </Form>
        </Container>
        <GlobalStyle></GlobalStyle>
    </Fragment>
  );
}

export default App;
