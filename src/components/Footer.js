import React from "react";
import "./Footer.css";

export default function Footer() {
  let footerIcons = [
    {
      url: "images/envios.png",
      text: "Envios a todo el país",
    },
    {
      url: "images/comprasegura.png",
      text: "Compra segura",
    },
    {
      url: "images/247.png",
      text: "Estamos del otro lado :)",
    },
  ];

  return (
    <section className="footer">
      <div className="imagesFooter">
        {footerIcons.map((foot, index) => {
          return (
            <div className="iconsAndText" key={index}>
              <img src={foot.url} alt={foot.text} />
              <p>{foot.text}</p>
            </div>
          );
        })}
      </div>
      <div className="contact">
        <h4>COMUNICATE CON NOSOTRAS</h4>
        <hr />
        <h5>hola@gaiacirila.com.ar</h5>
        <h5>+54 9 2657-307339</h5>
        <br></br>{" "}
      </div>
      <small className="authors">
        Desing and created by{" "}
        <a
          href="https://www.linkedin.com/in/maria-macarena-gimenez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Macu Gimenez (Front)
        </a>{" "}
        y{" "}
        <a
          href="https://www.linkedin.com/in/dario-rocha-a6a780139/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dario Rocha (Back)
        </a>
      </small>
    </section>
  );
}
