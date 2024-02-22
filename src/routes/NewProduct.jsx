import "./NewProduct.css"

import url from "../axios/config"
import useForm from "../hooks/useForm"

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useMessageContext } from "../context/MessageContext"

const NewProduct = () => {
    const navigate = useNavigate()
    const title = useForm()
    const price = useForm()
    const description = useForm()

    const [imagem, setimagem] = useState(null)

    const { setMessage } = useMessageContext()

    const createProduct = async () => {
        if (imagem) {
            try {
                const form = new FormData()

                form.append("name", title.value)
                form.append("description", description.value)
                form.append("price", price.value)
                form.append("imagem", imagem.raw)

                await url.post("/product", form, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })

                setMessage({
                    value: "Produto adicionado com sucesso",
                    type: "success",
                })

                navigate("/")
            } catch (error) {
                console.log(error)

                setMessage({
                    value: error.response.data.message,
                    type: "danger",
                })
            }
        }
    }

    const handleFile = (event) => {
        const files = event.currentTarget.files

        if (files) {
            const raw = files[0]

            setimagem({
                preview: URL.createObjectURL(raw),
                raw,
            })
        }
    }

    return (
        <div className="new-product">
            <h1>Insert new product</h1>
            <div>
                <div className="form-control">
                    <label htmlFor="title">Name:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Name of product"
                        required
                        value={title.value}
                        onChange={title.onChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="title">Description:</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Description of product"
                        required
                        value={description.value}
                        onChange={description.onChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Price"
                        required
                        value={price.value}
                        onChange={price.onChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="photo">Photo:</label>
                    <input
                        onChange={handleFile}
                        type="file"
                        name="photo"
                        id="photo"
                    />
                    {imagem && <img src={imagem.preview} />}
                </div>
                <button onClick={createProduct} className="btn">
                    Create Product
                </button>
            </div>
        </div>
    )
}

export default NewProduct
