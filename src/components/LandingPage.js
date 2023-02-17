import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import BubbleText from "../reuse components/BubbleText";

export default function LandingPage() {
  // const styleObjBubble1 = {
  //   fontSize: 50,
  //   marginTop: "20px",
  // };

  return (
    <>
      <Menu />
      <Header />
      <BubbleText
        text="Peli, mantita favorita y comida rica... el mejor plan."
        // style={styleObjBubble1}
      />
    </>
  );
}
