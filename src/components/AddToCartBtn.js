import React from "react";
import "./AddToCartBtn.scss";
import "./Button.scss";
import { CartState } from "../context/Context";

function AddToCartBtn({ id, name, slug, price, cartImg }) {
  const { cart, setCart, count, setCount } = CartState();

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    count === 1 ? setCount(1) : setCount(count - 1);
  }

  const addToCart = () => {
    const prod = cart.find((i) => i.id === id);
    prod
      ? (prod.qty = count)
      : setCart([
          ...cart,
          {
            id: id,
            slug: slug,
            name: name,
            price: price,
            img: cartImg,
            qty: count,
          },
        ]);
    setCount(1);
  };
  console.log(cart);

  return (
    <div className="cartbtn-container">
      <div className="counter">
        <span className="count" onClick={decrease}>
          -
        </span>
        <span>{count}</span>
        <span className="count" onClick={increase}>
          +
        </span>
      </div>
      <button className="btn btn-1" onClick={addToCart}>
        ADD TO CART
      </button>
    </div>
  );
}

export default AddToCartBtn;
