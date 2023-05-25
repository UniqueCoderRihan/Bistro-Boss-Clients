import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Menu from '../PopularMenu/Menu';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Featured></Featured>
        </div>
    );
};

export default Home;