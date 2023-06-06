import styled from "styled-components";

import { useState, useEffect } from 'react';

import PrivatePage from '../pages/PrivatePage';

import { useNavigate } from "react-router-dom";


const FormContainer = styled.form `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45%;
  border: 3px solid #060610;
  background-color: #fff;
  padding: 40px 10px;

  @media screen and (max-width: 1024px){
    width: 55%;
  }

  @media screen and (max-width: 768px){
    width: 75%;
  }

  @media screen and (max-width: 480px){
    width: 85%;
    padding: 30px 10px;
  }
`

const FormComponents = styled.div `
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 10px;

  @media screen and (max-width: 480px){
    width: 95%;
  }
`

const SendFormButton = styled.button `
  width: 90%;
  padding: 10px 0;
  cursor: pointer;
  margin-top: 20px;
  background-color: #060610;
  color: white;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bolder;

  width: ${(prop) => prop.size ? prop.size : "90%"};
`

const FormLabel = styled.label `
  color: #060610;
  font-size: 20px;

  @media screen and (max-width: 768px){
    font-size: 16px;
  }
`

const FormInput = styled.input `
  border: 1px solid white;
  border-bottom: 1px solid #060610;
  padding: 8px 10px;
  margin-bottom: 20px;
  font-size: 16px;
`

const FormTitle = styled.h2 `
  color: #060610;
  font-size: 36px;
  letter-spacing: 1px ;
  margin-bottom: 20px;

  @media screen and (max-width: 768px){
    font-size: 30px;
  }
`



const UserPageContainer = styled.div `
  height: 90vh;
  width: 100%;

  @media screen and (max-width: 768px){
    width: 95%;
  }
`

const UserPageWrapper = styled.div `
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;


  @media screen and (max-width: 767px){
    width: 95%;
    margin: auto;
  }
`

const UserTitle = styled.h2 `
  font-size: ${(prop) => prop.subTitle ? prop.subTitle : "36px"};

  &:first-child{
    margin-bottom: 15px;
  }

  @media screen and (max-width: 768px){
    font-size: ${(prop) => prop.subTitle ? "22px" : "36px"};
    text-align: center;
  }

  @media screen and (max-width: 480px){
    font-size: ${(prop) => prop.subTitle ? "22px" : "34px"};
    text-align: center;
  }
`

const UserParagraph = styled.p `
  font-size: 18px;

  @media screen and (max-width: 767px){
    word-break: break-all;
  }
`

const UsersDataTitle = styled.h2 `
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 768px){
    font-size: 20px;
  }
`

const UserUL = styled.ul `
  margin-top: 70px;
`

const UserLI = styled.li ``


const Form = ({isLogin}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("")
  const [usuarios, setUsuarios] = useState([]);
  const [autenticado, setAutenticado] = useState(false);
  const [usuarioAtual, setUsuarioAtual] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const navigate = useNavigate()
            

  const searchUsers = () => {
    fetch('http://localhost:3001/usuarios')
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => {
        console.error('Erro ao buscar os usuários:', error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const isAdmin = email === 'igor_contatos@hotmail.com' && password === '98582241';

  if (isAdmin) {
    setAutenticado(true);
    setUsuarioAtual({ nome: 'Admin', email: 'igor_contatos@hotmail.com', password: "98582241", usuarios: usuarios  });
    return; // Interrompe a execução da função
  }

  const usuario = usuarios.find((u) => u.email === email);

  if (usuario && usuario.password === password) {
    setAutenticado(true);
    setUsuarioAtual(usuario);
  } else {
    setAutenticado(false);
    setUsuarioAtual(null);
    alert('Usuário não encontrado! Tente novamente');
  }
  };

  const handleLogout = (e) => {
    e.preventDefault();

    setAutenticado(false);
    setUsuarioAtual(null);
    setEmail('');
    setPassword('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const checkUser = usuarios.find((u) => u.email === email)

    if (checkUser) {
      alert('Usuário já cadastrado com esse email e senha.');
      setName('');
      setEmail('');
      setPassword('');
      setLoading(false);
      return;
    } else {
      // Consulta o banco de dados para verificar se o usuário já existe
      fetch('http://localhost:3001/usuarios?email=' + email)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            // Usuário já cadastrado com o mesmo email
            alert('Usuário já cadastrado com esse email e senha.');
            setName('');
            setEmail('');
            setPassword('');
            setLoading(false);
          } else {
            // Cria um novo usuário
            const usuario = { name, email, password };
  
            fetch('http://localhost:3001/usuarios', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(usuario)
            })
              .then(() => {
                setName('');
                setEmail('');
                setPassword('');
                searchUsers();
                setSubmitSuccess(true);
              })
              .catch((error) => {
                console.error('Erro ao salvar o usuário:', error);
              })
              .finally(() => {
                setLoading(false);
                setTimeout(() => {
                  setSubmitSuccess(false);
                  setAutenticado(true);
                  setUsuarioAtual(usuario);
                  navigate('/');
                }, 1000);
              });
          }
        })
        .catch((error) => {
          console.error('Erro ao verificar o usuário:', error);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (submitSuccess) {
      alert("Usuário cadastrado com sucesso!");
    }
    searchUsers();
  }, [submitSuccess]);


  return (
    <>
      {isLogin ? (
        <>
          {!autenticado ? (
            <FormContainer onSubmit={handleLogin}>
              <FormTitle>Login</FormTitle>
              <FormComponents>
                <FormLabel>Email</FormLabel>
                <FormInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormComponents>
              <FormComponents>
                <FormLabel>Password</FormLabel>
                <FormInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormComponents>
              <SendFormButton type="submit">Entrar</SendFormButton>
            </FormContainer>
          ) : (
            <UserPageContainer>
              <UserPageWrapper>
                <UserTitle>Seja Bem-Vindo, {usuarioAtual.name}!</UserTitle>
                <UserTitle subTitle="26px">Informações do usuário</UserTitle>
                <UserParagraph>Nome: {usuarioAtual.name}</UserParagraph>
                <UserParagraph>Email: {usuarioAtual.email}</UserParagraph>
                <UserParagraph>Password: {usuarioAtual.password}</UserParagraph>
                <SendFormButton size={"40%"} onClick={handleLogout}>Sair</SendFormButton>
              </UserPageWrapper>
              {usuarioAtual.email === 'admin@admin.com' ? (
                <>
                  <UserUL>
                    <UsersDataTitle>Usuários salvos no banco de dados</UsersDataTitle>
                    {usuarios.map((usuario) => (
                      <UserLI key={usuario.id}>
                        <PrivatePage name={usuario.name} email={usuario.email} password={usuario.password} usuario={usuario.usuario}/>
                        {console.log(usuario)}
                      </UserLI>
                    ))}
                  </UserUL>
                </>
              ) : null}
            </UserPageContainer>
          )}
        </>
      ) : (
        <>
          <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Register</FormTitle>
            <FormComponents>
              <FormLabel>Nome</FormLabel>
              <FormInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormComponents>
            <FormComponents>
              <FormLabel>Email</FormLabel>
              <FormInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormComponents>
            <FormComponents>
              <FormLabel>Password</FormLabel>
              <FormInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormComponents>
            <SendFormButton type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Salvar'}
            </SendFormButton>
          </FormContainer>
        </>
      )}
    </>
  );
};

export default Form;

