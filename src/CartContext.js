import { createContext} from "react";
import { useState } from "react";

export const CartContext = createContext({})

export const {Provider} = CartContext



export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart);
    const addToCart = (producto, cantidad) => {
        const nuevoCart = [...cart];//copio el cart
        console.log(nuevoCart);
        if(isInCart(producto)){
            const productoEnCart = cart.find(item => item.producto.id === producto.id)
            productoEnCart.cantidad = cantidad;//quiero que actualize el numero en vez de sumarlo
        }else{
            nuevoCart.push({producto, cantidad})//le agrego lo nuevo
            setCart(nuevoCart)
            
        }
        
        
    }
    const isInCart = (producto) => {
        const productoEnCart = cart.find(item => item.producto.id === producto.id)
        if(productoEnCart){
            return true
        }else{
            return false
        }
    }

    const removeFromCart = (producto) => {
        const nuevoCart = [...cart];//copio el cart
        const productoEnCart = cart.find(item => item.producto.id === producto.id)
        const index = cart.indexOf(productoEnCart)
        nuevoCart.splice(index, 1)
        setCart(nuevoCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const valor_del_contexto = {
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart
    }

    return(
        <Provider value={valor_del_contexto}>
            {children}
        </Provider>
    )
}
