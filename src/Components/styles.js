import styled from 'styled-components';



export const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const PageName = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: #555;


`;

export const ComplementalContainer = styled.div`
    height: 100%;
    display:flex;
    margin-right: 10%;
    align-items: center;

`;

export const HeaderName = styled.h4`
    font-size: 15px;
    margin-right: 5%;
    color: #555;
    &:hover {
        border-bottom: 1px solid #ccc;
        cursor: pointer;
    }


`;



export const Drawer = styled.div`
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: #fff;
    z-index: 200000;
`;

export const DrawerText = styled.p`
    font-size: 18px;
    margin-top: 20px;
    &:hover {
        border-bottom: 1px solid #ccc;
        cursor: pointer;
    }


`;