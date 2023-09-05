import { getProductsById } from "../../asyncMock";
import { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams;
  useEffect(() => {
    getProductsById(productId)
      .then((response) => {
        setProduct(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);
  return (
    <div>
      <h1>Detalle del producto</h1>
      <ItemDetail {...product}></ItemDetail>
    </div>
  );
};
export default ItemDetailContainer;
