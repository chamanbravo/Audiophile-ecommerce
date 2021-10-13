import React from "react";
import {
  Hero,
  Categories,
  ProductBanner,
  FeaturedProducts,
  AboutUs,
} from "../components";

function Homepage() {
  return (
    <div>
      <Hero />
      <Categories />
      <ProductBanner />
      <FeaturedProducts />
      <AboutUs />
    </div>
  );
}

export default Homepage;
