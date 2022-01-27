import requests from "../requests";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ProductsContext } from "../products-context"
import { useState, useEffect, useContext } from "react";
import TabelaProdutos from "../layout/TabelaProdutos";


const { enviarEncomenda } = requests;

const Encomenda = () => {

    const [products, setProducts] = useState([]);
    const { listProducts } = requests;
    const [produtoId, setProdutoId] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [encomenda, setEncomenda] = useState([]);

    const handleAdicionarProduto = async () => {

        const feed = { "produtoId": Number( produtoId), "quantidade": Number(quantidade) };

        encomenda.push(feed);

    };
    const handleEnviarEncomenda = async () => {
        console.log("encomenda", encomenda);
        const result = await enviarEncomenda(encomenda);
    if (result) {
      console.log(result);
      

      


    }
        

    };

    useEffect(() => {

        const fetchProducts = async () => {
            const productsLer = await listProducts();
            setProducts(productsLer ?? []);
            console.log("contexto")
            console.log(products);
        };
        fetchProducts();
    }, []);



    return (
        <>
            <ProductsContext.Provider value={{ products, setProducts }}>

                <TabelaProdutos values={products}>

                </TabelaProdutos>
            </ProductsContext.Provider>

            <>
                <Table striped bordered responsive hover variant="dark">
                    <thead>
                        <tr>
                            <th>Indice</th>
                            <th>Quantidade</th>

                        </tr>
                    </thead>

                    <tbody>
                        {encomenda.map((encomenda, index) => {
                            return (
                                <tr key={index}>
                                    <td>{encomenda.produtoId}</td>
                                    <td>{encomenda.quantidade}</td>

                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

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
                <Button onClick={handleAdicionarProduto} variant="dark" >Adicionar Produto</Button>
                <Button onClick={handleEnviarEncomenda} variant="dark">Criar Encomenda</Button>
            </>


        </>
    );
};

export default Encomenda;
