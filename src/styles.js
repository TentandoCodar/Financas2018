import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    background-size:cover;
    height: ${props => props.height}px;
    justify-content: center;
    
`;

export const Form = styled.form`
    width: 90%;
    max-width: 500px;
    max-height: 300px;
    background-color: #fff;
    
    border: 1px solid #eee;
    margin-top: 7%;
    animation: fadeIn 1000ms;
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
    align-text: left;
    margin-left: 5%;
    margin-top: 25px;

`;
export const InputLabel = styled.h3`
    font-size: 14px;
    font-weight: bold;
    margin-left: 10px;

`;
export const Input = styled.input`
    width: 90%
    padding: 8px;
    margin-top: 6px;
    border: 0;
    border-bottom: 1px solid #ccc;
    border-radius: 4px;

`;
export const ButtonContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    margin-top: 35px;
`;
export const Button = styled.button`
    padding: 10px 20px;
    width: 30%;
    border: 1px solid #ddd;
    background-color: #eee;
    border-radius: 8px;

`;

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: Roboto;
        

    }
    @keyframes fadeIn {
        from {
            opacity: 0,
            
        }
        to {
            opacity: 1,
            
        }
    }

`;