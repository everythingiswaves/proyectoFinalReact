import React from "react";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div>
      <p><Link to="/cart">Carrito</Link></p>
      <button className="material-icons">shopping_cart</button>
    </div>
  );
};
export default CartWidget