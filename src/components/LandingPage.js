import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import BubbleText from "../reuse components/BubbleText";

import Categorias from "./Categorias";

export default function LandingPage() {
  return (
    <>
      <Menu />
      <Header />
      <BubbleText
        text="Peli, mantita favorita y comida rica... el mejor plan."
        class="classIntro"
      />
      <Categorias />
    </>
  );
}
