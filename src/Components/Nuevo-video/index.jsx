import "./NuevoVideo.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones/Index"
import Boton from "../Boton"

const NuevoVideo = () => {

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("manejar envio", e)
    }

    return <section className="nuevo-video">
        <form onSubmit={manejarEnvio}>
            <h2>nuevo video</h2>
            <CampoTexto titulo="Titulo" placeholder="Ingrese el titulo" required />
            <ListaOpciones required />
            <CampoTexto titulo="Imagen" placeholder="Ingrega el enlace de la imagen" required />
            <CampoTexto titulo="Video" placeholder="Ingrega el enlace del video" required />
            <CampoTexto titulo="Descripción" placeholder="¿de qué se trata el video?" required />
            <Boton texto="Guardar" />
            <Boton texto="Limpiar" />
        </form>
    </section>
}

export default NuevoVideo

