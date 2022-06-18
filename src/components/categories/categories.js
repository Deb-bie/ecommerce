import React, { useState } from 'react'
import { CategoriesContainer, Header, Wrapper, Image, Title, Container, X, Underline } from './categoriesStyles'
import Shoes from '../../assets/slide/slide1.png';




const Categories = () => {
    return (
        <CategoriesContainer>
            <Header>Categories</Header>

            <Underline></Underline>

            <Wrapper>
                <Container>
                    <Image src={Shoes} />
                    <X to='/tops'>
                        <Title>Tops</Title>
                    </X>
                </Container>

                <Container>
                    <Image src={Shoes} />
                    <X to='/dresses'>
                        <Title>Dresses</Title>
                    </X>
                </Container>

                <Container>
                    <Image src={Shoes} />
                    <X to='/bags'>
                        <Title>Bags</Title>
                    </X>
                </Container>

                <Container>
                    <Image src={Shoes} />
                    <X to='/shoes'>
                        <Title>Shoes</Title>
                    </X>
                </Container>

                </Wrapper>

        </CategoriesContainer>
    )
}

export default Categories;
