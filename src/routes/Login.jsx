import "./NewProduct.css"

import useForm from "../hooks/useForm"
import { useUserContext } from "../context/UserContext"

const Login = () => {
    const email = useForm()
    const password = useForm()

    const { logIn } = useUserContext()

    const loginUser = async () => {
        try {
            await logIn(email.value, password.value)
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
                        value={email.value}
                        onChange={email.onChange}
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
                        value={password.value}
                        onChange={password.onChange}
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
