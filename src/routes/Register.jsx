import "./NewProduct.css"

import useForm from "../hooks/useForm"
import { useUserContext } from "../context/UserContext"

const Register = () => {
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
                        value={username.value}
                        onChange={username.onChange}
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
                        value={name.value}
                        onChange={name.onChange}
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

                <button onClick={createUser} className="btn">
                    Create user
                </button>
            </div>
        </div>
    )
}

export default Register
