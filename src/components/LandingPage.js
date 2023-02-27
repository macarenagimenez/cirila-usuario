import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import BubbleText from "../reuse components/BubbleText";
import Categorias from "./Categorias";
import Separador from "./Separador";
import ButtonText from "../reuse components/ButtonText";
import Productos from "./Productos";
import SeparadorB from "./SeparadorB";

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
      <Separador
        image="images/divideA.jpg"
        text="SOMOS EL MEJOR REGALO"
        class="containerA"
      />
      <ButtonText text="VER TODOS LOS PRODUCTOS" />
      <Productos />
      <SeparadorB />
    </>
  );
}
