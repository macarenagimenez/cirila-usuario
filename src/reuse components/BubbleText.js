import React from "react";

import "./BubbleText.css";
export default function BubbleText(props) {
  return (
    <div style={props.style} className="bubbleText">
      <span> {props.text} </span>
    </div>
  );
}
