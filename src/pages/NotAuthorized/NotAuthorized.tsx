import * as React from "react";

// Components
import Container from "../../components/Container";
import { Title } from "./NotAuthorized.style";

// images
import NotAuthorizedImage from "./NotAuthorizedImage";

const NotAuthorized: React.FC = () => {
  return (
    <Container
      height="100vh"
      addStyle={`margin:0 auto; 
      text-align: center;
      flex-direction: column;
      background-color: #4abdac;
      justify-content:center;
      align-items:center;
      
      svg{
        height:60%;
      }`}
    >
      <Title>Ops! Acesso negado!</Title>
      <NotAuthorizedImage />
    </Container>
  );
};

export default NotAuthorized;
