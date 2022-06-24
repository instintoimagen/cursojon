import React, { useState } from "react";

export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form enviado OK");
  };

  return (
    <>
      <h3>Formulario Simple</h3>
      <h5>
        Versión sencilla (pocas preguntas, cada una en una variable de estado)
      </h5>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          placeholder="escriba nombre aquí"
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Elije tu sabor JS favorito</p>
        <input
          type="radio"
          id="Vanilla"
          name="sabor"
          value="Vanilla"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="Vanilla">Vanilla </label>
        <input
          type="radio"
          id="Angular"
          name="sabor"
          value="Angular"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="Angular">Angular </label>
        <input
          type="radio"
          id="Svelte"
          name="sabor"
          value="Svelte"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="Svelte">Svelte </label>
        <input
          type="radio"
          id="React"
          name="sabor"
          value="React"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="React">React </label>
        <input
          type="radio"
          id="Vue"
          name="sabor"
          value="Vue"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="Vue">Vue </label>
        <p>Elige tu lenguaje de programación favorito</p>
        <select
          name="lenguajes"
          onChange={(e) => setLenguaje(e.target.value)}
          required
        >
          <option value="">- - -</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>{" "}
        <br />
        <label htmlFor="terminos">
          <small>Acepto términos sin leer (gil)</small>
        </label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
          required
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
