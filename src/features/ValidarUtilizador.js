import { useContext, useState } from "react";

import requests from "../requests";
import { IsLoggedIn } from "../loggedin-context";

const ValidarUtilizador = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { validateUser } = requests;
  const handleValidaUtilizador = async () => {
    const validarUtilizador = { password, username };

    const result = await validateUser(validarUtilizador);
    if (result) {
      console.log(result.token);
  



      sessionStorage.setItem("Token_Bearer", result.token);
    }
  };
  
  return (
    <>
      <h2>Login</h2>
      <input
        placeholder={"Username"}
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input type="password"
        placeholder={"Password"}
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={handleValidaUtilizador}>Entrar</button>
    </>
  );
};

export default ValidarUtilizador;
