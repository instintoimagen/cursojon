import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this); //al metodo sumar de la clase le vamos a "enlazar" el this de la clase. Para superar el contexto y tomar al this fuera de este bloque {}
    this.restar = this.restar.bind(this); // bindeamos this también en metodo restar
  }

  sumar(e) {
    console.log("sumando");
    //console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    console.log("restando");
    //console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h3>Eventos en Componentes de Clases ES6</h3>
        <nav>
          <h5>Toque los botones para sumar o restar</h5>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h4>El contador está en: {this.state.contador}</h4>
      </div>
    );
  }
}

//Propierties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  // Arrow functions - para evitar hacer el bindeo. Porque al heredar el contexto las arrow function, toman el this del contexto padre, entonces setState le impacta al state del contexto superior
  sumar = (e) => {
    console.log("sumando");
    //console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    console.log("restando");
    //console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h3>Eventos en Componentes de Clases ES7</h3>
        <nav>
          <h5>Toque los botones para sumar o restar</h5>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h4>El contador está en: {this.state.contador}</h4>
      </div>
    );
  }
}
