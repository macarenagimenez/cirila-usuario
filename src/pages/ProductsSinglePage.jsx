import React from "react";
import { useSearchParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./ProductSinglePage.css";

export default function ProductSinglePage() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("id"));

  return (
    <div className="productGroup">
      <Row className="g-0 ">
        <Col>
          <img src="images/imageProduct.jpg" alt="product" />
        </Col>
        <Col>
          <div className="descriptionProduct">
            <span className="fontsize14 ">
              <span className="category"> productos /</span> mantas
              <h1>Tittle</h1>
              <h2>$1111.11</h2>
              <span className="colorText">12 x $1111.11 sin interés</span>
              <br />
              <div className="cart">
                <div className="countProduct">
                  <span className="countProductRest">-</span> 1{" "}
                  <span className="countProductAdd">+</span>
                </div>
                <span className="addToCart">Agregar al carrito</span>
                <span className="fontsize11 enStock">En stock</span>
                <span className="fontsize11">
                  Ya agregaste este producto al carrito
                </span>
              </div>
              <hr />
              <h6>Medios de pago</h6>
              <span className=" fontsize11 colorText countProduct">
                Tu código postal{" "}
              </span>
              <span className="addToCart">OK</span>
              <br />
              <br />
              <hr />
              <h6>Descripción</h6>
              Manta bla bla
            </span>
          </div>
        </Col>{" "}
      </Row>
    </div>
  );
}
