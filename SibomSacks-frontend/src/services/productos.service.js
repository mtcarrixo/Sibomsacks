import axios from "./axios.config.js";

const obtenerTodos = async () => {
  const response = await axios.get("/productos");
  return response.data;
};

const obtenerPorId = async (id) => {
  const response = await axios.get(`/productos/${id}`);
  return response.data;
};

export default {
  obtenerTodos,
  obtenerPorId,
}