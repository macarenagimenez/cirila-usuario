import React from "react";
import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Menu() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavbarBrand>
            <img
              src="images/logoCirila.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="GaiaCirila Logo"
            />
          </NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
}
