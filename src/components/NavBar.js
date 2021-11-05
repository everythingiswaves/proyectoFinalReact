import CartWidget from "./CartWidget.js"
import { NavLink, Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <nav>
            <h2>EIW</h2>
            <p><Link to="/">Inicio</Link></p>
            <p><NavLink to="/category/1">Remeras</NavLink></p>
            <p><NavLink to="/category/2">Camperas</NavLink></p>
            <p><NavLink to="/category/3">Pantalones</NavLink></p>
            <CartWidget/>
        </nav>
    )
}
export default NavBar