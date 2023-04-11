import React from "react";
import "./ImageButton.css";

export default function CategoriaButton(props) {
  const imgBackground = "url(" + props.image + ")";

  return (
    <div
      style={{
        backgroundImage: imgBackground,
      }}
      className={props.class}
    >
      <h2>
        {props.name} <p>{props.description}</p>
      </h2>
    </div>
  );
}
