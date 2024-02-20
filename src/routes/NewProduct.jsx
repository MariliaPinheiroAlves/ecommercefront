import url from "../axios/config"

import { useNavigate } from "react-router-dom"
import useForm from "../hooks/useForm"

import "./NewProduct.css"
import { useState } from "react"

const NewProduct = () => {
    const navigate = useNavigate()
    const title = useForm()
    const price = useForm()
    const description = useForm()

    const [imagem, setimagem] = useState(null)

    const createProduct = async () => {
        if (imagem) {
            try {
                const form = new FormData()

                form.append("name", title.value)
                form.append("description", description.value)
                form.append("price", price.value)
                form.append("imagem", imagem.raw)

                const response = await url.post("/product", form, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })

                navigate("/")
            } catch (error) {
                console.log(error)
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
                        {...title}
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
                        {...description}
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
                        {...price}
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
                </div>
                <button onClick={createProduct} className="btn">
                    Create Product
                </button>
            </div>
        </div>
    )
}

export default NewProduct