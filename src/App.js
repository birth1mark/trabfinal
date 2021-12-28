import { useEffect, useState } from "react";
import { ProductsContext } from "./products-context";
import requests from "./requests";
import NovoUtilizador from "./features/NovoUtilizador";
import './App.css';
import ValidarUtilizador from "./features/ValidarUtilizador";
import CriarProduto from "./features/CriarProduto"
import ListarProdutos from "./features/ListarProdutos"

function App() {

  const [token, setToken] = useState('');
  useEffect(() => {
    const loggedInToken = sessionStorage.getItem("Token_Bearer");
    console.log(loggedInToken);
    if (loggedInToken) {
      const token = loggedInToken;
      setToken(token);
      console.log(loggedInToken);
    }
  }, []);
  return (
    <>
      {
        !token &&
        <>
          <NovoUtilizador></NovoUtilizador>
          <ValidarUtilizador></ValidarUtilizador>
        </>
    }
      {
        token &&
        <>
          <CriarProduto ></CriarProduto>
          <ListarProdutos></ListarProdutos>
          
        </>
      }
    </>
  )

}

export default App;
