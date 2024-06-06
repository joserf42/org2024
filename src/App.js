import { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Formulario from "./componentes/Formulario";
import MiOrg from './componentes/Miorg';

function App() {
  //Creando función useState const[]=useState()

  const [mostrarFormulario, actualizarMostrar] = useState(true)

  //Ternario --> condición ? seMuestra : noSeMuestra
  // condición && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }


  return (
    <div >
      
      <Header />
      {/* mostrarFormulario ? <Formulario /> : <></> */}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />

    </div>
  );
}

export default App;
