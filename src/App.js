import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Components/Header";
import NuevoVideo from "./Components/Nuevo-video";
import Categoria from "./Components/Categoria";
import Footer from "./Components/Footer";

function App() {
  //HOOKS actualizar video
  const [Cards, actualizarCards] = useState([
    {
      categoria: "Nordico",
      foto: "https://img.freepik.com/foto-gratis/delicioso-festival-comida-callejera_23-2151543555.jpg?t=st=1720367052~exp=1720370652~hmac=820e9a2b8f7a920d92210d88b0a25e8bbed867d745addd138f69ae01aad1f194&w=996",
      nombre: "Noruega",
      puesto: "Instructor",
      fav: true,
    },
    {
      categoria: "Mediteraneo",
      foto: "https://img.freepik.com/foto-gratis/bonifacio-comuna-francia_181624-5380.jpg?t=st=1720376321~exp=1720379921~hmac=cb8842e499fd3ac28b7833494c6bf77924cd508070af2d58c6d0a58e59f4f0e9&w=996",
      nombre: "Mar mediterraneo",
      puesto: "Diseño UI",
      fav: false,
    },
    {
      categoria: "Montaña",
      foto: "https://img.freepik.com/foto-gratis/vestrahorn_181624-24633.jpg?t=st=1720367049~exp=1720370649~hmac=7ec974420706fbc321a1c0c2da631ccafe261849b10c2ba26cacb05a084f2e73&w=996",
      nombre: "africano",
      puesto: "Instructora en Alura Latam",
      fav: true,
    },
    {
      categoria: "Llanuras",
      foto: "https://img.freepik.com/foto-gratis/paisaje-naturaleza-montanosa-rio_23-2150705800.jpg?t=st=1720367177~exp=1720370777~hmac=68765d014e573513b7b14229755f5eea64566fae1fcfe40662691bd8d6fccc54&w=996",
      nombre: "palmpa argentina",
      puesto: "Head de Alura e Instructor",
      fav: true,
    },
    {
      categoria: "Selva",
      foto: "https://img.freepik.com/foto-gratis/arbol-caido-que-refleja-lago-parque-nacional-monte-rainier-seattle-estado-washington_181624-8631.jpg?t=st=1720376419~exp=1720380019~hmac=eede31cf95e1a069075be0ca14d7926934f7fae5eba8da90f9aa00c5b6695115&w=996",
      nombre: "amazonas",
      puesto: "Dev FullStack",
      fav: false,
    },
  ]);
  //Registro de videos
  //const registrarVideo = (card) => {
  //console.log("registrar video", registrarVideo);
  //actualizarCards([...Cards, card]);
  //};
  //lisata de categorias
  const [categorias, actualizarCategoria] = useState([
    {
      titulo: "Nórdico",
      colorPrimario: "#00C86F",
    },
    {
      titulo: "Mediteraneo",
      colorPrimario: "#6BD1FF",
    },
    {
      titulo: "Montaña",
      colorPrimario: "#A6D157",
    },
    {
      titulo: "Llanuras",
      colorPrimario: "#A6D157",
    },
    {
      titulo: "Selva",
      colorPrimario: "#A6D157",
    },
  ]);

  return (
    <div /*className='app'*/>
      <Header />

      {
      categorias.map((categoria) => (
        <Categoria
         datos={categoria} 
         key={categoria.titulo} />
      ))}
      <NuevoVideo
        categorias={categorias.map((categoria) => categoria.titulo)}
        actualizarCards={actualizarCards}
      />
      <Footer />
    </div>
  );
}

export default App;
