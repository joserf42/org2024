import { useState } from "react"
import "./MiOrg.css"
const MiOrg = () =>{
    //Estado -hooks
    //useState => debemos import UseState
    // Función useState()

    console.log()
    //const [nombreVariable, funcionActualizar] = useState(valorInicial)
    const [nombre, actualizarNombre] = useState("Jose")

    /* Función ManejarClick estado del componente Mostrar/Ocultar elemento */
    const ManejarClick = () => {
        console.log("Mostrar/Ocultar elemento")
    }
    return <section className="orgSection">
        <h3 className="title">Mi Organización {nombre}</h3>
        <img src="./img/add.png" alt="Add Formulario Org" onClick={ManejarClick} />
    </section>
}

export default MiOrg