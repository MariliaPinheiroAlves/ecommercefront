import { useNavigate } from "react-router-dom"
import "./NewProduct.css"

import useForm from "../hooks/useForm"
import { useUserContext } from "../UserContext"

const Register = () => {
    const navigate = useNavigate()

    const username = useForm()
    const name = useForm()
    const email = useForm()
    const password = useForm()

    const { signUp } = useUserContext()

    const createUser = async () => {
        try {
            await signUp(
                email.value,
                password.value,
                name.value,
                username.value
            )

            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="new-product">
            <h1>New user</h1>
            <div className="w-50">
                <div className="form-control">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                        required
                        {...username}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                        {...name}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                        {...email}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                        {...password}
                    />
                </div>

                <button onClick={createUser} className="btn">
                    Create user
                </button>
            </div>
        </div>
    )
}

export default Register
