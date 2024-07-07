import { useState } from "react"
import "./NuevoVideo.css"
import TituloSeccion from "../TituloSeccion"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones/Index"
import Boton from "../Boton"

// Componente Nuevo-video es un formulario para agregar video nuevo a la lista
const NuevoVideo = (props) => {

    const [titulo, actualizarTitulo] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [categoria, actualizarCategoria] = useState("")

    //destructuracion
    const { actualizarVideos } = props

    const manejarEnvio = (e) => {

        e.preventDefault()
        // console.log("manejar envio", e)
        // datosAEnviar es un objeto que captura los estados generados
        const datosAEnviar = {
            titulo,
            imagen,
            video,
            descripcion,
            categoria
        }
        actualizarVideos(datosAEnviar)
    }

    return <section className="nuevo-video">
        <form onSubmit={manejarEnvio}>
            <TituloSeccion/>
            <h2>Crear card</h2>
            <CampoTexto
                titulo="Titulo"
                placeholder="Ingrese el titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <ListaOpciones
                required
                valor={categoria}
                actualizarCategoria={actualizarCategoria}
                categorias={props.categorias}
            />
            <CampoTexto
                titulo="Imagen"
                placeholder="Ingrega el enlace de la imagen"
                required
                valor={imagen}
                actualizarValor={actualizarImagen}
            />
            <CampoTexto
                titulo="Video"
                placeholder="Ingrega el enlace del video"
                required
                valor={video}
                actualizarValor={actualizarVideo}
            />
            <CampoTexto
                titulo="Descripción"
                placeholder="¿de qué se trata el video?"
                required
                valor={descripcion}
                actualizarValor={actualizarDescripcion}
            />
            <Boton texto="Guardar" />
            <Boton texto="Limpiar" />
        </form>
    </section>
}

export default NuevoVideo

