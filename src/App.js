//IMPORT LIBRERIAS REACT---//------------------------------------------
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//IMPORT CSS---//------------------------------------------
import "./App.css";
//IMPORT COMPONENTS ---//------------------------------------------
import Header from "./Components/Header";
import NuevoVideo from "./Components/Nuevo-video";
import Categoria from "./Components/Categoria";
import Videos from "./Components/Videos/Videos";
import Footer from "./Components/Footer";
import ListaOpciones from "./Components/ListaOpciones/Index";

import ListaCategorias from "./Components/ListaCategorias/ListaCategorias";
//------------------------------------------
function App() {
  //HOOKS ---//------------------------------------------
  //Listas cards
  const [cards, actualizarCards] = useState([
    {
      id: uuid(),
      categoria: "Nórdico",
      imagen:
        "https://img.freepik.com/foto-gratis/delicioso-festival-comida-callejera_23-2151543555.jpg",
      nombre: "Noruega",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Nórdico",
      imagen:
        "https://img.freepik.com/foto-gratis/impresionante-toma-hermoso-lago-congelado-rodeado-montanas-nevadas-dia-soleado_181624-5508.jpg",
      nombre: "iceland",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Nórdico",
      imagen:
        "https://img.freepik.com/foto-gratis/rio-rodeado-arboles-montanas-cubiertas-nieve-invierno_181624-9033.jpg",
      nombre: "frio lugar",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Llanuras",
      imagen:
        "https://img.freepik.com/foto-gratis/vista-naturaleza-vegetacion-estados-unidos_23-2149870957.jpg",
      nombre: "Noruega",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Mares",
      imagen:
        "https://img.freepik.com/foto-gratis/lion-rock-playa-piha_181624-37132.jpg",
      nombre: "Noruega",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Selva",
      imagen:
        "https://img.freepik.com/foto-gratis/corriente-agua-limpia-que-fluye-traves-selva-tropical-daintree-queensland-australia_181624-48016.jpg",
      nombre: "Darien",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Montaña",
      imagen:
        "https://img.freepik.com/foto-gratis/tiro-enfoque-superficial-ramas-arboles-telarana-hermosa-vista-paisaje-brumoso-detras_181624-48082.jpg",
      nombre: "chile",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Llanuras",
      imagen:
        "https://img.freepik.com/foto-gratis/odenwald-manana-brumosa_181624-29338.jpg",
      nombre: "Meta",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Selva",
      imagen:
        "https://img.freepik.com/foto-gratis/impresionante-toma-pequena-cascada-bosque-sol-brillando-traves-arboles_181624-8392.jpg",
      nombre: "Mexico",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Mediterraneo",
      imagen:
        "https://img.freepik.com/foto-gratis/bonifacio-comuna-francia_181624-5380.jpg",
      nombre: "Mar mediterraneo",
      fav: false,
    },
    {
      id: uuid(),
      categoria: "Mediterraneo",
      imagen:
        "https://img.freepik.com/foto-gratis/hermoso-tiro-agua-clara-cerca-acantilado-rocoso-dia-soleado_181624-2648.jpg",
      nombre: "Las termopilas",
      fav: false,
    },
    {
      id: uuid(),
      categoria: "Montaña",
      imagen:
        "https://img.freepik.com/foto-gratis/poca-luz-montana_198169-348.jpg",
      nombre: "africano",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Montaña",
      imagen:
        "https://img.freepik.com/foto-gratis/hermosa-vista-lago-tranquilo-rodeado-montanas-dia_181624-48879.jpg",
      nombre: "alemania",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Mediterraneo",
      imagen:
        "https://img.freepik.com/foto-gratis/hermosa-vista-al-mar-dia-tranquilo_181624-44724.jpg",
      nombre: "Italia",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Mares",
      imagen:
        "https://img.freepik.com/foto-gratis/escena-playa-al-atardecer_23-2147642610.jpg",
      nombre: "Mar egeo",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Mares",
      imagen:
        "https://img.freepik.com/foto-gratis/impresionante-paisaje-playa-rocosa-hermosa-puesta-sol_181624-35460.jpg",
      nombre: "Mar caribe",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Llanuras",
      imagen:
        "https://img.freepik.com/foto-gratis/paisaje-naturaleza-montanosa-rio_23-2150705800.jpg",
      nombre: "Pampa argentina",
      fav: true,
    },
    {
      id: uuid(),
      categoria: "Selva",
      imagen:
        "https://img.freepik.com/foto-gratis/arbol-caido-que-refleja-lago-parque-nacional-monte-rainier-seattle-estado-washington_181624-8631.jpg",
      nombre: "amazonas",
      fav: false,
    },
  ]);

  //lista de categorias
  const [categorias, actualizarCategoria] = useState([
    {
      id: uuid(),
      titulo: "Nórdico",
      colorPrimario: "#A6D157",
    },
    {
      id: uuid(),
      titulo: "Mediterraneo",
      colorPrimario: "#A6D157",
    },
    {
      id: uuid(),
      titulo: "Montaña",
      colorPrimario: "#A6D157",
    },
    {
      id: uuid(),
      titulo: "Llanuras",
      colorPrimario: "#A6D157",
    },
    {
      id: uuid(),
      titulo: "Selva",
      colorPrimario: "#A6D157",
    },
    {
      id: uuid(),
      titulo: "Mares",
      colorPrimario: "#A6D157",
    },
  ]);

  //FUNCIONES ---//------------------------------------------

  //Registro de videos
  const registrarCard = (card) => {
    console.log("registrar video", registrarCard);
    actualizarCards([...cards, card]);
  };

  //eliminar card
  const eliminarCard = (id) => {
    console.log("eliminar card:", id);
    const nuevaCard = cards.filter((card) => card.id != id);
    actualizarCards(nuevaCard);
  };
  //Crear categoria
  const crearCategoria = (nuevaCategoria) => {
    console.log(nuevaCategoria);
    actualizarCategoria([...categorias, { ...nuevaCategoria, id: uuid() }]);
  };

  //RETORNO ---//------------------------------------------
  return ( <Router>
        <Header />
        <ListaCategorias/>
      <Routes>
        <Route path="/videos" element={
            <div /*className='app'*/>
              {categorias.map((categoria) => (
                <Categoria
                  datos={categoria}
                  key={categoria.titulo}
                  cards={cards.filter(
                    (card) => card.categoria === categoria.titulo)}
                  eliminarCard={eliminarCard}
                  crearCategoria={crearCategoria}
                />
              ))}
            </div>
          }
        />
        <Route path="/nuevo-video"
          element={
            <div /*className='app'*/>
              
              <NuevoVideo
                categorias={categorias.map((categoria) => categoria.titulo)}
                registrarCard={registrarCard}
                crearCategoria={crearCategoria}
              />
              
            </div>
          }
        />
        <Route path="/videos/:id" element={<Videos/>}/>
        <Route path="*" element={<h1>Error 404, la página no existe</h1>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
