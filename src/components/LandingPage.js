import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import BubbleText from "../reuse components/BubbleText";

export default function LandingPage() {
  const styleObjBubble1 = {
    fontSize: 40,
    margin: "auto",
    display: "Table",
    margin: "10px auto",
    padding: "0px 30px 6px 30px",
    borderRadius: "20px",
    letterSpacing: "1px",
  };

  return (
    <>
      <Menu />
      <Header />
      <BubbleText
        text="Peli, mantita favorita y comida rica... el mejor plan."
        style={styleObjBubble1}
      />
    </>
  );
}
