import url from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewProduct.css"

const NewProduct = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const createProduct = async (event) => {
        event.preventDefault();

        const product = {title, price, description, userId: 1};

        await url.post("/posts", {
            body: product
        })

        navigate("/");
    }

    return (
        <div className='new-product'>
            <h1>Insert new product</h1>
            <form onSubmit={(event) => createProduct(event)}>
                <div className='form-control'>
                    <label htmlFor="title">Name:</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        placeholder='Name of product'
                        required
                        onChange={(event) => setTitle(event.target.value)}
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
                <input type="submit" value="Create Product" className='btn'/>
            </form>
        </div>
    )
}

export default NewProduct
