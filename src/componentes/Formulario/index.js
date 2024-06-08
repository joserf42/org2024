import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("") //Estado 1
    const [puesto, actualizarPuesto] = useState("") //Estado 2
    const [foto, actualizarFoto] = useState("") //Estado 3
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("") //Para el Segundo form
    const [color, actualizarColor] = useState("")

    // Destructuración
    const { registrarColaborador, crearEquipo } = props
    
    // Función para manejar envio de form 1
    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("manejar Envio")
        
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    // Función para manejar equipo de form 2 y se vincula en onSubmit del form 2
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario" >
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" // Estados vinculados a sus respectivos inputs estado1=nombre
                placeholder="Ingresar nombre" 
                required valor={nombre} 
                actualizarValor={actualizarNombre} 
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required valor={puesto} 
                actualizarValor={actualizarPuesto} 
            
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required valor={foto} 
                actualizarValor={actualizarFoto} 
            
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            
            />
            <Boton>
                crear
            </Boton>


        </form>
        
        <form onSubmit={manejarNuevoEquipo}> 
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" // Estados vinculados a sus respectivos inputs estado1=nombre
                placeholder="Ingresar titulo" 
                required valor={titulo} 
                actualizarValor={actualizarTitulo} 
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el Color en Hex" 
                required valor={color} 
                actualizarValor={actualizarColor}
                type="color" 
            
            />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>

    </section>
}

export default Formulario