import React from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { firestore } from "../../firebase";

export const Cart = () => {
  const { removeFromCart, cart, clearCart } = useContext(CartContext);

  const endPurchase = (event) => {
    event.preventDefault();
    alert("Compra realizada con exito");

    const user = {
      name: event.target[0].value,
      phone: event.target[1].value,
      email: event.target[2].value,
    };

    let item = cart.map((item) => {
      return {
        id: item.producto.id,
        name: item.producto.name,
        price: item.producto.price,
      };
    });

    const order = {
      user: user,
      item: item,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: cart.reduce((a, c) => a + c.producto.price * c.cantidad, 0),
    };

    const db = firestore;
    const collection = db.collection("orders");
    const query = collection.add(order);

    clearCart();
  };

  if (cart.length > 0) {
    return (
      <div className="cart">
        <h2>Cart</h2>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.producto.id}>
              <div>
                <h3>{item.producto.name}</h3>
                <p>{item.producto.price}</p>
                <p> {item.cantidad}</p>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}
          <p>
            Total: $
            {cart.reduce((a, c) => a + c.producto.price * c.cantidad, 0)}
          </p>
        </div>

        <div>
          <button onClick={clearCart}>Clear Cart</button>
          <div>
            <form id="cartForm" onSubmit={endPurchase}>
              <input type="text" placeholder="name" required/>
              <input type="text" placeholder="phone" required/>
              <input type="email" placeholder="email" required/>
              <input type="submit" value="Terminar compra"></input>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <h3>No hay productos en el carrito</h3>
        <h3>
          <Link to="/">Ir a comprar</Link>
        </h3>
      </div>
    );
  }
};

export default Cart;
