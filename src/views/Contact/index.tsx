import React, { useState } from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";


interface IData {
  name: string;
  email: string;
}

const Contact: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  return (
    <Container>
      <div className="form-wrapper">
        <h1>Contact</h1>
        <div className="card">
          <form onSubmit={() => {}}>
            <fieldset>
              <label htmlFor="">Nome</label>
              <input
                type="text"
                placeholder="Insira seu nome"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <br />
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Insira seu e-mail"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <br />
              <input type="submit" value="Cadastrar" />
              <br />
            </fieldset>
          </form>
        </div>
        <Link to="/">Acessar pagina Home</Link>
      </div>
    </Container>
  );
};

export default Contact;
