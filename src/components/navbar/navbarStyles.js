import styled from "styled-components";
import { Link } from 'react-router-dom';


export const AnnouncementContainer = styled.div`
    height: 30px; 
    background-color: teal;
    color: white;
    display: ${({display}) => (display ? 'flex': "none" )};
    align-items: center;  
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    transition: 0.5s ease-in-out ;
    position: sticky;

    @media (max-width: 648px) {
        position: relative;
        max-width: 100%;
    }
`;


export const MainNav = styled.nav`
    height: 70px;
    max-width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

`;

export const NavContainer = styled.div`
    display: flex;
    height: 70px;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;


export const NavLogo = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 30px;


    @media (max-width: 648px) {
        margin-left: 10px;
    }
`;


export const BrandName = styled.h1`
    flex: 1 ;
    text-align: center;
    text-decoration: none;

`;


export const Name = styled(Link)`
    text-decoration: none;
    color: #0b4a54;
    font-size: 40px;


    @media (max-width: 648px) {
        font-size: 30px;
    }
`;


export const Profile = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 30px;


    @media (max-width: 648px) {
        display: none;
    }

`;


export const ProfileIcon = styled.div`
    margin-right: 20px;
`;


export const Icon = styled(Link)`
    color: #000;
`;

export const Dropdown = styled.div`


`;

export const PIcon = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    background-color: inherit;
    font-family: inherit;


`;


export const PContent = styled.div`
    display: none;
    min-width: 160px;
    position: absolute;
    background-color: #0b4a54;
    // top: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    color: #fff;
    // margin-left: 450px;


    ${Dropdown}:hover + &{
        display: block;
        right: 14px;
        // top: 100px;
        // position: relative;
        z-index: 100;
        
    };


    &:hover{
        display: block;
        right: 14px;
        // position: relative;
        z-index: 100;
        
    };

    // ${Dropdown}:active  & {
    //     display: block;
    // }

`;


export const PCLink = styled(Link)`
    float: none;
    color: #fff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;

    &:hover{
        background-color: #ddd;
        color: #000;
    }
`;


export const Logout = styled.div`
    text-align: center;
    cursor: pointer;
`;



export const LButton = styled.button`
    width: 100px;
    height: 40px;
    font-size: 16px;
    background-color: #7e2e2e;
    outline: none;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;

`;



export const MenuBar = styled.div`
    display: none;


    @media (max-width: 648px) {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 30px;
    }

`;

export const Y = styled.div`
    z-index: 4;
    color: #fff;
`;


export const NavMenu = styled.ul`
    display: none;

    @media (max-width: 648px) {
        display: flex;
        flex-direction: column;
        background-color: #0b4a54;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        padding-top: 10px;
        color: #fff;
        padding-top: 50px;
        z-index: 3;

        
    }    
`;


export const NavItem = styled.li`
    @media (max-width: 648px) {
        display: flex;
    }
`;

export const NavLink = styled(Link)`
    @media (max-width: 648px) {
        display: flex;
        align-items: center;
        text-decoration: none;
        width: 100%;
        border-top: 2px solid #000;
        border-bottom: 2px solid #000;
        padding-left: 30px;
        color: #fff;
        font-size: 24px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;


export const NavDropdown = styled.div`
    float: none;
    overflow: hidden;
    width: 100%;
`;


export const NIcon = styled(Link)`
    width: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    background-color: inherit;
    font-family: inherit;
    font-size: 24px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #000;
    padding-left: 30px;
`;


export const Z = styled.div`
    padding-left: 70%;
`;


export const Z1 = styled.div`
    padding-left: 64%;
`;


export const Z2 = styled.div`
    padding-left: 67%;
`;

export const Z3 = styled.div`
    padding-left: 70%;
`;

export const Z4 = styled.div`
    padding-left: 57%;
`;




export const NavContent = styled.div`
    display: none;
    position: relative;
    background-color: #0b4a54;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 5;
    color: #fff;
    border-bottom: 2px solid #000;


    ${NavDropdown}:hover & {
        display: block;
    }
`;


export const NavContent2 = styled.div`
    display: none;
    position: relative;
    background-color: #0b4a54;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 5;
    color: #fff;
    border-bottom: 2px solid #000;


    ${NavDropdown}:hover & {
        display: block;
    }
`;


export const NavContent3 = styled.div`
    display: none;
    position: relative;
    background-color: #0b4a54;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    color: #fff;
    border-bottom: 2px solid #000;


    ${NavDropdown}:hover & {
        display: block;
    }
`;


export const NavContent4 = styled.div`
    display: none;
    position: relative;
    background-color: #0b4a54;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    color: #fff;
    border-bottom: 2px solid #000;


    ${NavDropdown}:hover & {
        display: block;
    }
`;


export const NavContent5 = styled.div`
    display: none;
    position: relative;
    background-color: #0b4a54;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    color: #fff;
    border-bottom: 2px solid #000;


    ${NavDropdown}:hover & {
        display: block;
    }
`;


export const NCLink = styled(Link)`
    float: none;
    color: #fff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-size: 24px;
    padding-top: 20px;
    padding-bottom: 20px;
    // border-bottom: 2px solid #000;
    padding-left: 50px;

    &:hover{
        background-color: #ddd;
        color: #000;
    }
`;


export const ItemsNav = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    // background-color: rgba(172, 117, 0, 1);
    background-color: rgb(108 56 14);
    z-index: 10;

    @media (max-width: 648px) {
        display: none;
    }
`;



export const ItemsContainer = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 100%;
`;




export const Items = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
`;




export const ItemsList = styled.li`
    display: flex;
    list-style: none;
    text-align: center;
    justify-content: center;
`;




export const Item = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.7rem;
    height: 100%;
    cursor: pointer;
`;




export const IDropdown = styled.div`
    float: none;
    overflow: hidden;
    width: 100%;
`;




export const ItemIcon = styled(Link)`       
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    background-color: inherit;
    font-family: inherit;
    padding: 0 1.7rem;
`;




export const ItemContent = styled.div`
    display: none;
    position: absolute;
    min-width: 160px;
    top: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1000;
    // background-color: #0b4a54;
    background-color: #fff;
    margin-left: 30px;


    ${IDropdown}:hover & {
        display: block;
    }
`;




export const ItemLink = styled(Link)`
    float: none;
    color: #fff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;


    &:hover{
        background-color: #ddd;
        color: #000;
    }
`;



















