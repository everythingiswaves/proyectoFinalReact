import CartWidget from "./cart/CartWidget";
import { NavLink, Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from '../CartContext';

const NavBar = () =>{
    const {cart} = useContext(CartContext);
    return(
        <nav>
            <span className="tituloNav">
                <Link to="/"><img src="/media/icono.png" /></Link>
                <NavLink to="/" style={{ textDecoration: 'none' }}><h1 className="titulo">Everything Is Waves</h1></NavLink>
            </span>
            <h3 className="link"><NavLink to="/category/1" style={{ textDecoration: 'none' }}>Triangulos</NavLink></h3>
            <h3 className="link"><NavLink to="/category/2" style={{ textDecoration: 'none' }}>Circulos</NavLink></h3>
            <h3 className="link"><NavLink to="/category/3" style={{ textDecoration: 'none' }}>Otros</NavLink></h3>
            { cart.length ? <CartWidget/> : null}
        </nav>
    )
}
export default NavBar