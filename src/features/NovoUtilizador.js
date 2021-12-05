import { useContext, useState } from "react";
import { UsersContext } from "../user-context";
import requests from "../requests";

const CriarUtilizador = () => {
  const { users, setUsers } = useContext(UsersContext);
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { createUser } = requests;

  const handleAdicionaUtilizador = async () => {
    const novoUtilizador = { nome: nome, password: password, username: username };
    //https://jsonplaceholder.typicode.com devolve apenas um id
    const result = await createUser(novoUtilizador);
    if (result) {
      const newUser = { id: result.id, ...novoUtilizador };

      console.log(newUser);

      setUsers([...users, newUser]);
      setNome("");
      setPassword("");
      setUsername("");
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
    </>
  );
};

export default CriarUtilizador;
