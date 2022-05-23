import React from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";
const Contact: React.FC = () => {
  return (
    <Container>
      <h1>Contact</h1>
      <Link to='/'>Acessar pagina Home</Link>
    </Container>
  );
};

export default Contact;
