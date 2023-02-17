import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MenuButton from "../reuse components/MenuButton";

export default function Menu() {
  return (
    <>
      <Navbar expand="lg" className="NavBar">
        <Navbar.Brand>
          <img
            src="images/logo.png"
            width="100%"
            height="50"
            className="d-inline-block align-top"
            alt="GaiaCirila Logo"
          />{" "}
        </Navbar.Brand>
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
      </Navbar>
    </>
  );
}
