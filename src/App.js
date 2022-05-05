import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola soy un componente, desde una prop, ahora soy funcional, y ahora no expresada, (arrow => )" />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={13}
            booleano={true}
            arreglo={[4, 8, 15, 16, 23, 42]}
            objeto={{
              nombre: "Sergio",
              mail: "sergio@sergio.com",
            }}
            function={(num) => num * num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={
              <Componente msg="Soy un componente dentro de una props" />
            }
          />
        </section>
      </header>
    </div>
  );
}

export default App;
