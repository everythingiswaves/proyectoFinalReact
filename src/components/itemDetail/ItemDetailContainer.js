import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase";

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const db = firestore
    const collection = db.collection("items");
    const query = collection.doc(itemId);
    const promesa = query.get();

    promesa
        .then((querySnaptshot) => {
            setItems(querySnaptshot.data())
            })
        .catch(()=>{
            console.log("Hubo un error")
        })

});

  return <ItemDetail item={items} />;
};
export default ItemDetailContainer;
