import React from 'react';
import Navbar from '../../components/navbar/navbar'
import Hero from '../../components/hero/hero';
import Categories from '../../components/categories/categories'



const Home = () => {
    return (
        <div>
            <Navbar />

            <Hero />

            <Categories />
        </div>
    ); 
};

export default Home;
