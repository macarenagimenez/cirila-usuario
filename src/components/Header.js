import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <section>
      <div className="Header">
        <Row className="g-0">
          <Col>
            <div className="textHeader">
              <h1>Diseño propio</h1>
              <h1>Hecho a mano</h1>{" "}
            </div>
          </Col>
          <Col>
            <img
              src="images/imgheader.jpg"
              alt="GaiaCirilaHeader"
              className="imgHeader"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}
