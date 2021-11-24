import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase";

const ItemListContainer = () => {
  const productos = [];

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = firestore
    const collection = db.collection("items");
    const query = collection.where("categoryId", "==", categoryId);
    const promesa = query.get();


    promesa.then(resultado => {
      setProducts(resultado.docs.map(doc=>({...doc.data(),id:doc.id})))
    })
    .catch(error => {
        console.log(error)
    })
  }, [categoryId]);

  return (
    <div id="divProductos">
      <ItemList items={products} />
    </div>
  );
};
export default ItemListContainer;
