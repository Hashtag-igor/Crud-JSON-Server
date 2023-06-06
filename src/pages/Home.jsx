import styled from "styled-components"

import { Link } from "react-router-dom"


const HomeContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  /* background: linear-gradient(to top right, #dfd9d6, #e0d6d0, #dfd9d6); */
`

const HomeWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  @media screen and (max-width: 768px){
    width: 90%;
  }

`

const HomeTitle = styled.h1 `
  color: "#060610";
  font-size: 60px;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 768px){
    font-size: 50px;
  }

  @media screen and (max-width: 480px){
    font-size: 40px;
  }

`

const HomeLinkContainer = styled.div `
  @media screen and (max-width: 480px){
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`

const HomeLink = styled(Link)`
  margin-left: 8px;
  font-size: 18px;

  color: ${(prop) => prop.color ? prop.color : "#171744"};

  @media screen and (max-width: 768px){
    font-size: 16px;
  }

  @media screen and (max-width: 480px){
    font-size: 14px;
    margin-left: 0px;
  }
`


export default function Home() {
  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeTitle>Welcome to our website!</HomeTitle>
        <HomeLinkContainer>
          <HomeLink color="black">You already have an account?</HomeLink>
          <HomeLink to="/login">Click Here</HomeLink>
        </HomeLinkContainer>
        <HomeLinkContainer>
          <HomeLink color="black">Dont have an account yet?</HomeLink>
          <HomeLink to="/register">Click Here</HomeLink>
        </HomeLinkContainer>
      </HomeWrapper>
    </HomeContainer>
  )
}
