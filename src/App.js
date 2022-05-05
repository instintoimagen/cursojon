import logo from "./logo.svg";
import "./App.css";

function App() {
  let nombre = "Sergio";
  let profesiones = [
    "Desarrollador",
    "Director de Tv",
    "Fotógrafo",
    "Papá de Joaquín",
  ];
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{nombre}</h1>
          <ul>
            {profesiones.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
          <p>
            Editalo <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
