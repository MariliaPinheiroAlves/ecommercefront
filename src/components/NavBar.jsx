import { Link } from "react-router-dom"
import "./NavBar.css"

//no single page aplication não usamos a tag 'a' porque ela recarrega a página, então a gente exporta o componente Link do react router dom para que ela direcione a rota de um elemento clicavel, com isso a gente passa na propriedade 'to' a rota que você quer que ela direcione

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
