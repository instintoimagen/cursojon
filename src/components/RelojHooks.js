import React, { useState, useEffect } from "react";

function Reloj({ hora }) {
  return <h2 style={{ color: "#59f" }}>{hora}</h2>;
}

export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }

    return () => {
      // console.log("Fase de desmontaje");
      clearInterval(temporizador);
    };
  }, [visible]);

  return (
    <>
      <h3>Reloj con Hooks</h3>
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
      {visible ? (
        <Reloj hora={hora} />
      ) : (
        <>
          <br /> <br />
          <br /> <br />
        </>
      )}
    </>
  );
}
