import { useState } from "react";
import requests from "../requests";
import { Button } from "react-bootstrap";

const AtualizarProduto = () => {
  const [indice, setIndice] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemUrl, setimagemUrl] = useState("");
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const { atualizarProduto } = requests;

  const handleAtualizaProduto = async () => {
    const produto = {
      indice: indice,
      categoria: categoria,
      descricao: descricao,
      imagemUrl: imagemUrl,
      nome: nome,
      preco: preco,
    };

    const result = await atualizarProduto(produto);
    if (result) {
      console.log(result);
    }
  };
  return (
    <>
      <h3>Atualizar Produtos</h3>

      <input
        placeholder={"Indice"}
        value={indice}
        onChange={(event) => {
          setIndice(event.target.value);
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

      <input
        placeholder={"imageUrl"}
        value={imagemUrl}
        onChange={(event) => {
          setimagemUrl(event.target.value);
        }}
      />

      <input 
        placeholder={"Preco"}
        value={preco}
        onChange={(event) => {
          setPreco(event.target.value);
        }}
      />
   
      <Button variant="dark" onClick={handleAtualizaProduto}>
        Atualiza Produto
      </Button>
    </>
  );
};
export default AtualizarProduto;