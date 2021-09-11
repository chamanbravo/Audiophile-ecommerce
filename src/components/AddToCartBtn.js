import React from "react";
import "./AddToCartBtn.scss";
import "./Button.scss";
import { CartState } from "../context/Context";

function AddToCartBtn({ prodId }) {
  const { cart, setCart, count, setCount } = CartState();

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    count === 1 ? setCount(1) : setCount(count - 1);
  }

  const addToCart = () => {
    const prod = cart.find((i) => i.id === prodId);
    prod ? (prod.qty = count) : setCart([...cart, { id: prodId, qty: count }]);
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
