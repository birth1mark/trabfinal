import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import { UsersContext } from "../user-context";
import requests from "../requests";

const CriarProduto = () => {
  // const { users, setUsers } = useContext(UsersContext);
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const { createProduct } = requests;

  const handleCriarProduto = async () => {
    const novoProduto = { categoria: categoria, descricao: descricao, id: 0, imagemUrl: imagemUrl, nome: nome, preco: preco };
    const result = await createProduct(novoProduto);
    if (result) {
      console.log(result);


    }
  };
  return (
    <>
      <h2>Criar Produto</h2>
      <input
        placeholder={"Categoria"}
        value={categoria}
        onChange={(event) => {
          setCategoria(event.target.value);
        }}
      />
      <input
        placeholder={"Descrição"}
        value={descricao}
        onChange={(event) => {
          setDescricao(event.target.value);
        }}
      />
      {/* <input
          placeholder={"Id"}
          value={id}
          onChange={(event) => {
            setId(event.target.value);
          }}
        /> */}
      <input
        placeholder={"Imagem Url"}
        value={imagemUrl}
        onChange={(event) => {
          setImagemUrl(event.target.value);
        }}
      />
      <input
        placeholder={"Nome"}
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
      />
      <input
        placeholder={"Preço"}
        value={preco}
        onChange={(event) => {
          setPreco(event.target.value);
        }}
      />
      {/* <button onClick={handleAdicionaUtilizador}>Adiciona Utilizador</button> */}
      <Button onClick={handleCriarProduto} variant="primary">Adicionar Produto</Button>{' '}
    </>
  );
};

export default CriarProduto;
