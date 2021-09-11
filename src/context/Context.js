import React, { createContext, useContext, useState } from "react";
import { data } from "./mockData/data";
const myCart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products] = useState(data);
  const [count, setCount] = useState(1);

  return (
    <div>
      <myCart.Provider value={{ cart, setCart, products, count, setCount }}>
        {children}
      </myCart.Provider>
    </div>
  );
};

export const CartState = () => {
  return useContext(myCart);
};

export default Context;
