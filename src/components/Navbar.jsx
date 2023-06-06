import { Link } from "react-router-dom"

import styled from "styled-components"

import Logo from "../img/lion-logo.png"


const NavbarContainer = styled.div `
  width: 100%;
  padding: 20px;
  background-color: #060610;
  border-bottom: 2px solid #090d1f;
  box-shadow: 0px 1px 5px #090d1f;
`

const NavbarWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: auto;

  @media screen and (max-width: 480px){
   flex-direction: column;
   gap: 15px;
  }
`

const NavbarLinkLogoWrapper = styled(Link) `
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
  box-shadow: 1px 1px 5px 5px #ebebeb;
  background-image: url(${Logo});
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px){
    width: 70px;
    height: 65px;
  }

  @media screen and (max-width: 480px){
    width: 65px;
    height: 65px;
  }
`

const NavbarLinkWrapper = styled.div `
  width: 40%;
  display: flex;
  justify-content: space-around;
  padding: 5px;

  @media screen and (max-width: 768px){
    gap: 30px;
  }

  @media screen and (max-width: 480px){
    width: 90%;
    border-top: 1px solid white;
    padding-top: 10px;
  }
`

const NavbarLink = styled(Link) `
  font-size: 20px;
  letter-spacing: 1px;

  @media screen and (max-width: 768px){
    font-size: 18px;
  }

  @media screen and (max-width: 480px){
    font-size: 16px;
  }
`


export default function Navbar() {
  return (
    <NavbarContainer>
        <NavbarWrapper>
            <NavbarLinkLogoWrapper to="/">¨¨</NavbarLinkLogoWrapper>
            <NavbarLinkWrapper>
              <NavbarLink to="/register">Register</NavbarLink>
              <NavbarLink to="/login">Login</NavbarLink> 
            </NavbarLinkWrapper>
        </NavbarWrapper>
    </NavbarContainer>
  )
}
