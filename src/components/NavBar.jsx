import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className='navbar'>
            <h2>
                <Link to={'/'}>ADAEcommerce</Link>
            </h2>

            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li>
                    <Link to={'/new'} className="new-btn">
                        Create product
                    </Link>
                </li>
                <li>
                    <Link to={'/order'}>
                        Order
                    </Link>
                </li>
                <li>
                    <Link to={'/login'}>
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
