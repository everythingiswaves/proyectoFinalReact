import CartWidget from "./cart/CartWidget";
import { NavLink, Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from '../CartContext';

const NavBar = () =>{
    const {cart} = useContext(CartContext);
    return(
        <nav>
            <h2>EIW</h2>
            <p><Link to="/">Inicio</Link></p>
            <p><NavLink to="/category/1">Remeras</NavLink></p>
            <p><NavLink to="/category/2">Camperas</NavLink></p>
            <p><NavLink to="/category/3">Pantalones</NavLink></p>
            { cart.length ? <CartWidget/> : null}
        </nav>
    )
}
export default NavBar