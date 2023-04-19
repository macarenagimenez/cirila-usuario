import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/LandingPage.jsx";
import Products from "./pages/Products";
import QuienesSomos from "./pages/QuienesSomos";
import ProductSinglePage from "./pages/ProductsSinglePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="quienessomos" element={<QuienesSomos />} />
          <Route path="product" element={<ProductSinglePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
