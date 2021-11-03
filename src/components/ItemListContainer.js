import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const productos = [
    { id: 0, title: "remera1", price: 450, pictureUrl: "remera1.jpg" },
    { id: 1, title: "remera2", price: 500, pictureUrl: "remera2.jpg" },
  ];

  useEffect(() => {
    const pedirProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    pedirProductos.then((productos) => {
      setProducts(productos);
    });

    pedirProductos.catch((error) => {
      console.log(error);
    });
  }, [productos]);

  return (
      <ItemList items={products} />
  );
};
export default ItemListContainer;
