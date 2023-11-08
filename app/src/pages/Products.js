import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        setProducts(await res.json());
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);
  return (
    <div>
      <h1>Produkty</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
