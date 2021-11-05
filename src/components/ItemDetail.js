import React from "react";
import Counter from "./ItemCount.js"

const ItemDetail = ({ item }) => {
  return(
    <div className="productos-item">
      <img src={item.pictureUrl} alt={item.title} />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>{`$UY ${item.price}`}</p>
      <Counter stock = {item.stock} initial =  "0"/>
      <button className="botonAgregar">Agregar</button>
    </div>
  ) 
};

export default ItemDetail;
