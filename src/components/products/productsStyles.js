import styled from "styled-components";
import {Link} from 'react-router-dom';

export const ContainerFluid = styled.div`
    width: 100%;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export const ProductTitle = styled.div`
    display: flex;
    font-size: 30px;
    font-weight: 700;

    @media (max-width: 648px) {
        font-size: 24px;
    }
`;

export const Underline = styled.div`
    width: 12%;
    border-bottom: 3px solid #000;
    text-align: center;
    // position: relative;

    @media (max-width: 648px) {
        width: 40%;
    }
`;

export const ProductsBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    // justify-content: center;
    // align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-left: 30px;
`;

export const Container = styled.div``;

export const Productss = styled.div`
    width: 220px;
    height: auto;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    margin-bottom: 50px;
    margin-right: 24px;
    transition: all 0.3s ease-in-out;
    padding: 12px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 0px 13px #c3c6c7;
        transition: all 0.5s ease-in;
    }
`;

export const ProductImage = styled.div`
    width: 200px;
    height: 200px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Title = styled.div`
    margin-bottom: 5px; 
    font-size: 16px;
`;



export const PriceFav = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
`;

export const Price = styled.div`
    margin-top: ${({big}) => (big) ? "5px" : "0px"}; 
    font-size: ${({big}) => (big) ? "18px" : "14px"}
    font-weight: 900;
`;

export const CartButton = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #266104;  
    // width: 100px;
    padding:10px 20px;
    border: transparent;
    margin-top: 30px;
    cursor: pointer;
    border-radius: 10px;
    margin-left: 11%;
    margin-right: 10%;
`;

export const CartB = styled.div``;


