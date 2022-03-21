import styled from "styled-components";

export const SignUp = styled.div`
    min-height: 100%;
    width: 100%;
    display: flex;
    background-color: rgb(0 0 0 / 20%); 
    justify-content: center;
    align-items: center;
`;


export const SignUpContainer = styled.div`
    position: relative;
    margin-top: 50px;
    max-width: 450px;
    height: ${({small}) => (small ? "450px" : "650px")};
    padding:30px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    margin-bottom:10px;

    @media (max-width: 648px) {
        max-width: 100%;
    }
`;


export const Header = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;


export const Alert = styled.div`
    // background-color: red;
    // width: 90%;
    color: red;
`;


export const FormBody = styled.div`
    margin-top: 20px;
`;

export const FormGroup = styled.div``;

export const Input = styled.input`
    outline: none;
    width: 360px;
    height: 40px;
    font-size: 16px;
    border: 1px solid silver;
    border-radius: 4px;
    padding-left: 10px;


    @media (max-width: 648px) {
        max-width: 100%;
    }
`;


export const SignUpButton = styled.div`
    text-align: center;
    cursor: pointer;

    @media (max-width: 648px) {
        max-width: 100%;
    }
`;


export const Button = styled.button`
    width: 270px;
    height: 40px;
    font-size: 18px;
    background-color: steelblue;
    outline: none;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 648px) {
        max-width: 100%;
    }
`;

export const Already = styled.div`
    margin-top: 30px;
    text-align: center;
`;


export const Loading = styled.button`
    width: 270px;
    height: 40px;
    font-size: 18px;
    background-color: steelblue; 
    outline: none;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 648px) {
        max-width: 100%;
    }
`;


export const Loaded = styled.button`
    width: 270px;
    height: 40px;
    font-size: 18px;
    background-color: rgb(0 0 0 / 20%); 
    outline: none;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 648px) {
        max-width: 100%;
    }
`;


