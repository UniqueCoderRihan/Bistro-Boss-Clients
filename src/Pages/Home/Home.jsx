import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Menu from '../PopularMenu/Menu';
import Featured from '../Featured/Featured';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Featured></Featured>
        </div>
    );
};

export default Home;