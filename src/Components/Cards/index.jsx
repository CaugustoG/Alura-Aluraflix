import "./Cards.css"


const Cards = (props) => {

    const { titulo, imagen, } = props.datos


    return <div className="Card">
        <div className="miniatura">
            <img src={imagen} alt={titulo} />
            <div>{titulo}</div>
        </div>
        <div className="info">
            <div className="accion">
                <img src="/img/VectorBorrar.png" alt="borrar" />
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