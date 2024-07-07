import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import NuevoVideo from "./Components/Nuevo-video";
import Categoria from "./Components/Categoria";
import Footer from "./Components/Footer";

function App() {
  //HOOKS actualizar video
  const [videos, actualizarVideos] = useState([]);

  //Registro de videos
  const registrarVideo = (video) => {
    console.log("registrar video", registrarVideo);
    actualizarVideos([...videos, video]);
  };
  //lisata de categorias
  const categorias = [
    {
      titulo: "Back end",
      colorPrimario: "#00C86F",
    },
    {
      titulo: "Front End",
      colorPrimario: "#6BD1FF",
    },
    {
      titulo: "Innovación y gestión",
      colorPrimario: "#A6D157",
    },
  ];

  return (
    <div /*className='app'*/>
      <Header />
      
      {categorias.map((categoria) => {
        return <Categoria datos={categoria} key={categoria.titulo} />;
      })}
      <NuevoVideo
        categorias={categorias.map((categoria) => categoria.titulo)}
        actualizarVideos={actualizarVideos}
      />
      <Footer/>
    </div>
  );
}

export default App;
