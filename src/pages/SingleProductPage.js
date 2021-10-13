import React from "react";
import {
  ProductDetails,
  ProductFeatures,
  ProductGallery,
  SuggestedProduct,
  Categories,
  AboutUs,
} from "../components";
import { data } from "../context/mockData/data";
import { withRouter } from "react-router-dom";

function SingleProductPage(id) {
  const item = data.filter(
    (product) => product.id === parseInt(id.match.params.id)
  )[0];
  return (
    <div>
      <ProductDetails {...item} />
      <ProductFeatures {...item} />
      <ProductGallery {...item} />
      <SuggestedProduct {...item} />
      <Categories />
      <AboutUs />
    </div>
  );
}

export default withRouter(SingleProductPage);
