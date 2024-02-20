import url from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import "./NewProduct.css"

const EditProduct = () => {
    const {id} = useParams()
    const name = useForm()
    const price = useForm()
    const description = useForm()

    const editProduct = async (event) => {
        event.preventDefault();
        const product = {name: name.value, price: price.value, description: description.value};

        try {
            await url.put(`/product/${id}`, {
                ...product
            })
        } catch (error) {
            console.log(error);
        }


    }

    const getProduct = async() => {
        const response = await url.get(`/product/${id}`);
        const data = response.data;
    };

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <div className='new-product'>
            <h1>Editing</h1>
            <form onSubmit={(event) => editProduct(event)}>
                <div className='form-control'>
                    <label htmlFor="title">Name:</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        placeholder='Name of product'
                        {...name}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="price">Price:</label>
                    <input 
                        type="number" 
                        name="price" 
                        id="price" 
                        placeholder='Price'
                        {...price}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="price">Description:</label>
                    <input 
                        type="text" 
                        name="descricao" 
                        id="descricao" 
                        placeholder='Description'
                        {...description}
                    />
                </div>
                <input type="submit" value="Edit product" className='btn'/>
            </form>
        </div>
    )
    }

export default EditProduct