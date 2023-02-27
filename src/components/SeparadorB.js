import React from "react";
import { Row, Col } from "react-bootstrap";
import "./SeparadorB.css";

export default function SeparadorB() {
  return (
    <div className="containerDivideB">
      <Row className="g-0">
        <Col className="colIlustration">
          <img src="images/ilustracion.jpg" />
        </Col>
        <Col className="containerTextIlustration">
          <p className="textIlustration">
            {" "}
            Un mate, una juntada con amigas, un perrito y un poco de naturaleza.
            Eso es Gaia Cirila, simple pero hermoso.
          </p>{" "}
        </Col>
      </Row>
    </div>
  );
}
