import styled from "styled-components"

const PrivatePageContainer = styled.div `
  border: 1px solid black;
  padding: 10px;
  width: 90%;
  margin: auto;
  background-color: white;
`

const PrivatePageWrapper = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  word-wrap: break-word;
`

const PrivatePageTitle = styled.p `
` 


export default function PrivatePage({name, email, password}) {
  return (
    <PrivatePageContainer>
        <PrivatePageWrapper>
            <PrivatePageTitle>Nome: {name}</PrivatePageTitle>
            <PrivatePageTitle>Email: {email}</PrivatePageTitle>
            <PrivatePageTitle>Senha: {password}</PrivatePageTitle>
        </PrivatePageWrapper>
    </PrivatePageContainer>
  )
}
