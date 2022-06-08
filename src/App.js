import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado.js";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
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
          <hr />
        </section>
        <section>
          <Componente
            msg="Hola soy un componente, desde una prop, ahora soy funcional, y ahora no expresada, (arrow => ) "
            en="Solo en Componente.js "
          />
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
              <Componente
                msg="Esto es un componente React - Soy un componente dentro de una props."
                en="La lista está en Propiedades.js, y este último punto en Propiedades.js a través de Componente.js"
              />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponentes />
          <hr />
          <CicloVida />
        </section>
      </header>
    </div>
  );
}

export default App;
