import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

let contadorPokemones;

export class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
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

              // Utilizando spread operator: de lo que ya hay en state.pokemons, por cada uno (forEach), le agrego lo del objeto pokemon.
              // Luego actualizo el estado con setState()
              let pokemons = [...this.state.pokemons, pokemon];
              this.setState({ pokemons });
            });
        });
      });
  }

  render() {
    contadorPokemones = this.state.pokemons.length;
    //console.log(contadorPokemones);
    return (
      <>
        <h3>Peticiones Asíncronas en componentes de clase</h3>
        {this.state.pokemons.length === 0 ? (
          <h4>Cargando...</h4>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
      </>
    );
  }
}

//llevo el contador de pokemones pintados para usarlo en otro componente
export { contadorPokemones };
