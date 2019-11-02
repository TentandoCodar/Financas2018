import styled from 'styled-components';

export const ContainerA = styled.div`
    flex: 1;

`;

export const LoaddingContainer = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    height: ${props => props.height}px;
    align-items: center;
    justify-content: center;

`;



export const MainContent = styled.div`
    width: 100%;
    
`;

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: ${props => props.centered ? 'center' : ''};
    
`;

export const Card = styled.div`
    width: ${props => props.width};
    margin-left:5%;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 5px;
    margin-top: 25px;
    min-width: 150px;
    border-radius: 8px;

`;
export const Informations = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 5px;
    font-size: 14px;
`;

export const Month = styled.p`
    font-size: 12px;
    

`;

export const Expenses = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-left:20px;

`;

export const ComplementalInformation = styled.p`
    font-size: 15px;
    margin-left: 20px;

`;

export const ChartsContainer = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: ${props => props.align ? 'space-between' : 'center'   };
    margin-top: 45px;
    flex-direction: row;
`;

export const LatestAddedContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 10%;
    justify-content: space-between;
`;
export const LatestAddedTitle = styled.h1`
    font-size: 20px;
    font-weight: bold;
`;

export const LastestAddedContent = styled.div`
    display:flex;
    flex-direction: column;
    width: 30%;
    
`;

export const LastestAddedText = styled.p`
    font-size: 12px;
    
`;

