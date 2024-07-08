//IMPORT LIBRERIAS REACT---//------------------------------------------
import { useState } from "react";
import { v4 as uuid } from "uuid"
//IMPORT CSS---//------------------------------------------
import "./App.css";
//IMPORT COMPONENTS ---//------------------------------------------
import Header from "./Components/Header";
import NuevoVideo from "./Components/Nuevo-video";
import Categoria from "./Components/Categoria";
import Footer from "./Components/Footer";
//------------------------------------------
function App() {



  //HOOKS ---//------------------------------------------
  //Listas cards
  const [cards, actualizarCards] = useState([
    {
      id:uuid(),
      categoria: "Nórdico",
      foto: "https://img.freepik.com/foto-gratis/delicioso-festival-comida-callejera_23-2151543555.jpg",
      nombre: "Noruega",
      fav: true,
    },
    {
      id:uuid(),
      categoria: "Selva",
      foto: "https://img.freepik.com/foto-gratis/corriente-agua-limpia-que-fluye-traves-selva-tropical-daintree-queensland-australia_181624-48016.jpg",
      nombre: "Darien",
      fav: true,
    },
    {
      id:uuid(),
      categoria: "Montaña",
      foto: "https://img.freepik.com/foto-gratis/tiro-enfoque-superficial-ramas-arboles-telarana-hermosa-vista-paisaje-brumoso-detras_181624-48082.jpg",
      nombre: "chile",
      fav: true,
    },
    {
      id:uuid(),
      categoria: "Llanuras",
      foto: "https://img.freepik.com/foto-gratis/odenwald-manana-brumosa_181624-29338.jpg",
      nombre: "Meta",
      fav: true,
    },
    {
      id:uuid(),
      categoria: "Selva",
      foto: "https://img.freepik.com/foto-gratis/impresionante-toma-pequena-cascada-bosque-sol-brillando-traves-arboles_181624-8392.jpg",
      nombre: "Mexico",
      fav: true,
    },
    {
      id:uuid(),
      categoria: "Mediterraneo",
      foto: "https://img.freepik.com/foto-gratis/bonifacio-comuna-francia_181624-5380.jpg",
      nombre: "Mar mediterraneo",
      fav: false,
    },
    {
      id:uuid(),
      categoria: "Mediterraneo",
      foto: "https://img.freepik.com/foto-gratis/paisaje-mar-rodeado-montanas-edificios-playas-cielo-azul-nublado-grecia_181624-7981.jpg",
      nombre: "Santorini",
      fav: false,
    },
    {
      id:uuid(),
      categoria: "Montaña",
      foto: "https://img.freepik.com/foto-gratis/vestrahorn_181624-24633.jpg",
      nombre: "africano",
      fav: true,
    },
    {
      id:uuid(),
      categoria: "Llanuras",
      foto: "https://img.freepik.com/foto-gratis/paisaje-naturaleza-montanosa-rio_23-2150705800.jpg",
      nombre: "Pampa argentina",
      fav: true,
    },
    {
      id:uuid(),
      categoria: "Selva",
      foto: "https://img.freepik.com/foto-gratis/arbol-caido-que-refleja-lago-parque-nacional-monte-rainier-seattle-estado-washington_181624-8631.jpg",
      nombre: "amazonas",
      fav: false,
    },
  ]);
  
  //lista de categorias
  const [categorias, actualizarCategoria] = useState([
    {
      id:uuid(),
      titulo: "Nórdico",
      colorPrimario: "#A6D157",
    },
    {
      id:uuid(),
      titulo: "Mediterraneo",
      colorPrimario: "#A6D157",
    },
    {
      id:uuid(),
      titulo: "Montaña",
      colorPrimario: "#A6D157",
    },
    {
      id:uuid(),
      titulo: "Llanuras",
      colorPrimario: "#A6D157",
    },
    {
      id:uuid(),
      titulo: "Selva",
      colorPrimario: "#A6D157",
    },
  ]);

  //FUNCIONES ---//------------------------------------------

//Registro de videos
  const registrarCard = (card) => {
  console.log("registrar video", registrarCard);
  actualizarCards([...cards, card]);
  };


  const eliminarCard =(id) => {
    console.log ("eliminar card:", id)
    const nuevaCard = cards.filter(card => card.id != id)
    actualizarCards(nuevaCard)
  }
 //
  const crearCategoria = (nuevaCategoria)=>{
    console.log(nuevaCategoria);
  }




 //RETORNO ---//------------------------------------------
  return (
    <div /*className='app'*/>
      <Header />

      {
      categorias.map((categoria) =>
        <Categoria
        datos={categoria}
        key={categoria.titulo}
        cards={cards.filter(card => card.categoria === categoria.titulo)}
        eliminarCard={eliminarCard}
        //crearCategoria={crearCategoria}
        />
      )
      }
  
      <NuevoVideo
        categorias={categorias.map((categoria) => categoria.titulo)}
        registrarCard={registrarCard}
        crearCategoria={crearCategoria}
      />

      <Footer />
    </div>
  );
}

export default App;
