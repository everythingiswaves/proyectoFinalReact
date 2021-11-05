import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
const productos = [
    { id: 0, title: "remera1", description: "remera a rayas negras", price: 450, pictureUrl: "/media/circulosnegra.jpeg", stock: 10, categoria: 1 },
    { id: 1, title: "remera2", description: "remera con triangulos de colores" , price: 500, pictureUrl: "/media/cuadradoscolores.jpeg", stock: 4, categoria: 1 },
    { id: 2, title: "remera3", description: "remera con rayas de colores" , price: 550, pictureUrl: "/media/cuadradosrayas.jpeg", stock: 6, categoria: 1 },
    { id: 3, title: "Campera1", description: "Campera con rayas de colores" , price: 600, pictureUrl: "/media/camperarayas.jpeg", stock: 8, categoria: 2 },
    { id: 4, title: "Campera2", description: "Campera con triangulos de colores" , price: 650, pictureUrl: "/media/camperatriangulos.jpeg", stock: 10,  categoria: 2 },
    { id: 5, title: "Pantalon", description: "Pantalon con rayas de colores" , price: 300, pictureUrl: "/media/pantalon.jpeg", stock: 12, categoria: 3 },
];
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    const pedirProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    pedirProductos.then((productos) => {
      if (categoryId) {
        setProducts(productos.filter((producto) => producto.categoria === Number(categoryId)));
      } else {
      setProducts(productos);
      }
    });

    pedirProductos.catch((error) => {
      console.log(error);
    });
  }, [categoryId]);

  return (
    <div id="divProductos">
      <ItemList items={products} />
    </div>
  );
};
export default ItemListContainer;
