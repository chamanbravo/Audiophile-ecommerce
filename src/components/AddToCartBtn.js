import React, { useState } from "react";
import "./AddToCartBtn.scss";
import Button from "./Button";
function AddToCartBtn() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    count === 0 ? setCount(0) : setCount(count - 1);
  }

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
      <Button cName="btn-1" innerText="ADD TO CART" />
    </div>
  );
}

export default AddToCartBtn;
