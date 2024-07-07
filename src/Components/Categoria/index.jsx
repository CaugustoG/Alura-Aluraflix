import "./Categoria.css"
import Cards from "../Cards"


const Categoria = (props) => {

    //destructuracion del objeto datos
    const { colorPrimario, titulo } = props.datos

    //Define el estilo del titulo
    const estiloTitulo = { borderColor: colorPrimario }


    return <section className="categoria">
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            
        </div>
    </section>
}

export default Categoria