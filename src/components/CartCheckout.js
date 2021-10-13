import React from "react";
import "./CartCheckOut.scss";
import CartSummary from "./CartSummary";
import TextField from "./TextField";
import { Formik, Form } from "formik";
import * as yup from "yup";

const errorMessage = "this field is required";

function CartCheckout() {
  const validate = yup.object({
    name: yup
      .string()
      .matches(/^([^0-9]*)$/, "should not contain numbers")
      .required("this field is required"),
    email: yup.string().email("wrong format").required(errorMessage),
    phone_number: yup
      .number()
      .typeError("enter valid number")
      .required(errorMessage),
    address: yup.string().required(errorMessage),
    zip_code: yup
      .number()
      .typeError("you must specify a number")
      .required(errorMessage),
    city: yup.string().required(errorMessage),
    country: yup.string().required(errorMessage),
    e_money_number: yup.string().when("payment_method", {
      is: (value) => value === "e-Money",
      then: yup.string().required(errorMessage),
      otherwise: yup.string().notRequired(),
    }),
    e_money_pin: yup.string().when("payment_method", {
      is: (value) => value === "e-Money",
      then: yup.string().required(errorMessage),
      otherwise: yup.string().notRequired(),
    }),
  });

  return (
    <div className="container">
      <div className="checkout-form">
        <Formik
          initialValues={{
            Name: "",
            email: "",
            phone_number: "",
            address: "",
            zip_code: "",
            city: "",
            country: "",
            e_money_number: "",
            e_money_pin: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            if (values) {
              alert("order placed");
            } else {
              alert("gandu");
            }
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
                    <TextField
                      label="Name"
                      name="name"
                      type="name"
                      placeholder="Alex Ward"
                    />
                    <TextField
                      label="Email Adress"
                      name="email"
                      type="email"
                      placeholder="alexey@mail.com"
                    />
                    <TextField
                      label="Phone Number"
                      name="phone_number"
                      type="tel"
                      placeholder="+1 202-555-0136"
                    />
                  </div>
                </div>
                <div className="FormGroup">
                  <h6 className="group-title">SHIPPING DETAILS</h6>
                  <div className="field-wrapper  shipping-details">
                    <TextField
                      label="Your Adress"
                      name="address"
                      type="text"
                      placeholder="1137 Williams Avenue"
                      className="address-field"
                    />
                    <TextField
                      label="ZIP Code"
                      name="zip_code"
                      type="text"
                      placeholder="10001"
                    />
                    <TextField
                      label="City"
                      name="city"
                      type="text"
                      placeholder="New York"
                    />
                    <TextField
                      label="Country"
                      name="country"
                      type="text"
                      placeholder="United States"
                    />
                  </div>
                </div>
                <div className="FormGroup">
                  <h6 className="group-title">PAYMENT DETAILS</h6>
                  <div className="field-wrapper  payment-wrapper">
                    <div className="FormSubGroup payment-data">
                      <TextField
                        label="e-Money number"
                        name="e_money_number"
                        type="text"
                        placeholder="238521993"
                      />
                      <TextField
                        label="e-Money PIN"
                        name="e_money_pin"
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
