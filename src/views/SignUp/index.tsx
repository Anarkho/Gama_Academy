import React, { useState, useCallback, FormEvent } from "react";
import { Container } from "./style";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface IData {
  registro: string;
  name: string;
  email: string;
  telefone: string;
  celular: string;
  senha: string;
  profissão: string;
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
        .then((response) => {
          if (response.status === 200) {
            toast.success("Cadastro realizado com sucesso!", {
              hideProgressBar: false,
              onClose: () => navigate("/signin"),
            });
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
    return <div>carregando...</div>;
  }

  return (
    <Container>
      <h1>Inscreva-se</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="">Registro</label>
          <input
            type="text"
            placeholder="Informe seu registro"
            onChange={(e) => setData({ ...data, registro: e.target.value })}
          />
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
          <label htmlFor="">Telefone</label>
          <input
            type="tel"
            placeholder="Informe seu telefone"
            onChange={(e) => setData({ ...data, telefone: e.target.value })}
          />
          <label htmlFor="">Celular</label>
          <input
            type="tel"
            placeholder="Informe seu celular"
            onChange={(e) => setData({ ...data, celular: e.target.value })}
          />
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="Informe sua senha"
            onChange={(e) => setData({ ...data, senha: e.target.value })}
          />
          <label htmlFor="">Profissão</label>
          <input
            type="text"
            placeholder="Informe sua Profissão"
            onChange={(e) => setData({ ...data, profissão: e.target.value })}
          />
          <input type="submit" value="Cadastrar" />
        </fieldset>
      </form>
    </Container>
  );
};

export default SignUp;
