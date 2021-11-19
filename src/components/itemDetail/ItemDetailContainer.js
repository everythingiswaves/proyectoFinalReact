import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase";

const productos2 = [];

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const { id } = useParams();

  useEffect(() => {

    /* const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos_iniciales.find(p => p.id == id));
        }, 2000);
    });
    promesa.then(producto => setProducto(producto));
    promesa.then(producto => setProducto(producto)); */
    const db = firestore

    //2) Necesito una coleccion
    const collection = db.collection("productos")

    //3) Hago la consulta
    //const promesa = collection.get()
    const query = collection.doc(id)

    //4) Obtengo resultados
    const promesa = query.get()

    promesa
        .then((documento)=>{
            console.log("Consulta exitosa")
            const data = documento.data()
            setItems(data)
        })
        .catch(()=>{
            console.log("Hubo un error")
        })

}, [id]);

  return <ItemDetail item={items} />;
};
export default ItemDetailContainer;
