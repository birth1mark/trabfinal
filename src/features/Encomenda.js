import requests from "../requests";
import { Button } from "bootstrap";
import { ProductsContext } from "../products-context"
import { useState, useEffect } from "react";
import TabelaProdutos from "../layout/TabelaProdutos";

const Encomenda = () => {

    const [products, setProducts] = useState([]);
    const { listProducts } = requests;
    const [produtoId, setProdutoId] = useState();
    const [quantidade, setQuantidade] = useState();

    useEffect(() => {

        const fetchProducts = async () => {
            const products = await listProducts();
            setProducts(products ?? []);
            console.log("contexto")
            console.log(products);
        };
        fetchProducts();
    }, [listProducts]);


    return (
        <>
            <ProductsContext.Provider value={{ products, setProducts }}>

                <TabelaProdutos values={products}>

                </TabelaProdutos>
                <input placeholder={"Indice"}
                    value={produtoId}
                    onChange={(event) => {
                        setProdutoId(event.target.value);
                    }}
                />
                <input placeholder={"Quantidade"}
                    value={quantidade}
                    onChange={(event) => {
                        setQuantidade(event.target.value);
                    }}
                />
                <Button  variant="dark">Adicionar Produto</Button>{' '}
                <Button  variant="dark">Criar Encomenda</Button>{' '}
            </ProductsContext.Provider>
        </>
    );
};

export default Encomenda;
