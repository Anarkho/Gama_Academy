import React from "react"; //? rfc
import { Container } from "./style";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Home</h1>

      <Link to='/contact'>Acessar pagina de Contato</Link>
    </Container>
  );
};

export default Home;
