import axios from "axios";

const instancia = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Esto lee la variable definida en Render
  headers: {
    "Content-Type": "application/json"
  }
});

export default instancia;
