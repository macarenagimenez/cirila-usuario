import React from "react";

import "./BubbleText.css";
export default function BubbleText(props) {
  const handleClassBubble = "bubbleText " + props.styleCss;

  return (
    <>
      {" "}
      <div className={handleClassBubble}>
        <span> {props.text} </span>
      </div>
    </>
  );
}
