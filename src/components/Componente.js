import React, { Component } from "react";

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
const Componente = (props) => <h3>{props.msg}</h3>;

export default Componente;
