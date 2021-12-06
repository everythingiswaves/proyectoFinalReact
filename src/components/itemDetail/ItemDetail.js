import React from "react";
import { useState } from "react";
import ItemCount from "../item/ItemCount.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from '../../CartContext.js';

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);

  const {addToCart} = useContext(CartContext);
  
  function onAdd(quantityToAdd) {
    setCantidad(quantityToAdd);
    addToCart(item, quantityToAdd);
  }
  return (
    <div className="productos-item">
      <img src={item.pictureUrl} alt={item.name} />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>{item.id}</p>
      <p>{`$UY ${item.price}`}</p>
      {cantidad ? <button><Link to="/cart">Terminar compra</Link></button> : <ItemCount stock={item.stock} initial="1" onAdd={onAdd} /> }
    </div>
  );
};

export default ItemDetail;
