import React, { Component } from "react";

function EstadoAHijo(props) {
  return (
    <div>
      <h4>{props.contadorHijo}</h4>
    </div>
  );
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    setInterval(() => {
      // Dentro de un this.setState, porque no podemos modificarlo directamente, ya que el estado (contador) es INMUTABLE en React.
      this.setState({
        contador: this.state.contador + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h3>El State</h3>
        <p>Contador {this.state.contador} segundos. [PADRE]</p>
        <p>
          <small>
            <mark>En Estado.js</mark>
          </small>
        </p>
        <EstadoAHijo contadorHijo={this.state.contador} />
      </div>
    );
  }
}
