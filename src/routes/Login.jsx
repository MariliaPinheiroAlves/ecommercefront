import { useNavigate } from "react-router-dom"
import "./NewProduct.css"

import useForm from "../hooks/useForm"
import { useUserContext } from "../UserContext"

const Login = () => {
    const navigate = useNavigate()

    const email = useForm()
    const password = useForm()

    const { logIn } = useUserContext()

    const loginUser = async () => {
        try {
            await logIn(email.value, password.value)

            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="new-product">
            <h1>Welcome back!</h1>
            <h3>Log In</h3>
            <div>
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

                <button onClick={loginUser} className="btn">
                    Logar
                </button>
            </div>
        </div>
    )
}

export default Login
