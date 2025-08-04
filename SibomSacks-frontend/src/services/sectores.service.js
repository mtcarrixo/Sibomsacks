import axios from "./axios.config.js";

const obtenerTodos = async () => {
  const response = await axios.get("/sectores");
  return response.data;
};

export default {
  obtenerTodos
}