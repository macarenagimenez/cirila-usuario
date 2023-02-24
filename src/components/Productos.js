import React from "react";
import ProductBox from "../reuse components/ProductBox";
import { Col, Row } from "react-bootstrap";
import ProductoDestacado from "../Modelo/ProductoDestacado";

export default function Productos() {
  const productosDestacados = [
    new ProductoDestacado("Mantelito", "1111.11", "images/cat1.png"),
    new ProductoDestacado("Mantelito 2", "1111.11", "images/cat2.jpg"),
    new ProductoDestacado("Mantelito 2", "1111.11", "images/cat2.jpg"),
    new ProductoDestacado("Mantelito 2", "1111.11", "images/cat2.jpg"),
    new ProductoDestacado("Mantelito 2", "1111.11", "images/cat2.jpg"),
  ];

  const maxColumns = 5;

  const renderProductosDestacados = (productos) => {
    let content = [];
    for (
      let i = 0 /* donde se para al iniciar*/;
      i <
      productos.length /*se debe validar esta condicion y entra al otro for*/;
      i += maxColumns /*cuando completo la vuelta ingresa por acá*/
    ) {
      //i= i + maxColumn. Primer for para crear las columnas
      let columns = [];
      for (
        let j = i /*indice es donde se posiciona en el array*/;
        j < i + maxColumns &&
        j < productos.length /*condicion a complirse para crear la fila*/;
        j++
      ) {
        //este for es para crear los productos
        columns.push(
          /*meto todo dentro de la variable*/
          <Col>
            <ProductBox
              name={
                productos[j].Nombre
              } /*entro a la clase del constructor creada*/
              price={productos[j].precio}
              image={productos[j].urlImagen}
            />
          </Col>
        );
      }
      content.push(<Row className="g-0">{columns}</Row>); //con .push metes dentro de la variable lo creado
    }
    return content;
  };

  return <section>{renderProductosDestacados(productosDestacados)}</section>; //imprimo la constante renderProductos//
}
