import styled from "styled-components";



export const TitlePrice = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
`;


export const Quantity = styled.div`
    margin-top: 10px;
    text-align: center
`;

export const QuantityBox = styled.div`
    display: flex;
    // width: 150px;
    // height: 40px;
    border: 1px solid silver;
    margin: 20px;
    padding: 5px 0px;
    // /* padding: 10px; */
    border-radius: 10px;
    justify-content: center;
    align-content: center;
    align-items: center;
    cursor: pointer;`;

export const Minus = styled.div`
padding-right: 25px;
`;

export const Adds = styled.div`
padding-left: 25px;
`;

export const Sum = styled.div`
    text-align: center;
    font-size: 18px;
    font-weight: 700;
`;

export const DeleteButton = styled.div`
justify-content: center;
align-items: center;
text-align: center;
background-color: red;  
// width: 100px;
padding:10px 20px;
border: transparent;
margin-top: 30px;
cursor: pointer;
border-radius: 10px;
margin-left: 15%;
margin-right: 15%;
`;


export const Delete = styled.div`
text-decoration: none;
    color: #000;
`;

