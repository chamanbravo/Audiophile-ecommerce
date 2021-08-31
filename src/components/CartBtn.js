import React from "react";
import { icon_cart_desktop } from "../assets/index";
import "./CartBtn.scss";
import ShoppingCart from "./ShoppingCart.js";

function CartBtn() {
  return (
    <div className="cart-icon-container">
      <img className="cart-icon" src={icon_cart_desktop} alt="cart" />
      <span className="cart-count">0</span>
      <ShoppingCart />
    </div>
  );
}

export default CartBtn;
