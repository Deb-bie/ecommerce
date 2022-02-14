import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import { auth, db } from '../../firebase/firebase';
import { collection, onSnapshot} from "firebase/firestore";
import { Container, ContainerFluid,CartB, CartButton, ProductsBox, ProductTitle, Image, Price, Productss, ProductImage, Title, PriceFav} from '../../components/products/productsStyles';
import {Quantity, Sum, Delete, DeleteButton, QuantityBox, Minus, Adds, TitlePrice} from '../../pages/cart/cartStyles';
import IndividualFavorites from './individualFavorites';




const Favorites = () => {

    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'users', `${auth.currentUser.uid}`, 'favorites'),
        (snapshot) => {
            setFavorite(snapshot.docs.map((doc) => 
                doc.data()
            ))
        });
        return unsub;
    }, []);


    const totalFav = favorite.length;


    return (
        <>

            <Navbar totalFav={totalFav} />

            {favorite.length > 0 && (
                <ContainerFluid>
                    <ProductTitle>My Cart</ProductTitle>
                    <ProductsBox>
                        {favorite.map((individualfavorite) => (
                            <IndividualFavorites  key={individualfavorite.ID} individualfavorite={individualfavorite} />
                        ))}
                    </ProductsBox>
                </ContainerFluid> 
            )}


            {favorite.length < 1 && (
                <ContainerFluid>
                    <ProductTitle>My Favorites</ProductTitle>
                    <Container>You do not have any favorites</Container>
                </ContainerFluid>
            )}
        
        </>
    )
}


export default Favorites;

