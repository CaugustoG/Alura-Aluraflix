import axios from "axios";

export const api = axios.create({
  baseURL:
    " https://my-json-server.typicode.com/CaugustoG/api-challenge-aluraflix/",
});

export const buscar = async (url, setData) => {
  const respuesta = await api.get(url);
  //console.log(respuesta);
  setData(respuesta.data);
};
