import React from "react";

import "./BubbleText.css";
export default function BubbleText(props) {
  return (
    <div className="bubbleText" style={props.style}>
      <span> {props.text} </span>
    </div>
  );
}
