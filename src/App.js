//IMPORT LIBRERIAS REACT---//------------------------------------------
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Buscar } from "./api/api";
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
import { buscar } from "./api/api";
//------------------------------------------
function App() {
  //HOOKS ---//------------------------------------------
  //Listas cards
  const [cards, actualizarCards] = useState([
    buscar
  ]);

  //lista de categorias
  const [categorias, actualizarCategoria] = useState([buscar]);

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
