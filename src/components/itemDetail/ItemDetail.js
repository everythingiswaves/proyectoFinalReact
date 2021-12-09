import React from "react";
import { useState } from "react";
import ItemCount from "../item/ItemCount.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../CartContext.js";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);

  const { addToCart } = useContext(CartContext);

  function onAdd(quantityToAdd) {
    setCantidad(quantityToAdd);
    addToCart(item, quantityToAdd);
  }
  return (
    <div id="itemDetail">
      <div id="imgDetailDiv">
        <img src={item.pictureUrl} alt={item.name} />
      </div>
      <div>
        <h1>{item.name}</h1>
        <h3>{item.description}</h3>
        <h3>{`$UY ${item.price}`}</h3>
        {cantidad ? (
          <button>
            <Link to="/cart">Terminar compra</Link>
          </button>
        ) : (
          <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
