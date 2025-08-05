import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Encabezado from "./components/Encabezado";
import PiePagina from "./components/PiePagina";

// Páginas
import Inicio from "./pages/Inicio";
import SobreNosotros from "./pages/SobreNosotros";
import Productos from "./pages/Productos";
import Beneficios from "./pages/Beneficios";
import Contacto from "./pages/Contacto";
import ProductoDetalle from "./pages/DetalleProductos";

import "./App.css";
import whatsappIcon from "../public/images/whatsapp.png";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Encabezado />
        <div className="main-layout">
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/beneficios" element={<Beneficios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/productos/:id" element={<ProductoDetalle />} />
          </Routes>
        </div>
        <PiePagina />
        <WhatsAppButton /> {/* Botón flotante */}
      </div>
    </BrowserRouter>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5493516622764" // Reemplaza con tu número de WhatsApp
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
}

export default App;
