import React from "react";
import { Row, Col } from "react-bootstrap";
import BubbleText from "../reuse components/BubbleText";
import "./Separador.css";

export default function Separador(props) {
  const imgBackground = "url(" + props.image + ")";

  return (
    <div style={{ backgroundImage: imgBackground }} className={props.class}>
      {" "}
      <BubbleText text={props.text} styleCss="divideImageA" />
    </div>
  );
}
