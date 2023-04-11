import React, { useState, useEffect } from "react";
import ProductBox from "../reuse components/ProductBox";
import { Col, Row } from "react-bootstrap";
import ProductoDestacado from "../Modelo/ProductoDestacado";

export default function Productos() {
  const [products, setProducts] = useState([]);

  const apiURL =
    "https://cykekm8glh.execute-api.us-east-1.amazonaws.com/prod/v1.0/public/products/featured";

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let productosDestacados = data.map(
          (productoDestacado) =>
            new ProductoDestacado(
              productoDestacado.title,
              productoDestacado.price,
              productoDestacado.imageUrl
            )
        );
        setProducts(productosDestacados);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderProductosDestacados = (productos) => {
    const maxColumns = 5;
    let content = [];
    for (let i = 0; i < productos.length; i += maxColumns) {
      let columns = [];
      for (let j = i; j < i + maxColumns && j < productos.length; j++) {
        columns.push(
          <Col key={j + i}>
            <ProductBox
              name={productos[j].Nombre}
              price={productos[j].precio}
              image={productos[j].urlImagen}
            />
          </Col>
        );
      }
      content.push(
        <Row key={i} className="g-0">
          {columns}
        </Row>
      );
    }
    return content;
  };
  return <section>{renderProductosDestacados(products)}</section>;
}
