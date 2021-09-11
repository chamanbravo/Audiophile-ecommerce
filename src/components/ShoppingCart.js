import React from "react";
import "./ShoppingCart.scss";
import "./Button.scss";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

function ShoppingCart({ cName }) {
  const { cart, setCart } = CartState();
  return (
    <div className={cName}>
      <div className="cart-header">
        <h2>CART ({cart.length})</h2>
        <button className="remove-btn" onClick={() => setCart([])}>
          Remove All
        </button>
      </div>
      <div className="cart-list">
        {cart.length !== 0 ? (
          <h2>There are items</h2>
        ) : (
          <h2>YOUR CART IS EMPTY</h2>
        )}
      </div>
      <div className="cart-total">
        <p>TOTAL</p>
        <h3>$0.00</h3>
      </div>
      <Link to={cart.length !== 0 ? "/" : "/"} className="btn btn-1">
        {cart.length !== 0 ? "CHECKOUT" : "FILL IT"}
      </Link>
    </div>
  );
}

export default ShoppingCart;
