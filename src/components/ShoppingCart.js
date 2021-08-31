import React from "react";
import Button from "./Button";
import "./ShoppingCart.scss";

function ShoppingCart() {
  return (
    <div className="cart">
      <div className="cart-header">
        <h2>CART (0)</h2>
        <p>Remove All</p>
      </div>
      <div className="cart-list">
        <h2>YOUR CART IS EMPTY</h2>
      </div>
      <div className="cart-total">
        <p>TOTAL</p>
        <h3>$0.00</h3>
      </div>
      <Button cName="btn-1" link="/" innerText="FILL IT" />
    </div>
  );
}

export default ShoppingCart;
