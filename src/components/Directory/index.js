import React from "react";
import ShopMens from "./../../assets/shopMens.jpeg";
import ShopWomens from "./../../assets/shopWomens.jpeg";
import "./styles.scss";
 
const Directory = props => {
  return(
    <div classname="Directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomens})`
          }}
        >
        </div>
        <a>Shop Women's</a>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMens})`
          }}
        >
        </div>
        <a>Shop Men's</a>
      </div>
    </div>
  );
}

export default Directory;