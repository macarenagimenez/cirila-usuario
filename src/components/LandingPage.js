import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import BubbleText from "../reuse components/BubbleText";
import Categorias from "./Categorias";
import Separador from "./Separador";
import Productos from "./Productos";
import ButtonText from "../reuse components/ButtonText";
export default function LandingPage() {
  return (
    <>
      <Menu />
      <Header />
      <BubbleText
        text="Peli, mantita favorita y comida rica... el mejor plan."
        styleCss="classIntro"
      />
      <Categorias />
      <Separador image="images/divideA.jpg" class="containerA" />
      <ButtonText text="VER TODOS LOS PRODUCTOS" />
      <Productos name="Mantelito" price="1111.11" />
    </>
  );
}
