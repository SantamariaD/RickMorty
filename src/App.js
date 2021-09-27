import React from 'react';
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Navbar } from "./components/navbar/Navbar";
import { BuscadorPersonajes } from "./components/buscador-personaje/BuscadorPersonajes";
import { Footer } from "./components/footer/Footer";
import { Modal } from "./components/modal/Modal";
import * as BuscadorState from './components/buscador-personaje/BuscadorPersonajes.states';

function App() {
  // Variables de estados de los componentes
  const buscadorState = BuscadorState.InstanciarEstadoPersonajes();

  return (
    <React.Fragment>
      <Navbar />
      <BuscadorPersonajes 
        statePersona = {`${buscadorState.state}`}
        setStatePersona = {buscadorState.setState}
      />
      <Footer />
    </React.Fragment>
  );
}

export default App;
