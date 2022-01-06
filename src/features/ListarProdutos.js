import requests from "../requests";
import Button from 'react-bootstrap/Button';
import { ProductsContext } from "../products-context"
import { useContext, useState, useEffect } from "react";
import TabelaProdutos from "../layout/TabelaProdutos";


const ListarProdutos = () => {

    const [ products, setProducts ] = useState([]);
    const { listProducts } = requests;

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
                {/* <button onClick={handleAdicionaUtilizador}>Adiciona Utilizador</button> */}
                <Button variant="primary">Listar Produtos</Button>{' '}
                <TabelaProdutos values={products}>

                </TabelaProdutos>
            </ProductsContext.Provider>
        </>
    );
};

export default ListarProdutos;
