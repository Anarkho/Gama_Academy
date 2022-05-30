import React, { useState } from "react"; //? rfc
import { Container, Button } from "./style";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const Home: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  if (!isLogin) {
    navigate("/");
  }
  return (
    <>
    <Nav/>
    <Container>
      {isLogin ? (
        <>
          <h1>Home</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            exercitationem corrupti repellendus nostrum sequi architecto dicta
            adipisci ducimus incidunt fuga!
          </p>
          <Link to="/contact">Acessar pagina de Contato</Link>
        </>
      ) : (
        <>
        </>
      )}
      <Button onClick={() => setIsLogin(!isLogin)}>Sair</Button>
    </Container>
    <Footer/>
    </>
  );
};

export default Home;
