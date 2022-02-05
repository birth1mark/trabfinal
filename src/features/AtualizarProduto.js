import { useContext, useState } from "react";
import requests from "../requests";
import { Button } from "react-bootstrap";
import Select from "../layout/Select";
import { ProductsContext } from "../products-context";

const AtualizarProduto = () => {
  const { atualizarProduto } = requests;
  const { products, setProducts } = useContext(ProductsContext);
  const [produto, setProduto] = useState("");
  const handleChange = (event) => {
    setProduto({ ...produto, [event.target.name]: event.target.value });
  };
  const handleAtualizaProduto = async () => {

    const result = await atualizarProduto(produto);
    if (result) {
      console.log(result);
      const index = products.findIndex((produto) => {
        return produto.id === result.id;
      });
      let cloneProducts = [...products];
      cloneProducts[index] = { id: result, ...produto };
      setProducts(cloneProducts);
      setProduto();
    }
  };
  return (
    <>
      <h3>Atualizar Produtos</h3>
      <Select
        onChange={(event) => {
          setProduto(
            products.find((prod) => prod.id == event.target.value)
          );
        }}
        selectedValue={produto?.id ?? ""}
        values={products}
      />

      <input
        placeholder={"Nome"}
        value={produto?.nome ?? ""}
        name={"nome"}
        onChange={handleChange}
      />
      <input
        placeholder={"Categoria"}
        value={produto?.categoria ?? ""}
        name={"categoria"}
        onChange={handleChange}
      />
      <input
        placeholder={"Descrição"}
        value={produto?.descricao ?? ""}
        name={"descricao"}
        onChange={handleChange}
      />

      <input
        placeholder={"imageUrl"}
        value={produto?.imagemUrl ?? ""}
        name={"imagemUrl"}
        onChange={handleChange}
      />

      <input
        placeholder={"Preco"}
        value={produto?.preco ?? ""}
        name={"preco"}
        onChange={handleChange}

      />

      <Button variant="dark" onClick={handleAtualizaProduto}>
        Atualiza Produto
      </Button>
    </>
  );
};
export default AtualizarProduto;