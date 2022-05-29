import React, { useState, useCallback, FormEvent } from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

interface IData {
  name: string;
  email: string;
}

const Contact: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      api
        .post("5a65e7d2-dafe-49d2-af09-34d42df11c39", data)
        .then((response: any) => {
          if (response.status === 200) {
            setSubmit(true);
          }
        })
        .catch((err: any) => console.log(err));
    },
    [data]
  );

  return (
    <Container>
      <div className="form-wrapper">
        <h1>Contact</h1>
        <div className="card">
          {submit ? (
            <div>
              <h2>Enviado</h2>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
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
          )}
        </div>
        <Link to="/home">Acessar pagina Home</Link>
      </div>
    </Container>
  );
};

export default Contact;
