import React, { useState, useEffect} from 'react';
import { db, auth } from '../../firebase/firebase';
import { collection, updateDoc, addDoc, doc } from "firebase/firestore";
import { CartB, CartButton, Image, Price, Productss, ProductImage, Title, PriceFav} from './productsStyles';
import {FavoriteBorderOutlined} from '@material-ui/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const IndividualProduct = ({productsss}) => {
    const location = useLocation();

    const navigate = useNavigate();

    const handleAddToCart = async() => {
        if (auth.currentUser !== null){

            const ref = await addDoc(collection(db, 'users', `${auth.currentUser.uid}`, 'cart'),{
                title: productsss.title,
                description: productsss.description,
                price: productsss.price,
                stock: productsss.stock,
                image: productsss.image,
                qty: productsss.qty,
                totalPrice: productsss.totalPrice,
            })

            await updateDoc(doc(db, 'users', `${auth.currentUser.uid}`, 'cart', `${ref.id}`), {
                id: ref.id
            })

          navigate('/cart');

          return ref;

         
        }
        else{
          navigate('/signup')
        }
      }


    return (

        <Productss>
            <ProductImage>
                <Image src={productsss.image} alt='' />
            </ProductImage>

            <Title>{productsss.title}</Title>
            <PriceFav>
                <Price big><span>GH&#8373;</span>{productsss.price}</Price>
                <FavoriteBorderOutlined style={{color: "pink"}} />
            </PriceFav>

            <CartButton onClick={handleAddToCart}>
                <CartB>Add to cart</CartB>
            </CartButton>
        </Productss>
    )
}


export default IndividualProduct;







