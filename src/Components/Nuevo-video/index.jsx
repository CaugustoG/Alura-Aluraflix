import "./NuevoVideo.css"
import CampoTexto from "../CampoTexto"

const NuevoVideo = ()=>{
    return <section className="nuevo-video">
            <form>
                <h2>nuevo video</h2>
                <CampoTexto titulo="Titulo" placeholder ="Ingrese el titulo"/>
                <CampoTexto titulo="Imagen" placeholder ="Ingrega el enlace de la imagen"/>
                <CampoTexto titulo="Video" placeholder ="Ingrega el enlace del video"/>
                <CampoTexto titulo="Descripción" placeholder ="¿de qué se trata el video?"/>
            </form>
        </section>       
}

export default NuevoVideo

