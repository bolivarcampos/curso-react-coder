import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <div>
      <h1 className="Titulo">{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
