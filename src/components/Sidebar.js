import React from "react";
import Categories from "./Categories";
import "./Sidebar.scss";

function Sidebar({ cName }) {
  return (
    <div className={`${cName}`}>
      <Categories />
    </div>
  );
}

export default Sidebar;
