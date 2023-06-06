import Form from "../components/Form";

import styled from "styled-components"

const RegisterWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 70px 0;

  @media screen and (max-width: 480px){
    margin: 40px 0 60px 0;
  }
`

export default function Register() {
    return (
      <RegisterWrapper>
        <Form isLogin={false}/>
      </RegisterWrapper>
    );
}
