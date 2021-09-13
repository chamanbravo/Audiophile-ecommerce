import React from "react";
import "./ShoppingCart.scss";
import "./Button.scss";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { formatPrice } from "../utils/helpers";

function ShoppingCart({ cName }) {
  const { cart, setCart } = CartState();

  let totalPrice = 0;
  const calcPrice = () => {
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].qty;
    }
  };

  cart.length >= 1 && calcPrice();

  return (
    <div className={cName}>
      <div className="cart-header">
        <h2>CART ({cart.length})</h2>
        <button className="remove-btn" onClick={() => setCart([])}>
          Remove All
        </button>
      </div>
      <div className="cart-list">
        {cart.length === 0 ? (
          <h2 className="empty-cart">There are no items</h2>
        ) : (
          cart.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.img} alt={item.name} />
                <div>
                  <h4>{item.slug}</h4>
                  <p>{formatPrice(item.price)}</p>
                </div>
                <h4>QTY: {item.qty}</h4>
              </li>
            );
          })
        )}
      </div>
      <div className="cart-total">
        <p>TOTAL</p>
        <h3>{formatPrice(totalPrice)}</h3>
      </div>
      <Link to={cart.length !== 0 ? "/" : "/"} className="btn btn-1">
        {cart.length !== 0 ? "CHECKOUT" : "FILL IT"}
      </Link>
    </div>
  );
}

export default ShoppingCart;
