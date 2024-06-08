import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("") //Estado 1
    const [puesto, actualizarPuesto] = useState("") //Estado 2
    const [foto, actualizarFoto] = useState("") //Estado 3
    const [equipo, actualizarEquipo] = useState("")

    const { registrarColaborador } = props

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

    return <section className="formulario" >
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
                titulo="Nombre" // Estados vinculados a sus respectivos inputs estado1=nombre
                placeholder="Ingresar nombre" 
                required valor={nombre} 
                actualizarValor={actualizarNombre} 
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required valor={puesto} 
                actualizarValor={actualizarPuesto} 
            
            />
            <CampoTexto 
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



    </section>
}

export default Formulario