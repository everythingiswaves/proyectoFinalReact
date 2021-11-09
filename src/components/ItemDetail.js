import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount.js";

const ItemDetail = ({ item }) => {
  
  const [cantidad, setCantidad] = useState(0);
  
  function onAdd(quantityToAdd) {
    setCantidad(quantityToAdd);
    }
    console.log(cantidad)
  return (
    <div className="productos-item">
      <img src={item.pictureUrl} alt={item.title} />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>{`$UY ${item.price}`}</p>
      <ItemCount stock={item.stock} initial="0" onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
