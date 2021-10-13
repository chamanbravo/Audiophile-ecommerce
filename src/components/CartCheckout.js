import React from "react";
import "./CartCheckOut.scss";
import CartSummary from "./CartSummary";
import TextField from "./TextField";
import { Formik, Form } from "formik";

function CartCheckout() {
  return (
    <div className="container">
      <div className="checkout-form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone_number: "",
          }}
        >
          {(formik) => (
            <Form>
              <div className="UserInfo">
                {console.log(formik)}
                <h2>CHECKOUT</h2>
                <div className="FormGroup">
                  <h6 className="group-title">BILLING DETAILS</h6>
                  <div className="field-wrapper billing-details">
                    <input
                      label="name"
                      name="Name"
                      type="name"
                      placeholder="Alex Ward"
                    />
                    <input
                      label="email"
                      name="Email Adress"
                      type="email"
                      placeholder="alexey@mail.com"
                    />
                    <input
                      label="phone_number"
                      name="Phone Number"
                      type="tel"
                      placeholder="+1 202-555-0136"
                    />
                  </div>
                </div>
                <div className="FormGroup">
                  <h6 className="group-title">SHIPPING DETAILS</h6>
                  <div className="field-wrapper  shipping-details">
                    <input
                      label="address"
                      name="Your Adress"
                      type="text"
                      placeholder="1137 Williams Avenue"
                      className="address-field"
                    />
                    <input
                      label="zip_code"
                      name="ZIP Code"
                      type="text"
                      placeholder="10001"
                    />
                    <input
                      label="city"
                      name="City"
                      type="text"
                      placeholder="New York"
                    />
                    <input
                      label="country"
                      name="Country"
                      type="text"
                      placeholder="United States"
                    />
                  </div>
                </div>
                <div className="FormGroup">
                  <h6 className="group-title">PAYMENT DETAILS</h6>
                  <div className="field-wrapper  payment-wrapper">
                    <div className="FormSubGroup payment-data">
                      <input
                        label="e_money_number"
                        name="e-Money number"
                        type="text"
                        placeholder="238521993"
                      />
                      <input
                        label="e_money_pin"
                        name="e-Money PIN"
                        type="text"
                        placeholder="6891"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <CartSummary />
      </div>
    </div>
  );
}

export default CartCheckout;
