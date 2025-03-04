import styled, {StyleSheetContext} from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Context } from '@/context/StateContext';
import React from 'react';
import { useStateContext } from '@/context/StateContext';


const StyledNav = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
    background-color: #F1F0E9;
`;

const LogoText = styled.div`
    font-family: 'Inter', sans-serif;
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
    padding-top: 11px;
`;

const NavLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
`;

const NavRightOne = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;  
`;

const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const MenuItem = styled(Link)`
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    text-decoration: none;
    color: black;

    &: hover {
        text-decoration: underline;
    }
`;

const Logo = styled(Link)`
    display: flex;
    flex-direction: row;
    gap: 5px;
    text-decoration: none;
    color: black;
    padding-right: 20px;
    border-right: 2px solid black;
`;

const Login = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    padding: 4px;
    border: 2px solid #F1F0E9;
    
    &: hover {
        border: 2px solid black;
    }
`;

const CreateAccount = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    padding: 4px;
    border: 2px solid #F1F0E9;

    &: hover {
        border: 2px solid black;
    }
`;

export default function Header() {
    const { user, setUser } = useStateContext();
    

    return (
        <StyledNav>
            <NavLeft>
                <Logo href="/">
                    <Image width={50} height={50} src="/images/thing.png"/>
                    <LogoText>Code Catalog</LogoText>
                </Logo>
                <NavMenu>
                    <MenuItem href="/popular">Popular</MenuItem>
                    <MenuItem href="/purpose">Purpose Specific</MenuItem>
                </NavMenu>
            </NavLeft>
            
            <NavRightOne>
                <Login href="/authentication/login">Login</Login>
                <CreateAccount href="/authentication/signup">Create Account</CreateAccount>
            </NavRightOne>
        </StyledNav>
    );
}