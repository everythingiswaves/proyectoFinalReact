import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../CartContext';

export const Cart = () => {
    const {removeFromCart, cart, clearCart} = useContext(CartContext);
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
}

export default Cart
