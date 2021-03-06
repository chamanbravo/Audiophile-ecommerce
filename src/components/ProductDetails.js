import React from "react";
import "./ProductDetails.scss";
import { formatPrice } from "../utils/helpers";
import AddToCartBtn from "./AddToCartBtn";

function ProductDetails({
  id,
  new: new_label,
  name,
  slug,
  description,
  image,
  price,
  cartImage,
}) {
  const { mobile, tablet, desktop } = image;
  const width = window.innerWidth;
  return (
    <div className="product-details">
      <div>
        <img
          src={width >= 1024 ? desktop : width >= 768 ? tablet : mobile}
          alt={name}
          className="image"
        />
      </div>
      <div className="product-">
        {new_label ? <p className="label">NEW PRODUCT</p> : ""}
        <h1>{name}</h1>
        <p>{description}</p>
        <h2 className="price">{formatPrice(price)}</h2>
        <AddToCartBtn
          id={id}
          slug={slug}
          name={name}
          price={price}
          cartImg={cartImage}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
