import { Button } from "react-bootstrap";
import requests from "../requests";
import { useState } from "react";
import { ProductsContext } from "../products-context";
import { useContext } from "react";
import Select from "../layout/Select";

const EliminarProduto = () => {
    const { products, setProducts } = useContext(ProductsContext);
    const { eliminarProduto } = requests;
    const [indice, setIndice] = useState("");
    const [produto, setProduto] = useState("");
    const handleEliminarProduto = async () => {
        if (produto) {

            const result = await eliminarProduto(produto.id);
            if (result) {
                setProducts(products.filter((prod) => prod.id !== produto.id));
                setProduto();
            }
        }

    }
    return (
        <>
            <Select
                onChange={(event) => {
                    setProduto(
                        products.find((prod) => prod.id === event.target.value)
                    );
                }}
                selectedValue={produto?.id ?? ""}
                values={products}
            />
            <Button variant="dark" onClick={handleEliminarProduto}>
                Eliminar Produto
            </Button>
        </>
    );

};
export default EliminarProduto;