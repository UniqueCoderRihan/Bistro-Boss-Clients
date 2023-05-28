import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import Menu from '../../PopularMenu/Menu'
import UseMenu from '../../../hooks/UseMenu';
import MenuCategory from '../../../Components/MenuCategory/MenuCategory';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
const OurMenu = () => {
    const [menu] = UseMenu();
    const offered = menu.filter(item=>item.category==='offered')
    const salads = menu.filter(item=>item.category==='salad')
    const soup = menu.filter(item=>item.category==='soup')
    const pizza = menu.filter(item=>item.category==='pizza')
    return (
        <div>
            <Helmet>
                <title>Bestro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our Menu'></Cover>
            <MenuCategory item={offered}></MenuCategory>
            <MenuCategory item={salads} title='Salads' img={saladImg}></MenuCategory>
            <MenuCategory item={soup} img={soupImg} title='Soup'></MenuCategory>
            <MenuCategory item={pizza} img={pizzaImg} title='Pizza'></MenuCategory>
        </div>
    );
};

export default OurMenu;