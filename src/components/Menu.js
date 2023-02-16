import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Menu() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              src="images/logoCirila.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="GaiaCirila Logo"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav NavMenu">
            <Nav className="me-auto ">
              <Nav.Link href="#home">productos</Nav.Link>
              <Nav.Link href="#quienesomos">¿quienes somos?</Nav.Link>
              <Nav.Link href="#contacto">contacto</Nav.Link>
              <Nav.Link href="#carrito">carrito</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
