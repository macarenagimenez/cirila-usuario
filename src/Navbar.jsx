import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li style={{ float: "left" }}>
            <Link to="/" className="writeBrand">
              Gaia Cirila
            </Link>
          </li>
          <li>
            <Link to="/" className="NameNavbar">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="NameNavbar">
              Products
            </Link>
          </li>
          <li>
            <Link to="/quienessomos" className="NameNavbar">
              ¿Quienes somos?
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
