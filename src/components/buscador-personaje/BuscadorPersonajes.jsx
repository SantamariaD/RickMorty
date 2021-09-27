import React from "react";
import "./BuscadorPersonajes.styles.css";
import * as BuscadorState from "./BuscadorPersonajes.states";
import * as ActionsBuscadorPersonaje from "./BuscadorPersonaje.actions";

const BuscadorPersonajes = (props) => {
  // Variables de estados
  const idState = BuscadorState.InstanciarIdPersonajes();
  const personajeStet = BuscadorState.InstanciarEstadoPersonajes();
  console.log(personajeStet.state);

  return (
    <section className="contenedor-buscador">
      <div className="buscador-personaje">
        <div className="buscador">
          <h3 className="titulo-buscador">Busca tu personaje{}</h3>
          <input
            placeholder="Ingresa el ID del personaje."
            className="input-buscador"
            onChange={(e) =>
              ActionsBuscadorPersonaje.cambiarIdPersonaje(
                e.target.value,
                idState.setState
              )
            }
          />
        </div>
        <div className="detalle-personaje">
          <div className="imagen-personaje">
            <img src={personajeStet.state.image} alt="imagen de rick y morty" />
          </div>
          <div className="informacion-personaje">
            <h4>ID: {personajeStet.state.id}</h4>
            <h4>Nombre: {personajeStet.state.name}</h4>
            <h4>Status: {personajeStet.state.status}</h4>
            <h4>Localidad: {personajeStet.state.location.name}</h4>
            <h4>Especie: {personajeStet.state.species}</h4>
          </div>
        </div>
        <div className="botones">
          <button className="btn btn-edit">Editar</button>
          <button className="btn btn-crear">Crear</button>
          <button
            onClick={() =>
              ActionsBuscadorPersonaje.agregarDetallePersonaje(
                idState.state,
                personajeStet.setState,
                idState.setState
              )
            }
            className="btn btn-eliminar"
          >
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
};

export { BuscadorPersonajes };
