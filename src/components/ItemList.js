import React from "react";
import { useEffect, useState } from "react";
import Item from "./Item.js"

const ItemList = ({ items }) => {
  const [item, setItem] = useState([items]);

  useEffect(() => {
    setTimeout(() => {
      setItem(items);
    }, 3000);
  }, []);
  if (items.length === 0) {
    return <p>Loading </p>;
  } else {
    return (
      <>
        {items.map((e, i) => {
          return (
            <>
                <Item id={e.id} title={e.title} price={e.price} pictureUrl={e.pictureUrl} stock ={e.stock}/>
            </>
          );
        })}
      </>
    );
  }
};

export default ItemList;
