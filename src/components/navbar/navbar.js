import React , { useState } from 'react';
import { MainNav, NavContainer, NavLogo, Name, Profile, ProfileIcon, BrandName, Icon, PContent, MenuBar,
    PIcon, Dropdown, PCLink, NavMenu, NavItem, NavLink, Y, NavDropdown, NavContent, NCLink, NIcon, NavContent2,
    NavContent3, NavContent4, NavContent5, Z, Z1, Z2, Z3, Z4, AnnouncementContainer, ItemsNav, ItemsContainer, Items, 
    Item, IDropdown,ItemIcon, ItemContent, ItemLink, ItemsList, Logout, LButton } from './navbarStyles';
import { Badge } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo/logo_8.svg';
import {PersonOutlined, ShoppingCartOutlined, FavoriteBorderOutlined, MenuOutlined, CloseOutlined, KeyboardArrowDownOutlined} from '@material-ui/icons';
import { auth} from '../../firebase/firebase'
import { signOut } from 'firebase/auth';




const Navbar = () => {

    const navigate = useNavigate();

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }


    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setClick(!click);
    }


    const LogOut = async(e) => {
        await signOut(auth);
        navigate('/')
    }


    




    return (
        <>

            {click ? (
                <AnnouncementContainer></AnnouncementContainer>
            ) : (
                <AnnouncementContainer display>
                    Super Deal! Free Shipping on Orders Over <span>&nbsp; GH&#8373;</span>50
                </AnnouncementContainer>
            )}

            


            <MainNav>
                <NavContainer>
                    <NavLogo>
                        <Link to='/'>
                            <img src={Logo} alt='logo' />
                        </Link>
                    </NavLogo>

                    <BrandName>
                        <Name to='/'>DEE.</Name>
                    </BrandName>
                    

                    <Profile>
                        {auth.currentUser ? (
                            <>


                            {auth.currentUser.email === "admin@admin.com" ? (
                                <>
                                    <ProfileIcon>
                                        <PIcon to='#'>{auth.currentUser.displayName}</PIcon>
                                    </ProfileIcon>

                                    <ProfileIcon>
                                        <PIcon to='#'>Dashboard</PIcon>
                                    </ProfileIcon>


                                    <ProfileIcon>
                                        <Logout>
                                            <LButton onClick={LogOut}>LOG OUT</LButton>
                                        </Logout>
                                    </ProfileIcon>
                                </>
                            ) : (
                                <>
                                    <ProfileIcon>
                                        <Dropdown>
                                            <PIcon to='#'>{auth.currentUser.displayName}</PIcon>

                                        </Dropdown>

                                        <PContent>
                                            <PCLink to='#'>Profile</PCLink>
                                            <PCLink to='#' onClick={LogOut}>Log out</PCLink>
                                        </PContent>
                                    </ProfileIcon>

                                    <ProfileIcon>
                                        <Badge badgeContent={4} color="primary">
                                            <Icon to='/cart'><ShoppingCartOutlined /></Icon>
                                        </Badge>
                                    </ProfileIcon>

                                    <ProfileIcon>
                                        <Badge badgeContent={1} color="primary">
                                            <Icon to='/favorite'><FavoriteBorderOutlined /></Icon>
                                        </Badge>
                                    </ProfileIcon>
                                </>
                            )}


                                
                            </>
                        ) : (
                            <>
                                <ProfileIcon>

                                    <Dropdown>
                                            <PIcon to='#'><PersonOutlined /></PIcon>

                                    </Dropdown>

                                    <PContent>
                                        <PCLink to='/signin'>Sign In</PCLink>
                                        <PCLink to='/signup'>Sign Up</PCLink>
                                    </PContent>
                                </ProfileIcon>

                                <ProfileIcon>
                                    <Badge badgeContent={1} color="primary">
                                        <Icon to='/cart'><ShoppingCartOutlined /></Icon>
                                    </Badge>
                                </ProfileIcon>


                                <ProfileIcon>
                                    <Badge badgeContent={1} color="primary">
                                        <Icon to='/favorite'><FavoriteBorderOutlined /></Icon>
                                    </Badge>
                                </ProfileIcon>
                            </>
                        )}
                        
                    </Profile>

                    <MenuBar onClick={handleClick}>
                        {click ? (
                            <Y><CloseOutlined style={{fontSize: "40px"}} /></Y>
                        ) : (
                            <MenuOutlined style={{fontSize: "40px"}}/>
                        )}
                    </MenuBar>



                    {click ? (
                        <NavMenu>
                            <NavItem>
                                <NavLink to='#'>Home</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavDropdown>
                                    <NIcon to='#'>
                                        Tops
                                        <Z><KeyboardArrowDownOutlined style={{fontSize: '40px'}}/></Z>
                                    </NIcon>

                                    <NavContent>
                                        <NCLink to='#'>T-Shirt</NCLink>
                                        <NCLink to='#'>Blouses</NCLink>
                                        <NCLink to='#'>Tank Tops</NCLink>
                                    </NavContent>
                                </NavDropdown>
                            </NavItem>         

                            <NavItem>
                                <NavDropdown>
                                    <NIcon to='#'>
                                        Dresses
                                        <Z1><KeyboardArrowDownOutlined style={{fontSize: '40px'}}/></Z1>
                                    </NIcon>

                                    <NavContent2>
                                        <NCLink to='#'>T-Shirt</NCLink>
                                        <NCLink to='#'>Blouses</NCLink>
                                        <NCLink to='#'>Tank Tops</NCLink>
                                    </NavContent2>
                                </NavDropdown>
                            </NavItem>

                            <NavItem>
                                <NavDropdown>
                                    <NIcon to='#'>
                                        Shoes
                                        <Z2><KeyboardArrowDownOutlined style={{fontSize: '40px'}}/></Z2>
                                    </NIcon>

                                    <NavContent3>
                                        <NCLink to='#'>T-Shirt</NCLink>
                                        <NCLink to='#'>Blouses</NCLink>
                                        <NCLink to='#'>Tank Tops</NCLink>
                                    </NavContent3>
                                </NavDropdown>
                            </NavItem>     

                            <NavItem>
                                <NavDropdown>
                                    <NIcon to='#'>
                                        Bags
                                        <Z3><KeyboardArrowDownOutlined style={{fontSize: '40px'}}/></Z3>
                                    </NIcon>

                                    <NavContent4>
                                        <NCLink to='#'>T-Shirt</NCLink>
                                        <NCLink to='#'>Blouses</NCLink>
                                        <NCLink to='#'>Tank Tops</NCLink>
                                    </NavContent4>
                                </NavDropdown>
                            </NavItem>     

                            <NavItem>
                                <NavDropdown>
                                    <NIcon to='#'>
                                        Accessories
                                        <Z4><KeyboardArrowDownOutlined style={{fontSize: '40px'}}/></Z4>
                                    </NIcon>

                                    <NavContent5>
                                        <NCLink to='#'>T-Shirt</NCLink>
                                        <NCLink to='#'>Blouses</NCLink>
                                        <NCLink to='#'>Tank Tops</NCLink>
                                    </NavContent5>
                                </NavDropdown>
                            </NavItem>            
                        </NavMenu>
                    ) : (
                        <></>
                    )}

                </NavContainer>

            </MainNav>



            {/* Items */}

            <ItemsNav>
                <ItemsContainer>
                    <Items>
                        <ItemsList>
                            <Item to='#'>Home</Item>
                        </ItemsList>

                        <ItemsList>
                            <IDropdown>
                                <ItemIcon to="#">
                                    Tops
                                    <KeyboardArrowDownOutlined />
                                </ItemIcon>

                                <ItemContent>
                                    <ItemLink to='#'>T-Shirt</ItemLink>
                                    <ItemLink to='#'>Blouses</ItemLink>
                                    <ItemLink to='#'>Tank Tops</ItemLink>
                                </ItemContent>

                            </IDropdown>
                        </ItemsList>


                        <ItemsList>
                            <IDropdown>
                                <ItemIcon to="#">
                                    Dresses
                                    <KeyboardArrowDownOutlined />
                                </ItemIcon>

                                <ItemContent>
                                    <ItemLink to='#'>Short Dresses</ItemLink>
                                    <ItemLink to='#'>Midi Dresses</ItemLink>
                                    <ItemLink to='#'>Cami Dresses</ItemLink>
                                </ItemContent>

                            </IDropdown>
                        </ItemsList>


                        <ItemsList>
                            <IDropdown>
                                <ItemIcon to="#">
                                    Shoes
                                    <KeyboardArrowDownOutlined />
                                </ItemIcon>

                                <ItemContent>
                                    <ItemLink to='#'>Heels</ItemLink>
                                    <ItemLink to='#'>Sneakers</ItemLink>
                                    <ItemLink to='#'>Sandals</ItemLink>
                                </ItemContent>

                            </IDropdown>
                        </ItemsList>


                        <ItemsList>
                            <IDropdown>
                                <ItemIcon to="#">
                                    Bags
                                    <KeyboardArrowDownOutlined />
                                </ItemIcon>

                                <ItemContent>
                                    <ItemLink to='#'>Purses</ItemLink>
                                    <ItemLink to='#'>Handbags</ItemLink>
                                    <ItemLink to='#'>School bags</ItemLink>
                                </ItemContent>

                            </IDropdown>
                        </ItemsList>


                        <ItemsList>
                            <IDropdown>
                                <ItemIcon to="#">
                                    Accessories
                                    <KeyboardArrowDownOutlined />
                                </ItemIcon>

                                <ItemContent>
                                    <ItemLink to='#'>Belts</ItemLink>
                                    <ItemLink to='#'>Hats</ItemLink>
                                    <ItemLink to='#'>Necklaces</ItemLink>
                                </ItemContent>

                            </IDropdown>
                        </ItemsList>
                    </Items>
                </ItemsContainer>
            </ItemsNav>
        </>
    )
}


export default Navbar;


