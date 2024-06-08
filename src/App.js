import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header';
import Formulario from "./componentes/Formulario";
import MiOrg from './componentes/Miorg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  //Creando función useState const[]=useState()

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    // Programación
    {
      id: uuid(),
      equipo: 'Programación',
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
      
    },
    {
      id: uuid(),
      equipo: 'Programación',
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jean Marie",
      puesto: "Instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: 'Programación',
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Instructor",
      fav: false
      
    },
    {
      id: uuid(),
      equipo: 'Front End',
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jean Marie",
      puesto: "Instructora"
    },
    {
      id: uuid(),
      equipo: 'Data Science',
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jean Marie",
      puesto: "Instructora"
    },
    {
      id: uuid(),
      equipo: 'Data Science',
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: 'Data Science',
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: 'Devops',
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: 'Devops',
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jean Marie",
      puesto: "Instructora"
    },
    {
      id: uuid(),
      equipo: 'Devops',
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: 'Devops',
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: 'UX y Diseño',
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: 'UX y Diseño',
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: 'Móvil',
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: 'Móvil',
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: 'Innovación y Gestión',
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: 'Innovación y Gestión',
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jean Marie",
      puesto: "Instructora"
    },
    {
      id: uuid(),
      equipo: 'Innovación y Gestión',
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: 'Innovación y Gestión',
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    }
  ])

  const [equipos, actualizarEquipos] = useState([
    // Creando objetos
    {  
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    }
    ,
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    }
    ,
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    }
    ,
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    }
    ,
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    }
    ,
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    }
    ,
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
    
    
    
])

  //Ternario --> condición ? seMuestra : noSeMuestra
  // condición && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Creando función Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    // Spread operator
    actualizarColaboradores([...colaboradores, colaborador])

  }

  //función Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Función actualizar Color de Equipo

  const actualizarColor = (color, id) => {
    console.log("actualizar Color", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  // Función Crear un equipo 
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }

  // Función de like
  const like = (id) => {
     console.log ("like", id)
     const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
     })

     actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div >
      
      <Header />
      {/* mostrarFormulario ? <Formulario /> : <></> */}
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}

        
      />

      }
        <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map( (equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        )

      }

      <Footer />
      

    </div>
  );
}

export default App;
