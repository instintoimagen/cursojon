import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemons, setpokemons] = useState([]);

  // FETCH
  /* 
  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              //console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };
              setpokemons((pokemons) => [...pokemons, pokemon]); // Utilizo esta arrow function para la actualización del estado, poniendo como parámetro la misma variable que va a actualizar.
              // Utilizando spread operator: de lo que ya hay en la var pokemons, por cada uno (forEach), le agrego lo del objeto pokemon.
            });
        });
      });
  }, []); // Dejo vacío el arreglo, para que la funcion de efecto se ejecute SOLO 1 vez

 */

  // FETCH + Async

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
        setpokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <>
      <h3>Peticiones Asíncronas en Hooks</h3>
      <p>// ndc: operador ternario en JSX</p>
      {pokemons.length === 0 ? (
        <h4>Cargando...</h4>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}
