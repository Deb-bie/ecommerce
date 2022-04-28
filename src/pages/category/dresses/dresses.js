import React, { useState, useEffect} from 'react';
import { AnnouncementContainer } from '../../../components/navbar/navbarStyles';
import { Wrapper, Image, X, Title, ProductImage} from '../styles';
import Shoe from '../../../assets/clothing/B1.jpg';
import { db } from '../../../firebase/firebase';
import { collection, onSnapshot } from "firebase/firestore";
import { Container, ContainerFluid, ProductsBox, ProductTitle, Underline} from '../../../components/products/productsStyles';
import IndividualProduct from '../../../components/products/individualProduct';


const Dresses = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "Products", "Dresses", "Dresses"), 
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
            <ProductImage>
                <Image src={Shoe} alt=''  />

                <X>
                    <Title>Dresses</Title>
                </X>
            
            </ProductImage>
        </Wrapper>


        <div>
            {products.length > 0 && (
                <ContainerFluid>
                    <ProductTitle>All Dresses</ProductTitle>
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
                    <ProductTitle>All Dresses</ProductTitle>
                    <Container>There are no available dresses. Please wait ....</Container>
                </ContainerFluid>
            )}
        </div>
    </>
  )
}

export default Dresses;