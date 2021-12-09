import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { useContext } from "react";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="cartWidget">
      <button className="material-icons link">
        <Link to="/cart">shopping_cart</Link>
      </button>
      <h3>{cart.reduce((a, c) => a + c.cantidad, 0)}</h3>
    </div>
  );
};
export default CartWidget;
