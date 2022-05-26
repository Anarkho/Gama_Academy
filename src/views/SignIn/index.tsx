import React, { useState, useCallback, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { api } from "../../services/api";
import { Container } from "./style";

interface IData {
  email: string;
  senha: string;
}
const SignIn: React.FC = () => {
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
            toast.success("Logado com sucesso!", {
              hideProgressBar: false,
            });
            navigate("/");
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
      <h1>Logar</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
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
          <input type="submit" value="Logar" />
        </fieldset>
      </form>
      <Link to="/signup">Clique para se cadastrar</Link>
    </Container>
  );
};

export default SignIn;
