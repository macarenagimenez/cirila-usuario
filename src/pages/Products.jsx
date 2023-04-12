import React from "react";
import Separador from "../components/Separador";
import ButtonText from "../reuse components/ButtonText";
import Productos from "../components/Productos";
import ClassifyProducts from "../reuse components/ClassifyProducts";

function Products() {
  return (
    <div>
      <Separador image="images/showroom.jpg" class="containerA" />
      <ButtonText text="PRODUCTOS" />
      <ClassifyProducts />
      <Productos />
    </div>
  );
}

export default Products;
