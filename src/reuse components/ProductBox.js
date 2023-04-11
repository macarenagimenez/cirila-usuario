import React from "react";
import "./ProductBox.css";

import ImageButton from "./ImageButton";
export default function ProductBox(props) {
  return (
    <div>
      <div className="productComplete">
        <ImageButton image={props.image} class="handleImgProductButton" />
        <p className="nameOfProduct">{props.name}</p>
        <p className="price">Al Carrito | ${props.price}</p>
      </div>
    </div>
  );
}
