import * as React from "react";
import { useContext, useState} from "react";
import { AuthContext } from "../../context/auth-context";

// Images
import LoginImage from "./LoginImage/LoginImage";

// Components
import Button from "../../components/Button";
import Container from "../../components/Container";

// style
import {
  BackgroundLogin,
  InputArea,
  Title,
  Form,
  InputGroup,
  Label,
  Input,
} from "./Auth.style";

const Auth: React.FC = () => {
  const authCtx = useContext(AuthContext);

  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if(userEmail.trim().length > 0 && userPassword.trim().length > 0 ){
        authCtx.login(Math.random().toString().replace(".", ""));
    }
  };

  const [userEmail, setUserEmail] = useState('') 
  const [userPassword, setUserPassword] = useState('') 


  return (
    <Container height="100vh">
      <BackgroundLogin>
        <LoginImage />
      </BackgroundLogin>
      <InputArea>
        <Title>Quem bom que você voltou!</Title>
        <Form onSubmit={loginHandler}>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input placeholder="exemplo@exemplo.com" id="email" type="email" value={userEmail} onChange={ (e)=> setUserEmail(e.target.value) }/>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Senha</Label>
            <Input placeholder="Insira sua senha" id="password" type="password" value={userPassword} onChange={ (e)=> setUserPassword(e.target.value) }/>
          </InputGroup>
          <Button text="Entrar" type="submit" />
        </Form>
      </InputArea>
    </Container>
  );
};

export default Auth;
