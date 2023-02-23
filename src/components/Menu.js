import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MenuButton from "../reuse components/MenuButton";
import "./Menu.css";

export default function Menu() {
  return (
    <>
      <Navbar expand="lg" className="NavBar">
        <Container>
          <Navbar.Brand className="writeBrand">Gaia Cirila</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto">
              <MenuButton link="#home" name="home" />
              <MenuButton link="#productos" name="productos" />
              <MenuButton link="#quienesSomos" name="¿quienes somos?" />
              <MenuButton link="#contacto" name="contacto" />
              <MenuButton link="#carrito" name="carrito" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
