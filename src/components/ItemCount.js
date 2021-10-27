import { useState } from "react";

const ItemCount = ({stock,initial}) => {
  stock = parseInt(stock)
  initial = parseInt(initial)

  const [cantidad, setContador] = useState(initial);

  const sumar = () => {
    if (cantidad < stock) {
      setContador(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad != 0) {
      setContador(cantidad - 1);
    }
  };

  return (
    <div>
      <p>El contador va : {cantidad} </p>
      <button onClick={sumar} className="material-icons">
        add
      </button>
      <button onClick={restar} className="material-icons">
        remove
      </button>
    </div>
  );
};

export default ItemCount;
