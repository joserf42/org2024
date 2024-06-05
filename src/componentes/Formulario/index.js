import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("manejar Envio", e)
        
    }

    return <section className="formulario" >
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" />
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" />
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" />
            <ListaOpciones />
            <Boton>
                crear
            </Boton>


        </form>



    </section>
}

export default Formulario