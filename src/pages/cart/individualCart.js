import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import { auth, db } from '../../firebase/firebase';
import { collection, onSnapshot, doc, updateDoc, deleteDoc} from "firebase/firestore";
import { Container, ContainerFluid,CartB, CartButton, ProductsBox, ProductTitle, Image, Price, Productss, ProductImage, Title, PriceFav} from '../../components/products/productsStyles';
import {Quantity, Sum, Delete, DeleteButton, QuantityBox, Minus, Adds, TitlePrice} from './cartStyles';
import {Remove, Add} from '@material-ui/icons';




const IndividualCart = ({ individualcart}) => {

    const handleProductIncrease = async (e) => {
        individualcart.qty = individualcart.qty + 1;

        individualcart.totalPrice = individualcart.qty*individualcart.price;

        await updateDoc(doc(db, 'users', `${auth.currentUser.uid}`, 'cart', `${individualcart.id}`), {
            qty: individualcart.qty,
            totalPrice: individualcart.totalPrice
        })
    }

    const handleProductDecrease = async(e) => {
        individualcart.qty = individualcart.qty - 1;
        individualcart.totalPrice = individualcart.qty*individualcart.price;

        await updateDoc(doc(db, 'users', `${auth.currentUser.uid}`, 'cart', `${individualcart.id}`), {
            qty: individualcart.qty,
            totalPrice: individualcart.totalPrice
        })
    } 


    const handleRemove = async(e) => {
        await deleteDoc(doc(db, 'users', `${auth.currentUser.uid}`, 'cart', `${individualcart.id}`))

    }
    return(
        <Productss>
            <ProductImage>
                <Image src={individualcart.image} />
            </ProductImage>

            <TitlePrice>
                <Title>{individualcart.title}</Title>
                <Price><span>GH&#8373;</span>{individualcart.price}</Price>
            </TitlePrice>

            <Quantity>Quantity</Quantity>

            <QuantityBox>
                <Minus onClick={handleProductDecrease}>
                    <Remove />
                </Minus>

                {individualcart.qty}

                <Adds onClick={handleProductIncrease}>
                    <Add />
                </Adds>
            </QuantityBox>

            <Sum>Price: <span>GH&#8373;</span>{individualcart.totalPrice} </Sum>

            <DeleteButton onClick={handleRemove}>
                <Delete>Remove</Delete>
            </DeleteButton>
        </Productss>
    )
}


export default IndividualCart;

