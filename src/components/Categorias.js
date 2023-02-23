import React from "react";
import ButtonText from "../reuse components/ButtonText";
import ImageButton from "../reuse components/ImageButton";
import { Col, Row } from "react-bootstrap";
import "./Categorias.css";

export default function Categorias() {
  return (
    <>
      {" "}
      <ButtonText text="VER TODAS LAS CATEGORIAS" />
      <div className="imagesCategory">
        <Row className="g-0">
          <Col>
            <ImageButton
              image="images/cat1.png"
              class="handleImgCategoriaButton"
              name="Cortinas de Baño"
              description="para los momentos de desconexión"
            />
          </Col>
          <Col>
            <ImageButton
              image="images/cat2.jpg"
              class="handleImgCategoriaButton"
              name="Mantelitos"
              description="para los mates de la tarde "
            />
          </Col>
          <Col>
            <ImageButton
              image="images/cat3.jpg"
              class="handleImgCategoriaButton"
              name="Manteles"
              description="para los domingos en familia"
            />
          </Col>
        </Row>{" "}
      </div>
    </>
  );
}
