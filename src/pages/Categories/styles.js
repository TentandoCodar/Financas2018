import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: #999;

`;


export const CategoriesContainer = styled.div`
    width: 90%;
    border: 1px solid #ccc;
    margin-top: 25px;


`;
export const CategoryContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid #ccc;
    display:flex;
`;

export const Data = styled.p`
    width: 70%;
    background: transparent;
    border: 0;
    padding: 5px;
    
`;

export const Actions = styled.p`
    font-size: 14px;
    color: #ccc;
    margin-left: 4%;
    &:hover {
        color:#333;
        cursor: pointer;
    }
`;

export const EditModal = styled.div`
    width: 70%;
    max-width: 450px;
    border: 1px solid #ccc;
    margin-top: 25px;
    padding: 10px;
    text-align: center;

`;

export const EditContent = styled.div`
    flex-direction: row;
    display: flex;
    
`;

export const EditInput = styled.input`
    background: transparent;
    margin-left: 5px;
    margin-top: 1%;
    height: 20px;
    border: 0;
    border-bottom: 1px solid #eee;

`;

export const DeleteModal = styled.div`
    width: 70%;
    max-width: 450px;
    border: 1px solid #ccc;
    margin-top: 25px;
    padding: 10px;
    text-align: center;
`;

export const Button = styled.button`
    color: #fff;
    background-color: #333;
    padding:5px;
    border: 0;
    width: 60%;
    border-radius: 4px;
    margin-top: 20px;

`;

export const CreateContent = styled.div`
    width: 70%;
    max-width: 450px;
    border: 1px solid #ccc;
    margin-top: 25px;
    padding: 10px;
    text-align: center;
    
`;

export const CreateInput = styled.input`
    background: transparent;
    margin-left: 5px;
    margin-top: 1%;
    height: 20px;
    border: 0;
    border-bottom: 1px solid #eee;

`;