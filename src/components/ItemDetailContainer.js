import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const productos = [
  { id: 0, title: "remera1", description: "remera a rayas negras", price: 450, pictureUrl: "remera1.jpg" },
  { id: 1, title: "remera2", description: "remera con triangulos de colores" , price: 500, pictureUrl: "remera2.jpg" },
];

const getItem = (id) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos[id]);
    }, 2000);
  });
  return promesa;
};

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});


  useEffect(() => {
    
    //por ahora siempre va a ser el id 0
    getItem(0).then((item) => {
      setItems(item);
    });

    getItem().catch((error) => {
      console.log(error);
    });
  }, 
  []//no me interesa que lo vuelva a hacer
  );

  return <ItemDetail item={items} />;
};
export default ItemDetailContainer;
