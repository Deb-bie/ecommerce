import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import { auth, db } from '../../firebase/firebase';
import { collection, onSnapshot, doc, updateDoc, deleteDoc} from "firebase/firestore";
import { Container, ContainerFluid,CartB, CartButton, ProductsBox, ProductTitle, Image, Price, Productss, ProductImage, Title, PriceFav} from '../../components/products/productsStyles';
import {Delete, DeleteButton, TitlePrice} from './favoritesStyles';




const IndividualFavorites = ({ individualfavorite }) => {

    const handleRemove = async(e) => {
        await deleteDoc(doc(db, 'users', `${auth.currentUser.uid}`, 'favorites', `${individualfavorite.id}`))
    }

    

    return(
        <Productss>
            <ProductImage>
                <Image src={individualfavorite.image} />
            </ProductImage>

            <TitlePrice>
                <Title>{individualfavorite.title}</Title>
                <Price><span>GH&#8373;</span>{individualfavorite.price}</Price>
            </TitlePrice>

            <DeleteButton onClick={handleRemove}>
                <Delete>Remove</Delete>
            </DeleteButton>
        </Productss>
    )
}


export default IndividualFavorites;

