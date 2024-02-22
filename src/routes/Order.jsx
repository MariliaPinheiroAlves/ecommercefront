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
        let data = new Date(dataString);

        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        
        let dia = data.getDate();
        let mes = meses[data.getMonth()];
        let ano = data.getFullYear();
        let hora = data.getHours();
        let minutos = data.getMinutes();
        let segundos = data.getSeconds();
        
        let dataFormatada = dia + ' de ' + mes + ' de ' + ano + ' às ' + hora + ':' + minutos + ':' + segundos;
        
        return dataFormatada;
    }

    return (
        <div className="home">
            <h1>Order</h1>
            {order.length === 0 ? (
                <div className="new-order">
                    <p>Oops.. por enquanto nenhum pedido</p>
                    <Link to={"/order/add"} className="btn">Criar um novo pedido</Link>
                </div>
            ) : (
                <div className="order-container">
                    {order.map((order) => (
                        <div key={order.id}>
                            <div className="order">
                                <span>Order ID: {order.id}</span>
                                <p>User ID: {order.id_usuario}</p>
                                <p>Product ID: {order.id_produto}</p>
                                <p>Order date: {newDate(order.data_pedido)}</p>
                                <button
                                    onClick={() =>
                                            deleteOrder(order.id)
                                        }
                                    className="btn delete-btn">
                                        Delete order
                                    </button>
                            </div>
                        </div>
                    ))}
                    <Link to={"/order/add"} className="btn">Create new order</Link>
                </div>
            )}
        </div>
    );
    
    
}

export default Order
