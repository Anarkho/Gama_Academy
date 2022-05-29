import React, { useState, useCallback, FormEvent } from "react";
import { Container } from "./style";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

interface IData {
  name: string;
  email: string;
  senha: string;
}

const SignUp: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoad(true);
      api
        .post("", data)
        .then((response: any) => {
          if (response.status === 200) {
            toast.success("Cadastro realizado com sucesso!", {
              autoClose: false,
            });
            navigate("/signin");
          }
        })
        .catch((err) => {
          toast.error("Oops algo deu errado!");
        })
        .finally(() => setLoad(false));
    },
    [data, navigate]
  );

  if (load) {
    return <Loader />;
  }

  return (
    <Container>
      <h1>Inscreva-se</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            placeholder="Informe seu nome"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Informe seu email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="Informe sua senha"
            onChange={(e) => setData({ ...data, senha: e.target.value })}
          />
          <input type="submit" value="Cadastrar" />
        </fieldset>
      </form>
    </Container>
  );
};

export default SignUp;
