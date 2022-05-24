import React from "react";
import { Container } from "./style";

const SignIn: React.FC = () => {
  return (
    <Container>
      <h1>Logar</h1>
      <form onSubmit={() => alert("teste")}>
        <fieldset>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Informe seu email" />
          <label htmlFor="">Senha</label>
          <input type="password" placeholder="Informe sua senha" />
          <input type="submit" value="Cadastrar" />
        </fieldset>
      </form>
    </Container>
  );
};

export default SignIn;
