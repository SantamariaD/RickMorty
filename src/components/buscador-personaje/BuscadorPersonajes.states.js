import React from "react";

const idPersonaje = React.createContext(null);
const estadoInicialBuscador = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  location: {
    name: "Earth (Replacement Dimension)",
  },
  species: "Human",
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
};

const InstanciarEstadoPersonajes = () => {
  const [statePersonaje, setStatePersonaje] = React.useState(estadoInicialBuscador);
  return {
    state: statePersonaje,
    setState: setStatePersonaje,
  };
};

const InstanciarIdPersonajes = () => {
  const [stateId, setStateId] = React.useState(1);
  return {
    state: stateId,
    setState: setStateId,
  };
};

export { InstanciarEstadoPersonajes, InstanciarIdPersonajes, idPersonaje };
