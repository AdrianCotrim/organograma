import { useState } from 'react';
import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
  }

  const [colaboradores, setColaboradores] = useState([])

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}></Formulario>
      <Time nome={'Programação'}></Time>
      <Time nome={'Frontend'}></Time>
      <Time nome={'Data Science'}></Time>
    </div>
  );
}

export default App;
