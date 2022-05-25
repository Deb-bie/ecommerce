import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase/firebase';
import { collection, onSnapshot} from "firebase/firestore";

import Navbar from '../../components/navbar/navbar'
import Hero from '../../components/hero/hero';
import Categories from '../../components/categories/categories'
import Products from '../../components/products/products';



const Home = () => {

    // const [cart, setCart] = useState([]);
    // const [favorite, setFavorite] = useState([]);

    // useEffect(() => {
    //     const unsub = onSnapshot(collection(db, 'users', `${auth.currentUser.uid}`, 'cart'),
    //     (snapshot) => {
    //         setCart(snapshot.docs.map((doc) => 
    //             doc.data()
    //         ))
    //     });
    //     return unsub;
    // }, []);

    // useEffect(() => {
    //     const unsub = onSnapshot(collection(db, 'users', `${auth.currentUser.uid}`, 'favorites'),
    //     (snapshot) => {
    //         setFavorite(snapshot.docs.map((doc) => 
    //             doc.data()
    //         ))
    //     });
    //     return unsub;
    // }, []);


    // const quantity = cart.map((quant) => {
    //     return quant.qty;
    // });


    // // reducing the quantity in a single value
    // const reducerofQ = (accumulator, currentValue) => accumulator+currentValue;

    // const totalQty = quantity.reduce(reducerofQ, 0);



    // const prices = cart.map((priced) => {
    //     return priced.totalPrice;
    // })

    // // reducing the price in a single value
    // const reducerofP = (accumulator, currentValue) => accumulator+currentValue;

    // const totalP = prices.reduce(reducerofP, 0);


    

    


    // const totalFav = favorite.length;



    return (
        <div>
            {/* {auth.currentUser ? (
                <Navbar totalQty={totalQty} totalFav={totalFav}   />
            ) 
            : (
                <Navbar />
            ) } */}

            <Navbar />

            <Hero />

            <Categories />

            <Products />
        </div>
    ); 
};

export default Home;
