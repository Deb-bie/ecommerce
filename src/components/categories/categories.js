import React, { useState } from 'react'
import { CategoriesContainer, Header, Wrapper, Image, Info, Title, Button, Container, ButtonLink, X } from './categoriesStyles'
import Shoes from '../../assets/slide/brown_shoes.jpg';




const Categories = () => {
    return (
        <CategoriesContainer>
                <Header>Categories</Header>

                <Wrapper>
                <Container>
                    <Image src={Shoes} />
                    <X>
                        <Title>Tops</Title>
                    </X>
                    <Info>
                        <Button>
                            <ButtonLink to='#'>Shop</ButtonLink>
                        </Button>
                    </Info>
                </Container>

                <Container>
                    <Image src={Shoes} />
                    <X>
                        <Title>Dresses</Title>
                    </X>
                    <Info>
                        <Button>
                            <ButtonLink to='#'>Shop</ButtonLink>
                        </Button>
                    </Info>
                </Container>

                <Container>
                    <Image src={Shoes} />
                    <X>
                        <Title>Bags</Title>
                    </X>
                    <Info>
                        <Button>
                            <ButtonLink to='#'>Shop</ButtonLink>
                        </Button>
                    </Info>
                </Container>

                <Container>
                    <Image src={Shoes} />
                    <X>
                        <Title>Shoes</Title>
                    </X>
                    <Info>
                        <Button>
                            <ButtonLink to='#'>Shop</ButtonLink>
                        </Button>
                    </Info>
                </Container>

                </Wrapper>

        </CategoriesContainer>
    )
}

export default Categories;
