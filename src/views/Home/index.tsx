import React, { useState } from "react"; //? rfc
import { Container, Button } from "./style";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Container>
      {isLogin ? (
        <>
          <p>Carregando...</p>
        </>
      ) : (
        <>
          <h1>Home</h1>
          <Link to="/contact">Acessar pagina de Contato</Link>
        </>
      )}
      <Button onClick={() => setIsLogin(!isLogin)}>Logar</Button>
    </Container>
  );
};

export default Home;
