import React, { useState } from "react";
//import { contadorPokemones } from "./AjaxApis";

// Bastandonos en Eventos.js paramos esos class component a Hooks
export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);

  /*  setTimeout(() => {
    console.log("se cargaron ", contadorPokemones, " pokemones");
  }, 1000);  */
  //console.log(useState());

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <>
      <h3>Hooks - useState</h3>
      <h4>Contador</h4>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h4>{contador}</h4>
      <h4>Contador de {props.titulo}</h4>
      <p>
        Componente hecho con Función no con Clase, no usamos contructor() ni
        render(), solo return(), tampoco se hace el bindeo. El manejador de
        eventos de las funciones sumar y restar quedan en una sola línea de
        código.
      </p>
    </>
  );
}

// Podemos agregar una propiedad por defecto

ContadorHooks.defaultProps = {
  titulo: "Clicks",
};
//No aparece este título de las defaultProps porque en el elemento <ContadorHooks /> del app.js hay un atributo título. Se reemplaza el título por defecto
