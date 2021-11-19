import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase";

const ItemListContainer = () => {
  const productos = [];
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = firestore
    const collection = db.collection("productos");
    const promesa = collection.get()
    let query = collection.where("category", "==", category);
    const consulta = query.get()

    consulta.then(resultado => {
      setProducts(resultado.docs.map(doc=>({...doc.data(),id:doc.id})))
    })
    .catch(error => {
        console.log(error)
    })
  }, [category]);

  return (
    <div id="divProductos">
      <ItemList items={products} />
    </div>
  );
};
export default ItemListContainer;
