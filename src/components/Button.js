import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/helpers";

function Button({ link, cName, innerText }) {
  return (
    <div className="btn-container">
      <Link to={link} className={`btn ${cName}`} onClick={scrollToTop}>
        {innerText}
      </Link>
    </div>
  );
}

export default Button;
