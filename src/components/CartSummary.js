import React from "react";
import "./CartSummary.scss";
import { CartState } from "../context/Context";
import { formatPrice } from "../utils/helpers";

function CartSummary() {
  const { cart } = CartState();

  let totalPrice = 0;
  let itemsPrice = 0;
  const calcPrice = () => {
    for (let i = 0; i < cart.length; i++) {
      itemsPrice += cart[i].price * cart[i].qty;
      totalPrice += itemsPrice + 5000 + (13 / 100) * itemsPrice;
    }
  };
  cart.length >= 1 && calcPrice();
  return (
    <div className=" cartSummary">
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
                <h4 className="qty">x{item.qty}</h4>
              </li>
            );
          })
        )}
      </div>
      <div className="cost">
        <div className="costCalc">
          <p>TOTAL</p>
          <h3>{formatPrice(itemsPrice)}</h3>
        </div>
        <div className="costCalc">
          <p>SHIPPING </p>
          <h3>$50</h3>
        </div>
        <div className="costCalc">
          <p>VAT </p>
          <h3>13%</h3>
        </div>
        <div className="costCalc grandTotal">
          <p>GRAND TOTAL</p>
          <h3>{formatPrice(totalPrice)}</h3>
        </div>
      </div>
      <button className="btn btn-1">CONTINUE & PAY</button>
    </div>
  );
}

export default CartSummary;
