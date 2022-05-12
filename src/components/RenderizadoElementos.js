/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a
        href={props.el.web}
        target="_blank"
        rel="noreferrer"
        style={{
          color: "#fff",
          textDecoration: "none",
        }}
      >
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Invierno", "Primavera", "Verano", "Otoño"],
    };
  }

  render() {
    return (
      <div>
        <h3>RENDERIZADO DE ELEMENTOS</h3>
        <h4>Estaciones del año</h4>
        <ol>
          {this.state.seasons.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ol>
        <h4>Frameworks FrontEnd Javascript</h4>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
