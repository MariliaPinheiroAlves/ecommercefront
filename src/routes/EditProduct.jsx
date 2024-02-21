import "./NewProduct.css"

import { useMessageContext } from "../context/MessageContext"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import url from "../axios/config"
import useForm from "../hooks/useForm"

const EditProduct = () => {
    const { id } = useParams()
    const name = useForm()
    const price = useForm()
    const description = useForm()

    const { setMessage } = useMessageContext()
    const navigate = useNavigate()

    const [oldProduct, setOldProduct] = useState(null)

    const editProduct = async () => {
        try {
            const product = {
                name: name.value,
                price: price.value,
                description: description.value,
            }

            await url.put(`/product/${id}`, {
                ...product,
            })

            setMessage({
                value: "Produto atualizado com sucesso!",
                type: "success",
            })

            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const getProduct = async () => {
        const response = await url.get(`/product/${id}`)
        const data = response.data

        setOldProduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    useEffect(() => {
        if (oldProduct) {
            name.setInitalValue(oldProduct.nome)
            price.setInitalValue(oldProduct.preco)
            description.setInitalValue(oldProduct.descricao)
        }
    }, [oldProduct])

    return (
        <>
            {oldProduct && (
                <div className="new-product">
                    <h1>Editing</h1>
                    <div>
                        <div className="form-control">
                            <label htmlFor="title">Name:</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Name of product"
                                value={name.value}
                                onChange={name.onChange}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="price">Price:</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="Price"
                                value={price.value}
                                onChange={price.onChange}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="price">Description:</label>
                            <input
                                type="text"
                                name="descricao"
                                id="descricao"
                                placeholder="Description"
                                value={description.value}
                                onChange={description.onChange}
                            />
                        </div>
                        <button onClick={editProduct} className="btn">
                            Edit product
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default EditProduct
