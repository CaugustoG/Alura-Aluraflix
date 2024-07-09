import { useState, useEffect } from "react"
import "./Cards.css"
import { buscar } from "../../api/api"
import { Link } from "react-router-dom"

/*const Cards = (props) => {

    const { imagen, nombre, id } = props.datos
    const { eliminarCard } = props


    return <div className="Card">
        <div className="miniatura">
            <div>
                <div>{nombre}</div>
                <img src={imagen} alt={nombre} />

            </div>
        </div>
        <div className="info">
            <div className="accion" onClick={() => eliminarCard(id)}>
                <img src={"/img/VectorBorrar.png"} alt="borrar" />
                <h4>BORRAR</h4>
            </div>
            <div className="accion" >
                <img src="/img/VectorEditar.png" alt="editar" />
                <h4>EDITAR</h4>
            </div>
        </div>
    </div>
}*/

const Cards = ({ url }) => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        buscar(url, setVideos)
        console.log(videos)
    }, [url])

    return (
        <section className="cards">
            {
                videos.map(video => {
                    const {id, title, category, photo, link, description} = video;

                    return <Link to={`/videos/${id}`} className="miniatura" key={id}>
                        <article >
                            <img src={photo} alt={title} />
                            <h4>
                                {title}
                            </h4>
                            <h2>
                                {category}
                            </h2>
                            <p>{description}</p>
                            <div className="info">
                                <div className="accion" 
                                /*onClick={() => eliminarCard(id)}*/
                                >
                                    <img src={"/img/VectorBorrar.png"} alt="borrar" />
                                    <h4>BORRAR</h4>
                                </div>
                                <div className="accion" >
                                    <img src="/img/VectorEditar.png" alt="editar" />
                                    <h4>EDITAR</h4>
                                </div>
                            </div>
                        </article>
                    </Link>

                })
            }
        </section>
    )
}

export default Cards