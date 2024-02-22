import url from "../axios/config"
import useForm from "../hooks/useForm"

import { useMessageContext } from "../context/MessageContext"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import "./NewOrder.css"

const NewOrder = () => {
    const productID = useForm()
    const userID = useForm()

    const { setMessage } = useMessageContext()

    const [products, setProducts] = useState(null)
    const [users, setUsers] = useState(null)

    const navigate = useNavigate()

    const createOrder = async () => {
        try {
            const order = {
                user_id: userID.value,
                product_id: productID.value,
            }

            await url.post("/order/add", order)

            setMessage({
                value: "Pedido adicionado com sucesso",
                type: "success",
            })

            navigate("/order")
        } catch (error) {
            setMessage({
                value: error.response.data.message,
                type: "danger",
            })
        }
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await url.get("/products")

                return response.data
            } catch (error) {
                console.log(error)
            }
        }

        const getUsers = async () => {
            try {
                const response = await url.get("/users")

                return response.data
            } catch (error) {
                console.log(error)
            }
        }

        const getProps = async () => {
            const [products, users] = await Promise.all([
                getProducts(),
                getUsers(),
            ])

            setProducts(products)
            setUsers(users)
        }

        getProps()
    }, [])

    return (
        <>
            {products && users && (
                <div className="new-order">
                    <h1>Insert new order</h1>
                    <div className="form-control">
                        <label htmlFor="productID">Product ID:</label>
                        <select
                            id="productID"
                            value={productID.value}
                            onChange={productID.onChange}
                            className="select-form"
                        >
                            <option value="" selected disabled hidden>
                                Select a Product
                            </option>
                            {products.map((product) => (
                                <option value={product.id_produto}>
                                    {product.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="userID">User ID:</label>
                        <select
                            id="userID"
                            value={userID.value}
                            onChange={userID.onChange}
                            className="select-form"
                        >
                            <option value="" selected disabled hidden>
                                Select a User
                            </option>
                            {users.map((user) => (
                                <option value={user.id_usuario}>
                                    {user.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button onClick={createOrder} className="btn">
                        Create Order
                    </button>
                </div>
            )}
        </>
    )
}

export default NewOrder
