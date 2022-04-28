import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CategoriesContainer = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    box-shadow: 0px 0px 13px #c3c6c7;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 50px 15px;
    padding: 30px;
`;


export const Header = styled.div`
    display: flex;
    font-size: 30px;
    font-weight: 700;

    @media (max-width: 648px) {
        font-size: 24px;
    }
`;

export const Underline = styled.div`
    width: 15%;
    border-bottom: 3px solid #000;
    text-align: center;
    // position: relative;

    @media (max-width: 648px) {
        width: 40%;
    }
`;


export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-left: 30px;
`;

export const Container = styled.div`
    width: 250px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 24px;
    transition: all 0.3s ease-in-out;
    padding: 12px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 0px 13px #c3c6c7;;
        transition: all 0.5s ease-in;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const X = styled(Link)`
    position: relative;
    top: -200px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

export const Title = styled.p`
height: 40px;
    text-align: center;
    width: 120px;
    padding: 12px 16px;
    background-color: #0b4a54;
    color: white;
    cursor: pointer;
    font-weight: 600;
    border-radius: 5px;
`;
