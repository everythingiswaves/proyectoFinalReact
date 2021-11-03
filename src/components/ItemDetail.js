import React from "react";

const ItemDetail = ({ item }) => {
  return(
    <div>
      <img src={item.pictureUrl} alt={item.title} />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  ) 
};

export default ItemDetail;
