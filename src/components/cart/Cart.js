import React from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { firestore } from "../../firebase";

export const Cart = () => {
  const { removeFromCart, cart, clearCart } = useContext(CartContext);

  const endPurchase = () => {
    alert("Compra realizada con exito");

    const user = {
      name: "User1",
      phone: 5555555,
      email: "algo@gmail.com",
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
      <div id="cart">
        <h2>Compras</h2>
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item-detail" key={item.producto.id}>
              <h3>{item.producto.name}</h3>
              <h3>${item.producto.price}</h3>
              <h3> {item.cantidad}</h3>
              <h3> {item.producto.price * item.cantidad}</h3>
              <button
                onClick={() => removeFromCart(item)}
                className="botonCarrito"
              >
                Eliminar producto
              </button>
            </div>
          ))}
          <h2>
            Total: $
            {cart.reduce((a, c) => a + c.producto.price * c.cantidad, 0)}
          </h2>
        </div>
        <button onClick={clearCart} className="botonCarrito">
          Vaciar Carrito
        </button>
        <button type="submit" onClick={endPurchase} className="botonCarrito">
          Finalizar compra
        </button>
      </div>
    );
  } else {
    return (
      <div id="cart" style={{textAlign:"center"}}>
        <h2>No hay productos en el carrito</h2>
          <Link to="/" style={{ textDecoration: 'none' }}><button className="botonCarrito">Ir a comprar</button></Link>
      </div>
    );
  }
};

export default Cart;
