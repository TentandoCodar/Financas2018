import React, {useEffect,useState, Fragment} from 'react';
import './index.css'
import { ContainerA, LoaddingContainer,
    MainContent, CardsContainer, Card,Informations, Expenses,
    Month, ComplementalInformation, ChartsContainer, LatestAddedContainer, LastestAddedContent, 
    LastestAddedText, LatestAddedTitle
} from './styles';
import animation from '../../assets/loadder.json';
import '../bootstrap/bootstrap.min.css';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import Lottie from 'lottie-react-web';


import {Container} from 'reactstrap';
import api from '../../services/api';
import Header from '../../Components/Header';
export default function Dashboard({history}) {

    const [isLoadding, setIsLoadding] = useState(true);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [isOpenNavBar, setIsOpenNavBar] = useState(false);
    
    const [latestExpensesAdded, setLatestExpensesAdded] = useState([]);
    const [latestRevenuesAdded, setLatestRevenuesAdded] = useState([]);
    const [expenseNotPay, setExpenseNotPay] = useState(0);
    const [expensePay, setExpensePay] = useState(0);
    const [revenuePay, setRevenuePay] = useState(0);
    const [revenueNotPay, setRevenueNotPay] = useState(0);
    const [chartDataExpenses, setChartDataExpenses] = useState([]);
    const [chartDataRevenues, setChartDataRevenues] = useState([]);

    useEffect(() => {
        setHeight(window.innerHeight);
        console.log(history);
        setWidth(window.innerWidth);
        localStorage.setItem('Token', history.location.state.token);
        window.onresize = () => {
            setWidth(window.innerWidth);
        }
        
        callData();
        
    },[])
    async function callData() {
        const response = await api.post('/ExpenseIndex');
        const {latestExpensesAdded, latestRevenuesAdded, 
            totalExpenseNotPay, totalExpensePay, 
            totalRevenueNotPay, totalRevenuePay, categoriesRevenuesSum, categoriesExpensesSum} = response.data;
        console.log(totalExpenseNotPay[0])
        setLatestExpensesAdded(latestExpensesAdded);
        setLatestRevenuesAdded(latestRevenuesAdded);
        setExpenseNotPay(totalExpenseNotPay[0].Expenses);
        setExpensePay(totalExpensePay[0].Expenses);
        setRevenueNotPay(totalRevenueNotPay[0].Revenues);
        setRevenuePay(totalRevenuePay[0].Revenues);
        setChartDataExpenses(categoriesExpensesSum);
        setChartDataRevenues(categoriesRevenuesSum);
        setIsLoadding(false);
        console.log(response.data)
    }

    const toggle = () => setIsOpenNavBar(!isOpenNavBar);

    

    function returnBooleanBasedOnWidth() {
        if(width > 850) {
            return true;
        }
        else {
            return false;
        }
    }
    

  return (
    <Container>
        
        {isLoadding && 
            <LoaddingContainer height={height}>
                <Lottie options={{
                    animationData: animation,
                }} width={75} height={75}></Lottie>
            </LoaddingContainer>
        }
        <Header width={width}></Header>
        
        <MainContent>
            
                <CardsContainer centered={width < 700}>
                    <Card width={returnBooleanBasedOnWidth() ? '20%' : '80%'}>
                        <Informations>
                            <p>Despesas não confirmadas</p>
                            <p style={{marginRight: 10}}>JUL</p>
                        </Informations>
                        <Expenses> {expenseNotPay ? 'R$' +expenseNotPay : 'Nenhuma'}</Expenses>
                        <ComplementalInformation>Total: {expenseNotPay + expensePay}</ComplementalInformation>
                    </Card>
                    <Card width={returnBooleanBasedOnWidth() ? '20%' : '80%'}>
                        <Informations>
                            <p>Despesas confirmadas</p>
                            <p style={{marginRight: 10}}>JUL</p>
                        </Informations>
                        <Expenses> {expensePay ? 'R$' +expensePay : 'Nenhuma'}</Expenses>
                        <ComplementalInformation>Total: {expenseNotPay + expensePay}</ComplementalInformation>
                    </Card>
                    <Card width={returnBooleanBasedOnWidth() ? '20%' : '80%'}>
                        <Informations>
                            <p>Receitas confirmadas</p>
                            <p style={{marginRight: 10}}>JUL</p>
                        </Informations>
                        <Expenses> {revenueNotPay ? 'R$' +revenueNotPay : 'Nenhuma'}</Expenses>
                        <ComplementalInformation>Total: {revenueNotPay + revenuePay}</ComplementalInformation>
                    </Card>
                    <Card width={returnBooleanBasedOnWidth() ? '20%' : '80%'}>
                        <Informations>
                            <p>Despesas não confirmadas</p>
                            <p style={{marginRight: 10}}>JUL</p>
                        </Informations>
                        <Expenses> {revenuePay ? 'R$' + revenuePay : 'Nenhuma'}</Expenses>
                        <ComplementalInformation>Total: {revenueNotPay + revenuePay}</ComplementalInformation>
                    </Card>
                    
                </CardsContainer>

                <ChartsContainer align={returnBooleanBasedOnWidth()}>
                    <BarChart width={350} height={200} data={chartDataExpenses} margin={{
                        top:5, right: 5, left: 5, bottom: 5
                    }}>
                        <CartesianGrid strokeDasharray='1 1'></CartesianGrid>
                        <XAxis dataKey="name"></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Bar dataKey="Total"></Bar>

                    </BarChart>
                    <BarChart width={350} height={200} data={chartDataRevenues} margin={{
                        top:5, right: 5, left: 5, bottom: 5
                    }}>
                        <CartesianGrid strokeDasharray='1 1'></CartesianGrid>
                        <XAxis dataKey="name"></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Bar dataKey="Total"></Bar>

                    </BarChart>
                </ChartsContainer>
                <LatestAddedContainer>
                    <LastestAddedContent>
                        <LatestAddedTitle>Ultimas despesas</LatestAddedTitle>
                        {latestExpensesAdded.map(expense => (
                            <LastestAddedText>{expense.name}:R${expense.value}</LastestAddedText>
                        ))}
                        
                    </LastestAddedContent>
                    <LastestAddedContent>
                        <LatestAddedTitle>Ultimas Receitas</LatestAddedTitle>
                        {latestRevenuesAdded.map(revenues => (
                            <LastestAddedText>{revenues.name}:R${revenues.value}</LastestAddedText>
                        ))}
                        
                    </LastestAddedContent>
                </LatestAddedContainer>
        </MainContent>
    </Container>
  );
}
