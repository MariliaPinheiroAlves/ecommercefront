import { Link } from "react-router-dom"
import "./NavBar.css"
import { useUserContext } from "../UserContext"

const NavBar = () => {
    const { user, logged, logOut } = useUserContext()

    return (
        <nav className="navbar">
            <h2>
                <Link to={"/"}>ADAEcommerce</Link>
            </h2>

            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/new"} className="new-btn">
                        Create product
                    </Link>
                </li>
                <li>
                    <Link to={"/order"}>Order</Link>
                </li>
                {logged ? (
                    <>
                        <p>logado com: {user.email}</p>
                        <button onClick={logOut} className="btn">
                            Sair
                        </button>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to={"/login"}>Login</Link>
                        </li>
                        <li>
                            <Link to={"/register"}>Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default NavBar
