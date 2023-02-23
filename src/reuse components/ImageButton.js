import React from "react";
import "./ImageButton.css";
export default function CategoriaButton(props) {
  return (
    <div>
      <a>
        <img src={props.image} className={props.class}></img>
      </a>
    </div>
  );
}
