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

function App() {
  return (
    <div className="App">
      
        <NovoUtilizador></NovoUtilizador>
        <ValidarUtilizador></ValidarUtilizador>
    
    </div>

  );
}

export default App;
