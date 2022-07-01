import React from "react";
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";
import "./Estilos.scss";

export default function Estilos() {
  let myStyles = {
    margin: "auto",
    maxWidth: "50%",
    backgroundColor: "#8cc",
    borderRadius: "4rem",
  };

  return (
    <section className="estilos">
      <h3>Estilos CSS en React</h3>
      <h4 className="bg-react">### Estilos en hoja CSS externa ###</h4>
      <h4
        className="bg-react"
        style={{ borderRadius: ".75rem", margin: "1.5rem" }}
      >
        Estilos en línea (atributo style)
      </h4>
      <h4 className="bg-react" style={myStyles}>
        Estilos en línea (con variable let)
      </h4>

      <h4 className="bg-react" style={{ backgroundColor: "#bbb" }}>
        Agregando Normalize con
        <br />
        <code>@import-nomalize;</code>
      </h4>

      <h4 className={moduleStyles.error}> Estilos con Módulos .error</h4>
      <h4 className={moduleStyles.success}> Estilos con Módulos .success</h4>

      <h4 className="bg-sass">Estilos con SASS</h4>
    </section>
  );
}
