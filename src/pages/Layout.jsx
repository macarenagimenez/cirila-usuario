import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import Footer from "../components/Footer.js";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
