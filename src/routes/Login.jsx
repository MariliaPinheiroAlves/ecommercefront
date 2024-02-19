import url from "../axios/config";
import { useNavigate } from "react-router-dom"; //simular o redirect para home
import "./NewProduct.css"

const Login = () => {
    const navigate = useNavigate();

    const createUser = async (event) => {
        event.preventDefault();

        const user = {username, name, email, senha};

        await url.post("/users", {
            body: user
        })

        navigate("/admin");
    }

    return (
        <div className='new-product'>
            <h1>New user</h1>
            <form onSubmit={(event) => createProduct(event)}>
                <div className='form-control'>
                    <label htmlFor="title">Username:</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder='username'
                        required
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="title">Name:</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder='Name'
                        required
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="title">Email:</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder='Email'
                        required
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="title">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder='Password'
                        required
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>

                <input type="submit" value="Create user" className='btn'/>
            </form>
        </div>
    )
}

//quando o login for feito com sucesso ele chama a rota admin (linha 21 - navigate)
export default Login