import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import { auth, db } from '../../firebase/firebase';
import { collection, onSnapshot} from "firebase/firestore";
import { Container, ContainerFluid,CartB, CartButton, ProductsBox, ProductTitle, Image, Price, Productss, ProductImage, Title, PriceFav} from '../../components/products/productsStyles';
import {Quantity, Sum, Delete, DeleteButton, QuantityBox, Minus, Adds, TitlePrice} from './cartStyles';
import {Remove, Add} from '@material-ui/icons';
import IndividualCart from './individualCart'
import Signin from '../signin/signin';




const Cart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'users', `${auth.currentUser.uid}`, 'cart'),
        (snapshot) => {
            setCart(snapshot.docs.map((doc) => 
                doc.data()
            ))
        });
        return unsub;
    }, []);


    const quantity = cart.map((quant) => {
        return quant.qty;
    });


    // reducing the quantity in a single value
    const reducerofQ = (accumulator, currentValue) => accumulator+currentValue;

    const totalQty = quantity.reduce(reducerofQ, 0);



    const prices = cart.map((priced) => {
        return priced.totalPrice;
    })

    // reducing the price in a single value
    const reducerofP = (accumulator, currentValue) => accumulator+currentValue;

    const totalP = prices.reduce(reducerofP, 0);



    return (
        <>
            <Navbar totalQty={totalQty} />
            {cart.length > 0 && (
                <ContainerFluid>
                    <ProductTitle>My Cart</ProductTitle>
                    <ProductsBox>
                        {cart.map((individualcart) => (
                            <IndividualCart  key={individualcart.ID} individualcart={individualcart} />
                        ))}
                    </ProductsBox>

                    <div>
                        Quantity: {totalQty}
                        <br/>
                        total Price: {totalP}  
                    </div>
                </ContainerFluid>   
            )}

            {cart.length < 1 && (
                <ContainerFluid>
                    <ProductTitle>My Cart</ProductTitle>
                    <Container>Your Cart is empty</Container>
                </ContainerFluid>
            )}
        </>

    )
}


export default Cart;

