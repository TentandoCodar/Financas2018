import React, {Fragment,useState,useEffect} from 'react';
import withReveal from 'react-reveal/withReveal';
import Fade from 'react-reveal/Fade';
import {Container, Form, Title, InputContainer,InputLabel, 
  Input,ButtonContainer,Button,GlobalStyle, ErrorText} from './styles';
import './index.css'
import api from '../../services/api';
function App({history}) {

  const [height,setHeight] = useState(0);
  const [image,setImage] = useState('./assets/ImagemForFinances.jpg')
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setHeight(window.innerHeight)
  },[])

  function handleSubmit(event) {
    event.preventDefault();
    api.post('/Login', {email: email,password: password}).then((resp) => {
      history.push('Dashboard', {token: resp.data.randomToken})
    }).catch((err) => {
      setError(true)
      setTimeout(() => {
        setError(false);
      }, 2000)
    })
    
    
  }

  return (
    <Fragment>
        <Container  height={height} className="Container">
            <Form className="FormContainer">
                <Title>Logue-se</Title>
                <InputContainer>
                  <InputLabel>Digite seu email</InputLabel>
                  <Input value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email"></Input>
                </InputContainer>
                <InputContainer>
                  <InputLabel>Digite sua senha</InputLabel>
                  <Input value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Senha"></Input>
                </InputContainer>
                {error && <ErrorText>Erro, credenciais incorretas</ErrorText>}
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
