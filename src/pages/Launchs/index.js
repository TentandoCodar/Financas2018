import React, {useEffect, useState, Fragment} from 'react';

import { ButtonContainer, StyledButton,ModalContainer, ModalTitle, Row, RowText, ModalForm, InputTitle, GreatInput, LessInput } from './styles';
import {Container} from 'reactstrap';
import Header from '../../Components/Header';
import api from '../../services/api';
import './index.css'
import { Input } from '../Login/styles';
export default function Launchs() {
    const [width, setWidth] = useState(0);
    const [type, setType] = useState('Despesa');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [value,setValue] = useState(0);
    const [date, setDate] = useState('');
    const [repetition, setRepetition] = useState('');
    const [category,setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [textIfSuccess, setTextIfSuccess] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.onresize = () => {
        setWidth(window.innerWidth);
    }
    getCategories();
  },[])
  function clearData() {
    setName('');
    setValue(0);
    setDate('');
    setRepetition('');
    setCategory('');
    
  }

  async function getCategories() {
    await api.post('/Category/Index').then((resp) => {
        setCategories(resp.data);
        setCategory(resp.data[0].id)
    }).catch((err) => {

    })
  }

  function openModal(types) {
      setType(types);
      setModalIsOpen(true)
  }
  

  async function handleSubmit() {
    const month = date.substring(3,5);
    const day = date.substring(0,2)
    
    
    const RealDate = '2019-' + month + '-' + day + ' 03:00:00';
    
    await api.post('/ExpenseCreate', {name, Date: RealDate, value, Category: category, Repetition: repetition, RepetitionQTD: 1, Type: type});
    
    clearData();
    Success();
  }

  function Success() {
      setTextIfSuccess(true);
      setTimeout(() => {
        setTextIfSuccess(false);
      },2000)
  }
  return (
    <Container>
        <Header width={width}></Header>
        <ButtonContainer>
            <StyledButton onClick={() => openModal('Despesa')}>Nova Despesa</StyledButton>
            <StyledButton onClick={() => openModal('Receita')}>Nova Receita</StyledButton>
        </ButtonContainer>
        {modalIsOpen && <ModalContainer width={width}>
            <ModalForm className="Form">
                <ModalTitle>Adicionar nova {type}</ModalTitle>
                <RowText>
                    <InputTitle>Nome</InputTitle>
                    <InputTitle>Valor</InputTitle>
                </RowText>
                <Row>
                    <GreatInput value={name} onChange={(e) => {setName(e.target.value)}}></GreatInput>
                    <LessInput value={value} onChange={(e) => {setValue(e.target.value)}}></LessInput>
                </Row>
                <RowText>
                    <InputTitle>Data</InputTitle>
                    <InputTitle>Categoria</InputTitle>
                </RowText>
                <Row>
                    <GreatInput value={date} onChange={(e) => {setDate(e.target.value)}}></GreatInput>
                    {categories.length > 0 && <select  onChange={(e) => {setCategory(e.target.value); console.log(e.target.value)}}>
                        
                        {categories.map((categorie, index) => {
                            return (
                                <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
                            );
                        })}
                    </select>}
                </Row>
                <RowText>
                    <InputTitle>Se repete a cada</InputTitle>
                    
                </RowText>
                <Row>
                    <select value={repetition} onChange={(e) => setRepetition(e.target.value)}>
                        <option value="Day">Dia</option>
                        <option value="Month">Mes</option>
                        <option value="Year">Ano</option>
                    </select>
                    
                </Row>
                <button onClick={handleSubmit} type="submit" className="SubmitButton">Adicionar {type}</button>
                <button onClick={() => {setModalIsOpen(false)}} className="SubmitButton">Fechar modal</button>
                
            </ModalForm>
        </ModalContainer>}

        {textIfSuccess && <p>Adicionado com sucesso</p>}
        
    </Container>
  );
}
