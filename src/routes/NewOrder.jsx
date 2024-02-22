import url from "../axios/config"
import useForm from "../hooks/useForm"

import { useMessageContext } from "../context/MessageContext"

const NewOrder = () => {
    const { setMessage } = useMessageContext()
    
    const createOrder = async () => {
        try {
            const form = new FormData()

            form.append("productID", productID.value)
            form.append("userID", userID.value)

            setMessage({
                value: "Pedido adicionado com sucesso",
                type: "success",
            })

            console.log('ok');
            console.log(productID.value);
            console.log(userID.value);
        } catch (error) {
            setMessage({
                value: error.response.data.message,
                type: "danger",
            })
        }
    }

    return (
        <div className='new-order'>
            <h1>Insert new order</h1>
            <div className="form-control">
                <label htmlFor="productID">Product ID:</label>
                <input
                    type="number"
                    name="productID"
                    id="productID"
                    placeholder="Insert product ID"
                    required
                    />
            </div>
            <div className="form-control">
                <label htmlFor="userID">User ID:</label>
                <input
                    type="text"
                    name="userID"
                    id="userID"
                    placeholder="Insert user ID"
                    required
                    />
            </div>
            <button onClick={createOrder} className="btn">
                    Create Order
            </button>
        </div>
    )
}

export default NewOrder
