import { useState } from "react"
import "./NuevoVideo.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones/Index"
import Boton from "../Boton"
import TituloSeccion from "../TituloSeccion"

const NuevoVideo = () => {

    const [titulo, actualizarTitulo] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [categoria, actualizarCategoria] = useState("")

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
        console.log("datos a enviar", datosAEnviar)
    }

    return <section className="nuevo-video">
        <form onSubmit={manejarEnvio}>
            <TituloSeccion />
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

