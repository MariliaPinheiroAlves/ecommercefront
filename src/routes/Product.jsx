import url from "../axios/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css"

const Product = () => {
    const {id} = useParams();

    const [ product, setProduct ] = useState({});

    const getProduct = async() => {
        console.log("TESTANDO")
        const response = await url.get(`/posts/${id}`);
        const data = response.data;
        setProduct(data);
    };
    

    useEffect(() => {
        getProduct();
    }, [])
    

    return (
        <div className="product-container">
            {!product.title ? <p>404 not found</p> : (
                <div className="product">
                    <h1>{product.title}</h1>
                    <p>{product.body}</p>
                </div>
            )}

        </div>
    )
}

export default Product
