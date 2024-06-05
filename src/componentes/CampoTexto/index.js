import "./Campo.css"

const CampoTexto = (props) => {
    console.log("Datos: ", props)
    const placeholderModificado = `${props.placeholder}...`

    return <div className="campo" >
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} required={props.required} />

    </div>
}

export default CampoTexto