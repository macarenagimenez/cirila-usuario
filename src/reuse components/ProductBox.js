import React from "react";
import "./ProductBox.css";
import { Link } from "react-router-dom";

import ImageButton from "./ImageButton";

export default function ProductBox(props) {
  const productUrl = "/product?id=" + props.id;

  return (
    <div>
      <div className="productComplete">
        <Link to={productUrl}>
          <ImageButton image={props.image} class="handleImgProductButton" />
        </Link>

        <p className="nameOfProduct">{props.name}</p>
        <p className="price">Al Carrito | ${props.price}</p>
      </div>
    </div>
  );
}
