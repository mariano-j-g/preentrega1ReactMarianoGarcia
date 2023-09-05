import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemDetail = ({ name, img, price, stock, description }) => {
  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    console.log("se agrego" + quantity);
    setQuantity(quantity);
  };

  return (
    <div>
      <h1>{name} </h1>
      <img src={img} style={{ width: 400 }} />
      <h3>{price} </h3>
      <h3>{description} </h3>

      {quantity ===
        0(<ItemCount stock={stock} onAdd={handleOnAdd}></ItemCount>)(
          <button>Finalizar Compra</button>
        )}
    </div>
  );
};
export default ItemDetail;
