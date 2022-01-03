import requests from "../requests";
import Button from 'react-bootstrap/Button';
import {ProductsContext} from "../products-context"
import { useContext } from "react";
import UserLoggedIn from "../loggedin-context";

const { listProducts } = requests;
const ListarProdutos = () => {
    const { products, setProducts } = useContext(ProductsContext);



    const handleListarProdutos = async () => {
        const result = await listProducts();
        if (result) {

            console.log(result);
            setProducts(result);



        }
    };
    return (
        <>

            {/* <button onClick={handleAdicionaUtilizador}>Adiciona Utilizador</button> */}
            <Button onClick={handleListarProdutos} variant="primary">Listar Produtos</Button>{' '}
        </>
    );
};

export default ListarProdutos;
