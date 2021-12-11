import { useEffect, useState } from "react";
import { UsersContext } from "./user-context";
// import requests from "./requests";
// import AtualizaUtilizadores from "./features/AtualizaUtilizadores";
// import ListaUtilizadores from "./features/ListaUtilizadores";
// import CriarUtilizador from "./features/CriarUtilizador";
// import RemoveUtilizadores from "./features/RemoveUtilizadores";

import NovoUtilizador from "./features/NovoUtilizador";
import './App.css';
import ValidarUtilizador from "./features/ValidarUtilizador";
import CriarProduto from "./features/CriarProduto"
import ListarProdutos from "./features/ListarProdutos"

function App() {
  return (
    <div className="App">

      <NovoUtilizador></NovoUtilizador>
      <ValidarUtilizador></ValidarUtilizador>
      <CriarProduto ></CriarProduto>
      <br></br>
      <ListarProdutos></ListarProdutos>

    </div>

  );
}

export default App;
