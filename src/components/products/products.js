import React, { useState, useEffect} from 'react';
import { db, auth } from '../../firebase/firebase';
import { collection, onSnapshot, updateDoc, addDoc,  } from "firebase/firestore";
import { Container, ContainerFluid,CartB, CartButton, ProductsBox, ProductTitle, Image, Price, Productss, ProductImage, Title, PriceFav} from './productsStyles';
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
                    <ProductsBox>
                        {/* <Product productss={products}  /> */}
                        {/* All */}

                        {products.map((productsss) => (
                            <IndividualProduct key={productsss.id} productsss={productsss} />
                            // <Productss>
                            //     <ProductImage>
                            //         <Image src={productsss.image} alt='' />
                            //     </ProductImage>
                    
                            //     <Title>{productsss.title}</Title>
                            //     <PriceFav>
                            //         <Price><span>GH&#8373;</span>{productsss.price}</Price>
                            //         <FavoriteBorderOutlined style={{color: "pink"}} />
                            //     </PriceFav>

                            //     Add to cart
                            //     <CartButton onClick={handleAddToCart}>
                            //         <CartB>Add to cart</CartB>
                            //     </CartButton>
                            // </Productss>
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


