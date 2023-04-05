import React from "react";
import Header from "../components/Header";
import BubbleText from "../reuse components/BubbleText";
import Categorias from "../components/Categorias";
import Separador from "../components/Separador";
import ButtonText from "../reuse components/ButtonText";
import Productos from "../components/Productos";
import SeparadorB from "../components/SeparadorB";

export default function LandingPage() {
  return (
    <>
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
