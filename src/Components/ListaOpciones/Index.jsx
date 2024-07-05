import "./ListaOpciones.css";

const ListaOpciones = (props) => {
    // lista de Categorias
    const categorias = [
        "Back end",
        "Front End",
        "Innovación y Gestión",
    ]

    const manejarCambio = (e) => {
        //console.log("cambio", e.target.value)
        props.actualizarCategoria(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Categoría</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Selecciona una categoría...</option>
            {categorias.map((categoria, index) => {
                return <option key={index}>{categoria}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones