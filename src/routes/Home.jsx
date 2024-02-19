import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import url from "../axios/config";
import "./Home.css";

const Home = () => {

    const [ product, setProduct ] = useState([]);
    //esse product automaticamente vira um array vazio
    //setProduct ganha a habilidade de modificar o valor do product

    const getProduct = async() => {
        //fake API
        try {
            const response = await url.get("/posts");
            const data = response.data
            
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async(id) => {
        await url.delete(`/posts/${id}`);

        const filteredProducts = product.filter((product) => product.id !== id);
        setProduct(filteredProducts);
    }

    useEffect(() => {     
        getProduct();
    }, [])
    
    //essa função resgata os dados da API por isso precisa ser assincrona
    useEffect(() => {
        //para executar essa função eu preciso usar o useEffect, porque agora eu posso coordenar a execução dessa função, se eu não fizer isso a cada renderização do componente a função getProduct vai ser executada
        
        getProduct();
    }, [])

    return (
        <div className="home">
            <h1>Products</h1>
            {product.length === 0 ? <p>Sorry, we don't have any products listed yet.</p> : (
                product.map((product) => (
                    <div className="product" key={product.id}>
                        <h4>{product.title}</h4>
                        <p>{product.body}</p>
                        <div className="btn-area">
                        <Link to={`/posts/${product.id}`} className="btn">
                            Know more
                        </Link>
                        <Link to={`/posts/edit/${product.id}`}className='btn edit-btn'>Edit</Link>
                        <button 
                            onClick={() => deleteProduct(product.id)}
                            className='btn delete-btn'>
                                Delete
                        </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

//falta modificar os nomes para as rotas corretas

export default Home