import { useContext, useEffect, useState } from "react";

import NovoUtilizador from "./features/NovoUtilizador";
import './App.css';
import ValidarUtilizador from "./features/ValidarUtilizador";
import CriarProduto from "./features/CriarProduto"
import Manutencao from "./features/Manutencao"
import Encomenda from "./features/Encomenda";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Home from "./Home";
import { IsLoggedInContext } from "./loggedin-context";
import { Navbar } from "react-bootstrap";

function App() {
  const [activeKey, setActiveKey] = useState("/");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    console.log("navegar");
    navigate("/");

  }, []);


  return (
    <>
      <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navbar
          bg="dark"
          variant="dark"

          activeKey={activeKey}
          onSelect={(selectedKey) => {
            setActiveKey(selectedKey);
          }}
        >
          <Nav.Item>
            <Nav.Link as={Link} eventKey="/" to="/">
              Loja
            </Nav.Link>
          </Nav.Item>

          {!isLoggedIn && <>
            <Nav.Item>
              <Nav.Link as={Link} eventKey="/novo" to="/novo">
                Novo Utilizador
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} eventKey="/validar" to="/validar">
                Validar Utilizador
              </Nav.Link>

            </Nav.Item>
          </>}
          {isLoggedIn && <>
             <Nav.Item>
              <Nav.Link as={Link} eventKey="/manutencao" to="/manutencao">
                Manutençao de Produtos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} eventKey="/encomenda" to="/encomenda">
                Fazer Encomenda
              </Nav.Link>
            </Nav.Item>
          </>
          }
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/novo" element={<NovoUtilizador />}></Route>
          <Route path="/validar" element={<ValidarUtilizador />}></Route>
         <Route path="/manutencao" element={<Manutencao />}></Route>
          <Route path="/encomenda" element={<Encomenda />}></Route>
         
        </Routes>
      </IsLoggedInContext.Provider>
    </>
  )

}

export default App;
