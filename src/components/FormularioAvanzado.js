import React, { useState } from "react";

export default function Formularios() {
  const [form, setForm] = useState({}); // Para que vaya todo en una sola var de estado, la inicializo como un objeto vacío (no como string vacío como se hacía en el formulario simple)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    }); // lo que traemos con el spread operator, destructurado [], que actualice con lo que hay en value
  }; // Esta funcion reemplaza las que estaban en los onChange no checked, solo hay que llamar a la funcion allá

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    }); // lo que traemos con el spread operator, destructurado [], que actualice con lo que hay en value
  }; // Esta funcion reemplaza las que estaban en los onChange checked (boolean)

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("- - - Form Avanzado Enviado OK - - -");
  };

  return (
    <>
      <h3>Formulario Avanzado</h3>
      <h5>Versión para muchas pregunas (en una sola variable de estado)</h5>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          placeholder="escriba nombre aquí"
          onChange={handleChange}
          /* onChange={(e) => setForm(e.target.value)} // ver aquí para que entre todo en un solo input sin ir cada caracter en una linea */
        />
        <p>Elije tu sabor S.O. favorito</p>
        <input
          type="radio"
          id="Linux"
          name="so"
          value="Linux"
          onChange={handleChange}
        />
        <label htmlFor="Linux">Linux </label>
        <input
          type="radio"
          id="Mac"
          name="so"
          value="Mac"
          onChange={handleChange}
        />
        <label htmlFor="Mac">Mac </label>
        <input
          type="radio"
          id="Windows"
          name="so"
          value="Windows"
          onChange={handleChange}
        />
        <label htmlFor="Windows">Windows </label>
        <input
          type="radio"
          id="Otro"
          name="so"
          value="Otro"
          onChange={handleChange}
        />
        <label htmlFor="Otro">Otro </label>
        <p>Elige tu lenguaje de programación favorito</p>
        <select name="lenguajes" onChange={handleChange} required>
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
          onChange={handleChecked}
          required
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
