import url from "../axios/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css"

const Product = () => {
    const {id} = useParams();
    const [ product, setProduct ] = useState({});

    const getProduct = async() => {
        const response = await url.get(`/product/${id}`);
        const data = response.data;
        setProduct(data);
    };
    

    useEffect(() => {
        getProduct();
    }, [])
    

    return (
        <div className="product-container">
            {!product.nome ? <p>404 not found</p> : (
                <div className="product">
                    <img src={`http://localhost:5000/${product.imagem}`} />
                    <h4>{product.nome}</h4>
                    <p>{product.descricao}</p>
                    <p>R$ {product.preco}</p>
                </div>
            )}

        </div>
    )
}

export default Product