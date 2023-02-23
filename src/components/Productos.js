import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Productos.css";

import ImageButton from "../reuse components/ImageButton";
export default function Productos(props) {
  return (
    <div>
      <div className="productComplete">
        <ImageButton image="images/cat1.png" class="handleImgProductButton" />
        <p className="nameOfProduct">{props.name}</p>
        <p className="price">Al Carrito | ${props.price}</p>
      </div>
    </div>
  );
}
