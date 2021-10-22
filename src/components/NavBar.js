import CartWidget from "./CartWidget.js"

const NavBar = () =>{
    return(

        <nav>
            <h2>EIW</h2>
            <a href="#">Tienda</a>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
            <a href="#">Contacto</a>
            <CartWidget/>
        </nav>
    )
}
export default NavBar