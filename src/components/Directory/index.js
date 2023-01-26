import React from "react";
import ShopMens from "./../../assets/shopMens.jpeg";
import ShopWomens from "./../../assets/shopWomens.jpeg";
import "./styles.scss";
 
const Directory = props => {
  return(
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomens})`
          }}
        >
          <a>
            Shop Women's
          </a>
        </div>

        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMens})`
          }}
        >
          <a>
            Shop Men's
          </a>
        </div>

      </div>
    </div>
  );
}

export default Directory;