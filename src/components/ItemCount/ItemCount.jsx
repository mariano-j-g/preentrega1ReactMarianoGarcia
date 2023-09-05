import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h3>1</h3>
      <button>-</button>
      <button onClick={() => onAdd(count)}>Agregaar Carro</button>
      <button>+</button>
    </div>
  );
};
