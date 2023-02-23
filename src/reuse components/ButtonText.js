import React from "react";
import "./ButtonText.css";

export default function ButtonText(props) {
  const handleClassButtonText = "buttonText " + props.class;

  return (
    <div className={handleClassButtonText}>
      <span>{props.text}</span>
    </div>
  );
}
