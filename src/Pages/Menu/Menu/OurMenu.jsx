import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import Menu from '../../PopularMenu/Menu'
const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bestro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our Menu'></Cover>
            <Menu></Menu>
            <Cover img={menuImg} title='our Menu'></Cover>
            <Menu></Menu>
            <Cover img={menuImg} title='our Menu'></Cover>
            <Menu></Menu>
            <Cover img={menuImg} title='our Menu'></Cover>
            <Menu></Menu>
            <Cover img={menuImg} title='our Menu'></Cover>
            
        </div>
    );
};

export default OurMenu;