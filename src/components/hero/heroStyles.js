import styled from "styled-components";
// import { Link } from 'react-router-dom';


export const Container = styled.div`
    // width: 100%;
    height: auto;
    // height: 70vh;
    display: flex;
    overflow: hidden;
    padding: 30px;
    z-index: 9;

    @media (max-width: 816px) {
        // height: 120vh;
        // gap: 10px;

    }
`;


export const Arrow = styled.div`
    // width: 50px;
    // height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 50vh;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    bottom: 0;
    margin: auto;
    z-index: 3;


    @media (max-width: 648px) {
        top: -80px;
        z-index: 1;
    }
`;

export const Wrapper = styled.div`
    height: auto;
    display: flex;
    transform: translateX(${({slideIndex}) => slideIndex * -100}vw);
    transition: all 1.5s ease-in-out;

    @media (max-width: 816px) {
        // gap: 70px;
    }
`;

export const Slide = styled.div` 
    width: 100vw;
    // height: 60vh;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    top: 0;
    bottom: 0; 
`;


export const ImgContainer = styled.div`
    display: flex;

    @media (max-width: 816px) {
        padding-top: 40px
    }
`;


export const Image = styled.img`
    display: flex;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;


export const InfoContainer = styled.div`
    // color: ${({white}) => (white ? 'rgb(63 152 175);' : 'rgb(209 96 5)')};
    display: flex;
    width: 70vw;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;

`;




export const Title = styled.h1`
    width: 100%;
    // position: relative;
    font-size: 70px;
    text-align: center;
    color: ${({white}) => (white ? 'rgb(63 152 175);' : 'rgb(209 96 5)')};

    @media (max-width: 648px) {
        font-size: 50px;
    }
    
`;


export const Desc = styled.p`
    width: 100%;
    // position: relative;
    font-size: 20px;
    text-align: center;
    margin: 50px 0;
    font-weight: 500;
    letter-spacing: 3px;

    // @media (max-width: 648px) {
    //     font-size: 18px;
    //     letter-spacing: 1px;
    // }


`;


export const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    background-color: gold;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 10px;
`; 

