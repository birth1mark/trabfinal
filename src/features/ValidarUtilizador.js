import { useContext, createContext, useState } from "react";

import requests from "../requests";
import { IsLoggedInContext } from "../loggedin-context";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const ValidarUtilizador = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(IsLoggedInContext);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { validateUser } = requests;

  const navigate = useNavigate();

  const handleValidaUtilizador = async () => {
    const validarUtilizador = { password, username };

    const result = await validateUser(validarUtilizador);
    if (result) {
      console.log(result.token);
      sessionStorage.setItem("Token_Bearer", result.token);
      setIsLoggedIn(true);
      navigate("/");

    }



  }

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

      <Button onClick={handleValidaUtilizador} variant="dark" >Entrar</Button>
    </>

  );
};

export default ValidarUtilizador;
