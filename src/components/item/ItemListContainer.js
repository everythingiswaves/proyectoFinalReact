import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = firestore;
    const collection = db.collection("items");

    let promesa;
    if (categoryId) {
      const queryCategory = collection.where("categoryId", "==", categoryId);
      promesa = queryCategory.get();
    } else {
      promesa = collection.get();
    }

    promesa
      .then((resultado) => {
        setProducts(
          resultado.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);
  console.log(products)

  return (
    <div id="divProductos">
      <ItemList items={products} />
    </div>
  );
};
export default ItemListContainer;
