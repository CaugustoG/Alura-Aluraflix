
import "./Categoria.css"
import Cards from "../Cards"
import { buscar } from "../../api/api"
import ListaOpciones from "../ListaOpciones/Index"
import Video from "../Videos/Videos"
import { useParams } from "react-router-dom"
import { useState } from "react"


/*const Categoria = (props) => {

    //destructuracion del objeto datos
    const { colorPrimario, titulo, } = props.datos
    const { cards, eliminarCard } = props

    //Define el estilo del titulo
    const estiloTitulo = { borderColor: colorPrimario }
    //console.log(cards.length > 0)

    return <>
        {cards.length > 0 &&
            <section className="categoria">
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="cards">
                    {
                        cards.map((card, index) => <Cards
                            datos={card}
                            key={index}
                            eliminarCard={eliminarCard}
                        />)
                    }
                </div>
            </section>
        }
    </>
}*/


const Categoria = ({ url }) => {

    const {category} = useState([])

    const {id} = useParams

    return (
        <>
            <div>
                <Cards url={"/videos"} />
            </div>
            
        </>


    )
}


export default Categoria