import { Button } from "react-bootstrap";
import requests from "../requests";
import { useState } from "react";


const EliminarProduto = () => {
    const { eliminarProduto } = requests;
    const [indice, setIndice] = useState("");
    const handleEliminarProduto = async () => {
        const result = await eliminarProduto(indice);
        if (result) {
            console.log(result);
        }
    }
    return (
        <>
            <input
                placeholder="Id a Eliminar"
                value={indice}
                onChange={(event) => {
                    setIndice(event.target.value);
                }}
            />
            <Button variant="dark" onClick={handleEliminarProduto}>
                Eliminar Produto
            </Button>
        </>
    );

};
export default EliminarProduto;