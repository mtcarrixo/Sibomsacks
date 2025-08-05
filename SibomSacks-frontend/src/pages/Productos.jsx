import React, { useEffect, useState } from "react";
import productoService from "../services/productos.service.js";
import { useNavigate } from "react-router-dom";
import "./Productos.css"; // Asegurate de tener este archivo

const imagenesPorModelo = {
  1: "valvuladecargaydescarga.png",
  2: "polleradecierrrevalvuladedescarga.png",
  3: "bocaabiertavalvuladedescarga.png",
  4: "valvuladecargafondociego.png",
  5: "polleradecierrefondociego.png",
  6: "bocaabiertafondociego.png",
};

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  const cargarProductos = async () => {
    try {
      const data = await productoService.obtenerTodos();
      setProductos(data);
    } catch (error) {
      console.error("❌ Error al cargar productos:", error.message);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center fw-bold">Conocé nuestros productos</h2>
      <div className="row g-4">
        {productos.map((producto) => {
          const modelo = producto.caracteristicasGenerales?.id_tipo;
          const nombreImagen = imagenesPorModelo[modelo] || "default.png";
          const imagenSrc = `../../public/images/${nombreImagen}`;



          return (
            <div className="col-md-4 col-sm-6" key={producto.id}>
              <div className="card product-card h-100 shadow-sm border-0 rounded">
                <img
                  src={imagenSrc}
                  alt={`Modelo ${modelo}`}
                  className="product-image"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-semibold">
                      {producto.caracteristicasGenerales?.producto_nombre || "Sin nombre"}
                    </h5>
                    <p className="card-text text-muted">
                      <strong>{producto.caracteristicasGenerales.tipo || "N/A"}</strong>
                    </p>
                  </div>
                  <button
                    className="btn btn-producto mt-3"
                    onClick={() => navigate(`/productos/${producto.id}`)}
                  >
                    Saber más
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
