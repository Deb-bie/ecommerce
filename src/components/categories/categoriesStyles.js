import styled from "styled-components";
import { Link } from 'react-router-dom';


export const CategoriesContainer = styled.div`
    // position: relative;
    // width: 100%;
    // height: 100%;
    // display: flex;
    // box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    // flex-direction: column;
    // flex-wrap: nowrap;
    // align-content: center;
    // justify-content: center;
    // align-items: center;
    // margin-top: 50px;
    // margin-bottom: 50px;
    // padding: 30px;

    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 50px 0px;
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



export const Wrapper = styled.div`
    // position: relative;
    // width: 100%;
    // height: 100%;
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    // align-content: center;
    // justify-content: space-evenly;
    // align-items: center;
    // margin: 50px 0px;

    // width: 100%;
    // // height: auto;
    // // position: relative;
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    // margin-top: 30px;
    // margin-left: 30px;

    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    
`;


export const Info = styled.div`
    opacity: 0;
    width: 150px;
    height: 230px;
    position: absolute;
    // top: 0;
    // left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index:3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1.5s fade-in;
    cursor: pointer;
`;



export const Container = styled.div`
    // // flex: 1;
    // height: 46%;
    // width: 25%;
    // // position: relative;
    // display: flex;
    // flex-direction: column;
    // // flex-wrap: wrap;
    // padding: 20px;
    // align-items: center;
    // justify-content: space-evenly;
    // transition: all 0.3s ease-in-out;
    // cursor: pointer;




    // flex: 1;
    // width: 220px;
    // height: auto;
    height: 40%;
    width: 20%;
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


    // display: flex;
    // justify-content: space-evenly;

    


    &:hover ${Info}{
        opacity: 1;
    }
  
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    z-index: 2;
    object-fit: contain;
`;




export const Button = styled.button`
    border: none;
    outline: none;
    height: 40px;
    width: 120px;
    padding: 12px 16px;
    background-color: #0b4a54;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    border-radius: 5px;

`;

export const ButtonLink = styled(Link)`
    text-decoration: none;
    color: #fff;
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




export const X = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
`;



