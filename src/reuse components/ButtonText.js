import React from "react";
import "./ButtonText.css";

export default function ButtonText(props) {
  return (
    <div className="buttonText">
      <span>{props.text}</span>
    </div>
  );
}
