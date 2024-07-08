import { useState } from "react"
import "./NuevoVideo.css"
import TituloSeccion from "../TituloSeccion"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones/Index"
import Boton from "../Boton"

// Componente Nuevo-video es un formulario para agregar video nuevo a la lista
const NuevoVideo = (props) => {
    //formulario nuevo-video ---
    const [nombre, actualizarNombre] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    //cormulario crear categoria---
    const [titulo, actualizarTitulo] = useState("")

    //destructuracion
    const { registrarCards, nuevaCategoria, crearCategoria } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("manejar envio", e)
        // datosAEnviar es un objeto que captura los estados generados
        let datosAEnviar = {
            titulo,
            imagen,
            video,
            descripcion,
            categoria
        }
        props.registrarCard(datosAEnviar) 
    }

    const manejarNuevaCategoria = (e)=> {
        e.preventDefault()
        console.log("nueva categoria:", {titulo})
        crearCategoria({titulo})
    }

    return <section className="nuevo-video">
        <form onSubmit={manejarEnvio}>
            <TituloSeccion />
            <h2>Crear card</h2>
            <div className="campos">
                <CampoTexto
                    titulo="Titulo"
                    placeholder="Ingrese el titulo"
                    required
                    valor={nombre}
                    actualizarValor={actualizarNombre}
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
            </div>
            <div className="btn">
                <Boton texto="Guardar" />
                <Boton texto="Limpiar" />
            </div>
        </form>
        <form onSubmit={manejarNuevaCategoria}>
            <h2>Crear categoría</h2>
            <div className="campos">
                <CampoTexto
                    titulo="Categoría"
                    placeholder="Ingrese la categoría"
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                    crearCategoria={crearCategoria}
                />
            </div>
            <div className="btn">
                <Boton texto="Crear categoría" />
            </div>
        </form>
    </section>
}

export default NuevoVideo

