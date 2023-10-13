import { useEffect, useState } from "react";
import { getProducts, getProductByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [product, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1 className="Titulo">{greeting}</h1>
      <ItemList products={product} />
    </div>
  );
};

export default ItemListContainer;
