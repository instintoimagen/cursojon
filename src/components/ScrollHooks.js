import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // console.log("Moviendo Scroll, valor actual: ", { scrollY });

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => window.removeEventListener("scroll", detectarScroll);
  }, [scrollY]);

  useEffect(() => {
    //    console.log("Fase 1 de Montaje");
  }, []);

  useEffect(() => {
    //  console.log("Fase 2 de Actualización");
  });

  useEffect(() => {
    return () => {
      //   console.log("Fase 3 de Desmontaje");
    };
  });

  return (
    <>
      <h3>Hooks - useEffect y el Ciclo de Vida</h3>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}
