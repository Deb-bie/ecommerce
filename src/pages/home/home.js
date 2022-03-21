import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase/firebase';

import Navbar from '../../components/navbar/navbar'
import Hero from '../../components/hero/hero';
import Categories from '../../components/categories/categories'
import Products from '../../components/products/products';



const Home = () => {

    return (
        <div>
            <Navbar />

            <Hero />

            <Categories />

            <Products />
        </div>
    ); 
};

export default Home;
