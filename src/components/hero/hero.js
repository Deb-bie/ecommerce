import React, {useState} from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import Shoes from '../../assets/slide/slide1.png';
import Girl from '../../assets/slide/slide2.png';
import Bag from '../../assets/slide/slide3.png'
import { Arrow, Button, Container, Desc, Image, ImgContainer, InfoContainer, Slide, Title, Wrapper } from './heroStyles';


const Hero = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {

        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }

        else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }


    return (

        <Container>

            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined  />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                <Slide>
                    <InfoContainer>
                        <Title white>SUMMER SALE</Title>
                        <Desc>
                            {/* <p>DON'T COMPROMISE ON STYLE!</p> 
                            
                            <p>GET FLAT 30% OFF FOR NEW ARRIVALS.</p> */}

                            DON'T COMPROMISE ON STYLE!
                            <br />
                            GET FLAT 30% OFF FOR NEW ARRIVALS.
                        </Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>

                    <ImgContainer>
                        <Image src={Shoes} />
                    </ImgContainer>
                    
                </Slide>
                


                <Slide>

                    <InfoContainer>
                        <Title>SUMMER SALE</Title>

                        <Desc>
                            DON'T COMPROMISE ON STYLE! 
                            <br /> 
                            GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>

                        <Button>SHOP NOW</Button>

                    </InfoContainer>

                    
                    <ImgContainer>
                        <Image src={Bag} />
                    </ImgContainer>

                </Slide>


                <Slide>

                    <InfoContainer>
                            <Title white>SUMMER SALE</Title>

                            <Desc>
                                DON'T COMPROMISE ON STYLE! 
                                <br /> 
                                GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>

                            <Button>SHOP NOW</Button>
    
                    </InfoContainer>

                    <ImgContainer>
                        <Image src={Girl} />
                    </ImgContainer>

                </Slide>

            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Hero;

