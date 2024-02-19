import url from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewProduct.css"

const EditProduct = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const { id } = useParams();

    const getProduct = async() => {
        const response = await url.get(`/posts/${id}`);
        const data = response.data;
        setTitle(data.title);
        setPrice(data.price);
    };
    
    const editProduct = async(event) => {
        event.preventDefault();
        const product = {title, price, description, userId: 1};

        await url.put(`/posts/${id}`, {
            body: product
        })
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <div className='new-product'>
            <h1>Editing</h1>
            <h1>{title}</h1>
            <form onSubmit={(event) => editProduct(event)}>
                <div className='form-control'>
                    <label htmlFor="title">Name:</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        placeholder='Name of product'
                        required
                        onChange={(event) => setTitle(event.target.value)}
                        value={title || ""}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="price">Price:</label>
                    <input 
                        type="number" 
                        name="price" 
                        id="price" 
                        placeholder='Price'
                        required
                        onChange={(event) => setPrice(event.target.value)}
                        value={price || ""}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="photo">Photo:</label>
                    <input 
                        type="file" 
                        name="photo" 
                        id="photo" 
                    />
                </div>
                <input type="submit" value="Edit product" className='btn'/>
            </form>
        </div>
    )
    }

export default EditProduct
