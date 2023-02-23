import React from "react";

import "./BubbleText.css";
export default function BubbleText(props) {
  const handleClassBubble = "bubbleText " + props.class;

  return (
    <>
      {" "}
      <div className={handleClassBubble}>
        <span> {props.text} </span>
      </div>
    </>
  );
}
