//import React, { Component } from "react";
//Se comenta el import ya que solo se usa cuando se define en una clase, y al no estar usado Componet arroja un warning la compilacion

// Dentro de una Clase
/* class Componente extends Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
} */

// Como componente funcional
/* function Componente(props) {
  return <h2>{props.msg}</h2>;
} */

// Funcion expresada
const Componente = (props) => (
  <>
    <h4>{props.msg}</h4>
    <p>
      {" "}
      <small>
        <mark>{props.en}</mark>
      </small>
    </p>
  </>
);

export default Componente;
