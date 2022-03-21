import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    // z-index: 9;
`;


export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: yellow;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    bottom: 0;
    margin: auto;
    z-index: 3;


    @media (max-width: 648px) {
        top: -80px;
    }
`;


export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${({slideIndex}) => slideIndex * -100}vw);
    transition: all 1.5s ease-in-out;

`;



export const Slide = styled.div` 
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0; 
`;


export const ImgContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;

`;


export const Image = styled.img`
    display: flex;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;

`;


export const InfoContainer = styled.div`
    z-index: 3;
    width: 100%;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top:0;
    bottom: 0;
    color: ${({white}) => (white ? '#fff' : '#000')};
    background: linear-gradient( 
        180deg
        , rgba(0,0,0,-0.8) 87%, rgba(0,0,0,0.6) 100%), linear-gradient( 
        180deg
        , rgba(0,0,0,0.2) 93%, transparent 100%);
`;




export const Title = styled.h1`
    width: 100%;
    position: relative;
    font-size: 70px;
    text-align: center;

    @media (max-width: 648px) {
        font-size: 50px;
    }
    
`;


export const Desc = styled.p`
    width: 100%;
    position: relative;
    font-size: 20px;
    text-align: center;
    margin: 50px 0;
    font-weight: 500;
    letter-spacing: 3px;


    @media (max-width: 648px) {
        font-size: 18px;
        letter-spacing: 1px;
    }


`;


export const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    background-color: gold;
    outline: none;
    border: none;
`; 

