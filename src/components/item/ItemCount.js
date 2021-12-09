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
    if (cantidad !== 1) {
      setContador(cantidad - 1);
    }
  };

  return (
    <div>
      <div id="itemCountDiv">
        <div>
          <button onClick={restar} className="material-icons">
            remove
          </button>
          <button onClick={sumar} className="material-icons">
            add
          </button>
        </div>
        <div>
          <h3>{cantidad}</h3>
        </div>
      </div>
      <button onClick={() => onAdd(cantidad)} className="botonAgregar"><h3>
        Comprar</h3>
      </button>
    </div>
  );
};

export default ItemCount;
