import "./ListaOpciones.css";

const ListaOpciones = () =>{
    return <div className="lista-opciones">
        <label>Categoría</label>
        <select>
            <option>Programación</option>
            <option>Front End</option>
            <option>Data Science</option>
            <option>Devops</option>
            <option>UX / UI</option>
            <option>Móvil</option>
            <option>Innovación y Gestión</option>
        </select>
    </div>
}

export default ListaOpciones