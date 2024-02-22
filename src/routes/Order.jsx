import { useMessageContext } from "../context/MessageContext"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import url from "../axios/config"
import "./Order.css"

const Order = () => {
    const [order, setOrder] = useState([])

    const { setMessage } = useMessageContext()

    const getOrder = async () => {
        try {
            const response = await url.get("/order")
            const data = response.data

            setOrder(data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteOrder = async (id) => {
        try {
            await url.delete(`/order/delete/${id}`)

            setMessage({
                value: "Pedido excluido com sucesso",
                type: "info",
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getOrder()
    }, [deleteOrder])

    const newDate = (dataString) => {
        const data = new Date(dataString)

        const meses = [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ]

        const dia = data.getDate()
        const mes = meses[data.getMonth()]
        const ano = data.getFullYear()
        const hora = data.getHours()
        const minutos = data.getMinutes()
        const segundos = data.getSeconds()

        const dataFormatada = `${dia} de ${mes} de ${ano} às ${hora}:${minutos}:${segundos}`

        return dataFormatada
    }

    return (
        <div className="home">
            <h1>Order</h1>
            {order.length === 0 ? (
                <div className="new-order">
                    <p>Oops.. por enquanto nenhum pedido</p>
                    <Link to={"/order/add"} className="btn">
                        Criar um novo pedido
                    </Link>
                </div>
            ) : (
                <div className="order-container">
                    {order.map((order) => (
                        <div key={order.id} className="order-wrapper">
                            <div className="order">
                                <img
                                    src={`http://localhost:5000/${order.imagem_produto}`}
                                />
                                <div>
                                    <span>Order ID: {order.id_pedido}</span>
                                    <p>User: {order.email_usuario}</p>
                                    <p>Product: {order.nome_produto}</p>
                                    <p>
                                        Order date: {newDate(order.data_pedido)}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => deleteOrder(order.id_pedido)}
                                className="btn delete-btn"
                            >
                                Delete order
                            </button>
                        </div>
                    ))}
                    <Link to={"/order/add"} className="btn">
                        Create new order
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Order
