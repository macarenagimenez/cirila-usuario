import React from "react";
import { useSearchParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "./ProductSinglePage.css";
import Basket from "../Modelo/Basket";
import { useState, useEffect } from "react";
import ProductoDestacado from "../Modelo/ProductoDestacado";
import BasketDetail from "../Modelo/BasketDetail";

export default function ProductSinglePage() {
  const [searchParams] = useSearchParams();
  const [itemCount, setItemCount] = React.useState(1);
  const stock = 15;
  const [basket, setBasket] = React.useState(new Basket([]));
  const [product, setProduct] = React.useState({});

  const apiURL =
    "https://w9aofwvf14.execute-api.us-east-1.amazonaws.com/prod/v1.0/products/prominent";

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        let productosDestacados = data.map(
          (productoDestacado) =>
            new ProductoDestacado(
              productoDestacado.id,
              productoDestacado.title,
              productoDestacado.price,
              productoDestacado.imageUrl
            )
        );
        setProduct(obtenerProducto(productosDestacados));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function obtenerProducto(productosDestacados) {
    return productosDestacados.find(
      (producto) => producto.id == searchParams.get("id")
    );
  }

  function restarItemCount() {
    let resultadoResta = itemCount - 1;
    if (resultadoResta > 0) {
      setItemCount(resultadoResta);
    }
  }

  function sumarItemCount() {
    let resultadoSuma = itemCount + 1;
    if (resultadoSuma <= stock) {
      setItemCount(resultadoSuma);
    }
  }

  function agregarAlCarrito() {
    let newBasketDetail = new BasketDetail(
      product,
      itemCount,
      product.precio * itemCount
    );
    setBasket((basket) => {
      let detalleExistente = basket.basketDetails.find(
        (detail) => detail.product.id === newBasketDetail.product.id
      );

      if (detalleExistente) {
        detalleExistente.quantity += newBasketDetail.quantity;
      } else {
        basket.agregarDetalle(newBasketDetail);
      }

      return basket;
    });
  }

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
              <h1>{product.Nombre}</h1>
              <h2>$1111.11</h2>
              <span className="colorText">12 x $1111.11 sin interés</span>
              <br />
              <div className="cart">
                <div className="countProduct">
                  <button
                    className="countProductRest"
                    onClick={() => restarItemCount()}
                  >
                    -
                  </button>{" "}
                  {itemCount}
                  <button
                    className="countProductAdd"
                    onClick={() => sumarItemCount()}
                  >
                    +
                  </button>
                </div>
                <button
                  className="addToCart"
                  onClick={() => agregarAlCarrito()}
                >
                  Agregar al carrito
                </button>
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
