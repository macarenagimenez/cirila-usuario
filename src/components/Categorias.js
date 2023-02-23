import React from "react";
import ButtonText from "../reuse components/ButtonText";
import ImageButton from "../reuse components/ImageButton";
import { Col, Row, Container } from "react-bootstrap";

export default function Categorias() {
  return (
    <>
      {" "}
      <ButtonText text="VER TODAS LAS CATEGORIAS" class="categorias" />
      <div className="w-75">
        <Row className="g-0">
          <Col>
            <ImageButton
              image="images/cat1.png"
              class="handleCategoriaButton"
            />
          </Col>
          <Col>
            <ImageButton
              image="images/cat1.png"
              class="handleCategoriaButton"
            />
          </Col>
          <Col>
            <ImageButton
              image="images/cat1.png"
              class="handleCategoriaButton"
            />
          </Col>
        </Row>{" "}
      </div>
    </>
  );
}
