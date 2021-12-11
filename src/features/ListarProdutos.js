import requests from "../requests";
import Button from 'react-bootstrap/Button';
import { Table } from "react-bootstrap";

const { listProducts } = requests;
const ListarProdutos = () => {
    // const { users, setUsers } = useContext(UsersContext);



    const handleListarProdutos = async () => {
        const result = await listProducts();
        if (result) {
            
            console.log(result);


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
