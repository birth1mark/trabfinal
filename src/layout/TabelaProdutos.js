import { Table } from "react-bootstrap";
import { useState, useContext } from "react";

const TabelaProdutos = ({ values }) => {
  console.log("verificar context");
  console.log(values);
  const [categoria, setCategoria] = useState("");
  const [nome, setNome] = useState("");
  const [foundProducts, setFoundProducts] = useState(values);
  console.log("aqui vai oo nome");
  console.log(nome);
  
  const filter = (e) => {

    const keyword = e.target.value;
    console.log(keyword);
    if (keyword !== '') {
      const results = values.filter((value) => {
        return value.nome.toLowerCase().startsWith(keyword.toLowerCase());
        
      });
      setFoundProducts(results);
    } else {
      console.log("else");
      setFoundProducts(values);
      // If the text field is empty, show all users
    }

    setNome(keyword);

  };

  return (

    <>
      <input
        type="search"
        value={nome}
        onChange={filter}
        className="input"
        placeholder="Filter"
        text=""
        
        
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
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {foundProducts.map((values, indice) => {
            return (
              <tr key={indice}>
                <td>{values.id}</td>
                <td>{values.categoria}</td>
                <td>{values.nome}</td>
                <td>{values.descricao}</td>
                <td>{values.imagemUrl}</td>
                <td>{values.preco}</td>
                <td><input type="checkbox" onclick="get"></input></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TabelaProdutos;
