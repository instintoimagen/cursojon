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

/* function Boton(props) {
  return <button onClick={props.myonClick}>Botón hecho con componente</button>;
} */

/* const Boton = (props) => (
  <button onClick={props.myonClick}>Botón hecho con componente</button>
); */

const Boton = ({ myonClick }) => (
  <button onClick={myonClick}>Botón hecho con componente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    console.log(e.target);
    console.log(mensaje);
  };
  render() {
    return (
      <div>
        <h3>Más sobre EVENTOS</h3>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        >
          Saludar
        </button>
        <br />
        {/* Evento Personalizado. porque no se puede utilizar onClick, entonces lo pasamos como una "props" */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(
              e,
              "2 - 2 - Hola pasando parámetro desde un evento - Botón componente"
            )
          }
        /> */}
        <Boton
          myonClick={(e) =>
            this.handleClick(e, "2 - 2 - Hola pasando parámetro - Btn comp")
          }
        />
        <br />
        <br />
      </div>
    );
  }
}
