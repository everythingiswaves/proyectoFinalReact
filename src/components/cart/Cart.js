import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const {removeFromCart, cart, clearCart} = useContext(CartContext);
    if(cart.length > 0) {
        return (
            <div className="cart">
                <h2>Cart</h2>
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.producto.id}>
                            {/* <img src={item.producto.image} alt={item.producto.name} /> */}
                            <div>
                                <h3>{item.producto.name}</h3>
                                <p>{item.producto.price}</p>
                                <p> {item.cantidad}</p>
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div> 
                    <p>Total: ${cart.reduce((a,c) => a + c.producto.price * c.cantidad, 0)}</p>
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
            </div>
        )
    } else {
        return(
            <div className="cart">
                <h3>No hay productos en el carrito</h3>
                <h3><Link to="/">Ir a comprar</Link></h3>
            </div>
        )
    }
}

export default Cart
