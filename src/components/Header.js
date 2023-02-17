import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <section>
      <div className="Header">
        <Row className="g-0">
          <Col xs={4}>
            <div>
              <img
                src="images/logoCirila.png"
                alt="GaiaCirilaHeader"
                className="imgHeaderLogo"
              />
              <h6>Objetos únicos hechos a mano. </h6>
            </div>
          </Col>
          <Col xs={4}>
            <img
              src="images/headerimg1.png"
              alt="GaiaCirilaHeader"
              className="imgHeader"
            />
          </Col>
          <Col xs={4}>
            <img
              src="images/headerimg2.png"
              alt="GaiaCirilaHeader2"
              className="imgHeader"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}
