import React, {Fragment, useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';

import { Header,
    PageName,
    ComplementalContainer,
    HeaderName,
    Drawer,
    DrawerText } from './styles';
import api from '../services/api';
import {MdReorder, MdClose} from 'react-icons/md';

function HeaderContent({history, width}) {
    const [drawer, setDrawer] = useState(false);
    const [drawerAnimation, setDrawerAnimation] = useState(false);
    const [valWidth, setValWith] = useState(width);
    

    useEffect(() => {
        setValWith(width);
    },[width])

    function drawerIsOpen() {
        if(drawer && valWidth < 850) {
            return true;
        }
        else{
            return false;
        }
    }
    async function logout() {
        const token = await localStorage.getItem('Token');
        

        await api.post('/Destroy', {token: token});
        history.push('/');
    }
    function navigate(page) {
        history.push(page);
    }
    
    function reverseDrawer() {
        
        setTimeout(() => {
            setDrawer(false)
        },1000)
    }    
    

  return (
    <Fragment>
    {drawerIsOpen() &&
        <Drawer className={drawerAnimation ? "Drawer" : "DrawerLeave"}>
            <MdClose onClick={() => {
                setDrawerAnimation(false)
                reverseDrawer()}
            } size={25}></MdClose>
            <DrawerText onClick={() => navigate('DashBoard')}>Dashboard</DrawerText>
            <DrawerText onClick={() => navigate('Launchs')}>Lançamentos</DrawerText>
            <DrawerText onClick={() => navigate('Categories')}>Categorias</DrawerText>
            <DrawerText onClick={logout}>Sair</DrawerText>
    </Drawer> }
        <Fragment>
            <Header>
                <PageName>Dinheiro na mão</PageName>
                {
                    valWidth > 850?
                    <ComplementalContainer>
                        <HeaderName onClick={() => navigate('DashBoard')}>Dashboard</HeaderName>
                        <HeaderName onClick={() => navigate('Launchs')}>Lançamentos</HeaderName>
                        <HeaderName onClick={() => navigate('Categories')}>Categorias</HeaderName>
                        <HeaderName onClick={logout}>Sair</HeaderName>
                    </ComplementalContainer> :
                    <MdReorder onClick={() => {
                        setDrawer(!drawer);
                        setDrawerAnimation(true)
                    }} size={25}></MdReorder>
                }
            </Header>
        
    </Fragment>
    
    </Fragment>
  );
}
export default withRouter(HeaderContent);