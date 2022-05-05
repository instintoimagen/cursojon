import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "true" : "false"}</li>
        <li>Los números de Lost en arreglo: {props.arreglo.join(", ")}</li>
        <li>
          En Objeto = Nombre:{" "}
          {props.objeto.nombre + " Mail: " + props.objeto.mail}
        </li>
        <li>
          Funcion eleva cuadrado el arreglo:{" "}
          {props.arreglo.map(props.function).join(", ")}
        </li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las props por defecto ja ja",
};

Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};
