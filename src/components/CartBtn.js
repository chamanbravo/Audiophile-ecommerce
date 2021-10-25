import React, { useState } from "react";
import { icon_cart_desktop } from "../assets/index";
import "./CartBtn.scss";
import ShoppingCart from "./ShoppingCart.js";
import { CartState } from "../context/Context";

function CartBtn() {
  const { cart } = CartState();

  const [modal, setModal] = useState(false);
  const handleClick = () => setModal(!modal);

  return (
    <div className="cart-icon-container">
      <div onClick={handleClick}>
        <img className="cart-icon" src={icon_cart_desktop} alt="cart" />
        <span className="cart-count">{cart.length}</span>
      </div>
      {modal && <ShoppingCart modalState={setModal} />}
      {modal && <div className="closeBg" onClick={handleClick} />}
    </div>
  );
}

export default CartBtn;
