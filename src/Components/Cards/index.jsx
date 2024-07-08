import "./Cards.css"


const Cards = (props) => {

    const {categoria, foto, nombre, id }= props.datos
    const {eliminarCard} = props


    return <div className="Card">
        <div className="miniatura">
            <div>
                <div>{nombre}</div>
                <img src={foto} alt={nombre} />
                
            </div>
        </div>
        <div className="info">
            <div className="accion" onClick={() =>eliminarCard(id)}>
                <img src={"/img/VectorBorrar.png"} alt="borrar" />
                <h4>BORRAR</h4>
            </div>
            <div className="accion" >
                <img src="/img/VectorEditar.png" alt="editar" />
                <h4>EDITAR</h4>
            </div>
        </div>
    </div>
}


export default Cards