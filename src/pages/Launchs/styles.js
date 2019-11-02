import styled from 'styled-components';

export const ModalContainer = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    height: 40%;
    
`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: 20%;

`;

export const StyledButton = styled.button`
    border: 0;
    background: #333;
    color: #fff;
    margin-top: 5%;
    padding: 5px;
    width: 30%;
    margin-right: 15px;
`;

export const ModalForm = styled.div`
    width: 50%;
    height: 40%;
    display: flex;
    text-align: center;
    flex-direction: column;
    margin-top: 25px;

`;
export const RowText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;

export const ModalTitle = styled.h1`
    font-size: 20px;
    color: #999;
    font-weight: bold;

`;
export const InputTitle = styled.h4`
    font-size: 16px;
    color: #999;
    flex: 0.5;
`;

export const GreatInput = styled.input`
    width: 50%;
    border: 1px solid #ddd;
`;

export const LessInput = styled.input`
    width: 40%;
    border: 1px solid #ddd;
`;
