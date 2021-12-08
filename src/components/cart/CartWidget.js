import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { useContext } from "react";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <button className="material-icons">
        <Link to="/cart">shopping_cart</Link>
      </button>
      <p>{cart.reduce((a, c) => a + c.cantidad, 0)}</p>
    </div>
  );
};
export default CartWidget;
