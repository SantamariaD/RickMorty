const agregarDetallePersonaje = (id, setPersonajeState, setIdPersonaje) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
        setPersonajeState(data);
    })
    .catch(error => alert(error));
    
};

const cambiarIdPersonaje = (id, setIdPersonaje) => {
  setIdPersonaje(id);
};

export { agregarDetallePersonaje, cambiarIdPersonaje };
