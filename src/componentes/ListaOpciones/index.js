import "./ListaOpciones.css"

const ListaOpciones = () => {
    // Metodo map -> arreglo.map((equipo, index) =>{})
    
    const equipos = [
        "Programación",
        "Movil"
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            { equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
        

    </div>
}

export default ListaOpciones