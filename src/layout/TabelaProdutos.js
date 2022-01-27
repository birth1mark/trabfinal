import { Table } from "react-bootstrap";
import { useState, useContext } from "react";
import { ProductsContext } from "../products-context";

const TabelaProdutos = ({values}) => {
  
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const {products} = useContext(ProductsContext);
  console.log("A listar da tabela Produtos")
  console.log(values);
  
 

  const filteredProducts=()=>{
    return products
    .filter(product=>{
      return product.nome.includes(nome)
    })
    .filter(product=>{
      return product.descricao.includes(descricao)
    });
    ;
  }
  return (

    <>
      <input
        name="filtro1"
        type="search"
        value={nome}
        onChange={(event) => {
          setNome(event.target.value)}}
        
        placeholder="Filtro Nome"

      />
      <input
        name="filtro2"
        type="search"
        value={descricao}
        onChange={(event) => {
          setDescricao(event.target.value)}}
        placeholder="Filtro Descriçao"

      />
      <Table striped bordered responsive hover variant="dark">
        <thead>
          <tr>
            <th>Indice</th>
            <th>Categoria</th>
            <th>Nome</th>
            <th>Descricao</th>
            <th>Imagem</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts().map((product, indice) => {
            return (
              
              <tr key={indice}>
                <td>{product.id}</td>
                <td>{product.categoria}</td>
                <td>{product.nome}</td>
                <td>{product.descricao}</td>
                <td><img src={product.imagemUrl} style={{height: 50, width: 50}} alt=""/></td>
                <td>{product.preco}€</td>
               
              </tr>
              
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TabelaProdutos;
