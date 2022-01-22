import { useContext, useEffect, useState } from "react";

import NovoUtilizador from "./features/NovoUtilizador";
import './App.css';
import ValidarUtilizador from "./features/ValidarUtilizador";
import CriarProduto from "./features/CriarProduto"
import ListarProdutos from "./features/ListarProdutos"
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Home from "./Home";

import { Navbar } from "react-bootstrap";

function App() {
  const [activeKey, setActiveKey] = useState("/");
  const navigate = useNavigate();

  
  useEffect(() => {
    
    console.log("navegar");
    navigate("/");
    
  }, []);


  return (
    <>
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
          {sessionStorage.getItem("Token_Bearer") && <>
            <Nav.Item>
              <Nav.Link as={Link} eventKey="/criarproduto" to="/criarproduto">
                Criar Produto
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} eventKey="/listarprodutos" to="/listarprodutos">
                Listar Produtos
              </Nav.Link>
            </Nav.Item>
          </>
          }
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/novo" element={<NovoUtilizador />}></Route>
          <Route path="/validar" element={<ValidarUtilizador />}></Route>
          <Route path="/criarproduto" element={<CriarProduto />}></Route>
          <Route path="/listarprodutos" element={<ListarProdutos />}></Route>
        </Routes>
     
    </>
  )

}

export default App;
