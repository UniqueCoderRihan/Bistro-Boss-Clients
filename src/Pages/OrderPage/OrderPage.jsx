import React, { useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import orderPageImg from '../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../hooks/UseMenu';
import FoodCart from '../../Components/FoodCart/FoodCart';
import { useParams } from 'react-router-dom';

const OrderPage = () => {
    const { category } =useParams();
    const categories = ['Pizza','Soup','dessert','drinks','Salads'];
    const initalIndex = categories.indexOf(category)
    const [index, setIndex] = useState(initalIndex)
    const [menu] = UseMenu();
    const drinks = menu.filter(item => item.category === 'drinks')
    const salads = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const dessert = menu.filter(item => item.category === 'dessert')
    return (
        <div>
            <Cover img={orderPageImg} title='Order Menu'></Cover>
            {/* implement React Tabs System */}
            <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
                <TabList>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Salads</Tab>
                    <Tab>Drinks</Tab>

                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-3'>
                        {
                            pizza.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3'>
                        {
                            soup.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3'>
                        {
                            dessert.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3'>
                        {
                            salads.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3'>
                        {
                            drinks.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderPage;