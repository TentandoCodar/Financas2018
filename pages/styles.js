import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;

`;

export const Form = styled.form`
    width: 90%;
    max-width: 500px;
    background-color: #fff;
    margin-left: 5%;
    border: 1px solid #eee;
    margin-top: 7%;
    text-align: center;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0 15px;
`;

export const Title = styled.h1`
    font-size: 25px;
    font-weight: bold;
    margin-top: 5px;


`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`;
export const InputLabel = styled.h3`
    font-size: 14px;
    font-weight: bold;
    margin-left: 10;

`;
export const Input = styled.input`
    width: 80%
    padding: 8px;
    margin-top: 6px;
    border: 0;
    border-bottom: 1px solid #ccc;
    border-radius: 4px;

`;

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: Roboto;

    }

`;