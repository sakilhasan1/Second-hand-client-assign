import React from 'react';
import Banner from './Banner';
import Categories from '../Categories/Categories';
import Card from './Card';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Categories></Categories>
            <Card></Card>
        </div>
    );
};

export default Home;