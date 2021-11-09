import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  stock = parseInt(stock);
  initial = parseInt(initial);

  const [cantidad, setContador] = useState(initial);

  const sumar = () => {
    if (cantidad < stock) {
      setContador(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad !== 0) {
      setContador(cantidad - 1);
    }
  };

  return (
    <div>
      <button onClick={restar} className="material-icons">
        remove
      </button>
      <button onClick={sumar} className="material-icons">
        add
      </button>
      <p>{cantidad} </p>
      <button onClick={()=> onAdd(cantidad)}  className="botonAgregar">Agregar</button>
    </div>
  );
};

export default ItemCount;
