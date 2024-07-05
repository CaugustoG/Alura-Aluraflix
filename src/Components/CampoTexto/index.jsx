import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) => {
        //console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            valor={props.titulo}
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto