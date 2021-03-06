import React from "react";
import "./Headphones.scss";
import SingleProduct from "./SingleProduct";
import data from "../context/mockData/headphones";

function Headphones() {
  return (
    <div className="container">
      <div className="headphones-container">
        {data.map((item) => {
          return <SingleProduct key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Headphones;
