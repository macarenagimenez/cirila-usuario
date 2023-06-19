import React from "react";
import IdentidadDeMarca from "../components/Separador";
import BotonDeTexto from "../reuse components/ButtonText";
import Productos from "../components/Productos";
import OrdenDeProductos from "../reuse components/ClassifyProducts";

function Products() {
  return (
    <div>
      <IdentidadDeMarca image="images/showroom.jpg" class="containerA" />
      <BotonDeTexto text="PRODUCTOS" />
      <OrdenDeProductos />
      <Productos />
    </div>
  );
}

export default Products;
