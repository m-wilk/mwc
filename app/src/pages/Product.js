import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOneProduct } from "../store/basket";

function Product() {
  const [product, setProduct] = useState();

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await res.json());
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, [id]);

  const addProductHandler = () => {
    const basketProduct = {
      qty: 1,
      ...product,
    };

    dispatch(setOneProduct(basketProduct));
  };

  return (
    <div>
      {product !== undefined ? (
        <div>
          <h1>{product.title}</h1>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <button onClick={addProductHandler} className="btn btn-primary">
            Dodaj
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Product;
