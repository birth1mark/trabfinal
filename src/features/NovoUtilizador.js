import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";

import requests from "../requests";
import { IsLoggedInContext } from '../loggedin-context';
import { useNavigate } from "react-router-dom";
const CriarUtilizador = () => {
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { createUser } = requests;
  const { isLoggedIn, setIsLoggedIn } = useContext(IsLoggedInContext);


  const handleAdicionaUtilizador = async () => {
    const novoUtilizador = { nome: nome, password: password, username: username };

    const result = await createUser(novoUtilizador);
    if (result) {
      console.log(result.token);
      sessionStorage.setItem("Token_Bearer", result.token);

      setIsLoggedIn(true);


    }
  };

  return (
    <>
      <h2>CriarUtilizador</h2>
      <input
        placeholder={"Nome"}
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
      />
      <input type="password"
        placeholder={"Password"}
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input
        placeholder={"Username"}
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <button onClick={handleAdicionaUtilizador}>Adiciona Utilizador</button>
      <Button onClick={handleAdicionaUtilizador} variant="primary">Adiciona</Button>{' '}
    </>
  );
};

export default CriarUtilizador;
