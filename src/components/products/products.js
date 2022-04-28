import React, { useState, useEffect} from 'react';
import { db } from '../../firebase/firebase';
import { collection, onSnapshot } from "firebase/firestore";
import { Container, ContainerFluid, ProductsBox, ProductTitle, Underline} from './productsStyles';
import {FavoriteBorderOutlined} from '@material-ui/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import IndividualProduct from './individualProduct';


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "Products", "All_Products", "Product"), 
        (snapshot) => {

            setProducts(snapshot.docs.map((doc) => doc.data()))
        });

        return unsub;
    }, []);


    return (
        <div>
            {products.length > 0 && (
                <ContainerFluid>
                    <ProductTitle>All Products</ProductTitle>
                    <Underline />
                    <ProductsBox>
                        {products.map((productsss) => (
                            <IndividualProduct key={productsss.id} productsss={productsss} />
                        ))}
                    </ProductsBox>
                </ContainerFluid>
            )}

            {products.length < 1 && (
                <ContainerFluid>
                    <ProductTitle>Products</ProductTitle>
                    <Container>There are no available Products. Please wait ....</Container>
                </ContainerFluid>
            )}
        </div>
    )
}

export default Products;


