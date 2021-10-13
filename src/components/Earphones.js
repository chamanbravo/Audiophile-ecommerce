import React from "react";
import "./Earphones.scss";
import data from "../context/mockData/earphones";
import SingleProduct from "./SingleProduct";

function Earphones() {
  return (
    <div className="container">
      <div className="earphones-container">
        {data.map((items) => {
          return <SingleProduct key={items.id} {...items} />;
        })}
      </div>
    </div>
  );
}

export default Earphones;
