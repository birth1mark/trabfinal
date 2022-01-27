import requests from "../requests";

import { ProductsContext } from "../products-context"
import {useState, useEffect } from "react";
import TabelaProdutos from "../layout/TabelaProdutos";
import CriarProduto from "./CriarProduto";
import EliminarProduto from "./EliminarProduto"
import AtualizarProduto from "./AtualizarProduto";

const Manutencao = () => {

    const [products, setProducts ] = useState([]);
    const { listProducts } = requests;

    useEffect(() => {
       
        const fetchProducts = async () => {
            const productsLer = await listProducts();
            setProducts(productsLer ?? []);
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
                <br></br><CriarProduto></CriarProduto><br></br>

                
                <AtualizarProduto></AtualizarProduto>
                <br></br><EliminarProduto></EliminarProduto><br></br>
            </ProductsContext.Provider>
        </>
    );
};

export default Manutencao;
