import React from "react";
import { useEffect, useState } from "react";
import Item from "./Item.js";

const ItemList = ({ items }) => {
  const [item, setItem] = useState([items]);

  useEffect(() => {
    setItem(items);
  }, []);
  if (items.length === 0) {
    return <p>Loading </p>;
  } else {
    return (
      <>
        {items.map((e, i) => {
          return (
            <>
              <Item
                key={e.id}
                id={e.id}
                name={e.name}
                price={e.price}
                pictureUrl={e.pictureUrl}
                stock={e.stock}
              />
            </>
          );
        })}
      </>
    );
  }
};

export default ItemList;
