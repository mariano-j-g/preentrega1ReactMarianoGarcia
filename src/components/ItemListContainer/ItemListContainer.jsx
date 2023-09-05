import { useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId);
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <main>
      <h1> {greeting} </h1>

      <ItemList products={products}></ItemList>
    </main>
  );
};

export default ItemListContainer;
