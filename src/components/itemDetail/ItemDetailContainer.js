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
            let item = querySnaptshot.data();
            item.id = querySnaptshot.id;
            setItems(item);
            })
        .catch(()=>{
            console.log("Hubo un error")
        })
        //console.log(items);
});

  return <ItemDetail item={items} />;
};
export default ItemDetailContainer;
