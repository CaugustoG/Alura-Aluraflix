import "./App.css";
import Header from "./Components/Header";
import NuevoVideo from "./Components/Nuevo-video";
import Categoria from "./Components/Categoria";

function App() {
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
      <NuevoVideo categorias={categorias.map((categoria) => categoria.titulo)}
      />
      {categorias.map((categoria) => {
        return <Categoria datos={categoria} key={categoria.titulo} />;
      })}
    </div>
  );
}

export default App;
