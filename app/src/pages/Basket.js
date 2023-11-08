import { useSelector } from "react-redux";

function Basket() {
  const products = useSelector((state) => {
    return state.basket.products;
  });

  return (
    <div>
      <h1>Moj koszyk</h1>

      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>Tytuł: {product.title}</p>
            <p>Cena: {product.price} </p>
            <p>Ilość: {product.qty}</p>
            <p>Razem: {product.price * product.qty}</p>
            <hr/>
          </div>
        );
      })}
    </div>
  );
}

export default Basket;
