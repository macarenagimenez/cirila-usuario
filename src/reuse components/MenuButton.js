import React from "react";
import Nav from "react-bootstrap/Nav";

export default function MenuButton(props) {
  return (
    <Nav.Link href={props.link} style={{ color: "#f5ccc3" }}>
      {props.name}
    </Nav.Link>
  );
}
