import Form from "../components/Form";

import styled from "styled-components"

const LoginWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 80px 0;

  @media screen and (max-width: 480px){
    margin: 40px 0 60px 0;
  }
`

const Login = () => {
  return (
    <LoginWrapper>
      <Form isLogin={true}/>
    </LoginWrapper>
  );
};

export default Login;