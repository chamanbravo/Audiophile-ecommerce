import React from "react";
import SpeakerZX9 from "./Speaker_ZX9.js";
import SpeakerZX7 from "./Speaker_ZX7.js";
import "./ProductBanner.scss";

function ProductBanner() {
  return (
    <div className="container">
      <div className="banners">
        <SpeakerZX9 />
        <SpeakerZX7 />
      </div>
    </div>
  );
}

export default ProductBanner;
