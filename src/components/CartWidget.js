import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { useContext } from "react";

export const CartWidget = () => {
  
  const {cart} = useContext(CartContext);
  return (
    <div>
      <p><Link to="/cart">Carrito</Link></p>
      <p>{cart.length}</p>
      <button className="material-icons">shopping_cart</button>
    </div>
  );
};
export default CartWidget