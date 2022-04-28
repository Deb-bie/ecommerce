import React, { useState, useEffect} from 'react';
import { AnnouncementContainer } from '../../../components/navbar/navbarStyles';
import { Wrapper, Image, X, Title, ProductImage} from '../styles';
import Bag from '../../../assets/clothing/B1.jpg';
import { db } from '../../../firebase/firebase';
import { collection, onSnapshot } from "firebase/firestore";
import { Container, ContainerFluid, ProductsBox, ProductTitle, Underline} from '../../../components/products/productsStyles';
import {FavoriteBorderOutlined} from '@material-ui/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import IndividualProduct from '../../../components/products/individualProduct';


const Bags = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "Products", "Bags", "Bags"), 
        (snapshot) => {

            setProducts(snapshot.docs.map((doc) => doc.data()))
        });

        return unsub;
    }, []);


  return (
    <>
        <AnnouncementContainer display>
            Super Deal! Free Shipping on Orders Over <span>&nbsp; GH&#8373;</span>50
        </AnnouncementContainer>

        <Wrapper>
            {/* <Container> */}
                <ProductImage>
                    <Image src={Bag} alt=''  />

                    <X to='/bags'>
                        <Title>Bags</Title>
                    </X>
                
                </ProductImage>

                {/* <X to='/bags'>
                        <Title>Tops</Title>
                    </X> */}
                
            {/* </Container> */}
        </Wrapper>


        <div>
            {products.length > 0 && (
                <ContainerFluid>
                    <ProductTitle>All Bags</ProductTitle>
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
                    <ProductTitle>All Bags</ProductTitle>
                    <Container>There are no available bags. Please wait ....</Container>
                </ContainerFluid>
            )}
        </div>









    </>
  )
}

export default Bags;