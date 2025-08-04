import axios from "./axios.config.js";

const crear = async (contacto) => {
  const response = await axios.post("/contacto", contacto);
  return response.data;
};

export default {
    crear
}