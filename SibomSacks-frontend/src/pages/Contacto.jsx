import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    empresa: "",
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    mensaje: "",
    id_provincia: "",
    id_sector: "",
  });

  const [provincias, setProvincias] = useState([]);
  const [sectores, setSectores] = useState([]);
  const [enviando, setEnviando] = useState(false);
  const [mensajeEstado, setMensajeEstado] = useState(null);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const [resProvincias, resSectores] = await Promise.all([
          axios.get("http://localhost:3000/provincias"),
          axios.get("http://localhost:3000/sectores"),
        ]);
        setProvincias(resProvincias.data);
        setSectores(resSectores.data);
      } catch (error) {
        console.error("Error al cargar provincias o sectores", error);
      }
    };
    fetchDatos();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensajeEstado(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/contacto",
        formData
      );
      setMensajeEstado({
        tipo: "exito",
        texto: "Mensaje enviado correctamente.",
      });
      setFormData({
        empresa: "",
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
        mensaje: "",
        id_provincia: "",
        id_sector: "",
      });
    } catch (error) {
      console.error(error);
      setMensajeEstado({
        tipo: "error",
        texto: "Hubo un error al enviar el mensaje.",
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="container py-5 contacto-page">
      <h2 className="mb-3 text-white text-center">
        Contáctenos, envíenos su especificación y solicite su presupuesto o
        información detallada.
      </h2>
      <p className="mb-4 text-white text-center">
        Gracias a nuestra experiencia demostrada, garantizamos a nuestros
        clientes el diseño, producción y entrega de cualquier Big Bag que puedan
        necesitar para sus propósitos.
      </p>

      <div className="d-flex justify-content-center mb-4">
        <h2 className="titulo-formulario">Formulario de Contacto</h2>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Empresa */}
        <div className="mb-3">
          <label className="form-label">Empresa</label>
          <input
            type="text"
            name="empresa"
            className="form-control"
            value={formData.empresa}
            onChange={handleChange}
          />
        </div>

        {/* Nombre y Apellido */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Apellido</label>
            <input
              type="text"
              name="apellido"
              className="form-control"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Correo y Teléfono */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              name="correo"
              className="form-control"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              className="form-control"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Provincia y Sector */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Provincia</label>
            <select
              name="id_provincia"
              className="form-select"
              value={formData.id_provincia}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar provincia</option>
              {provincias.map((provincia) => (
                <option key={provincia.id} value={provincia.id}>
                  {provincia.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Sector</label>
            <select
              name="id_sector"
              className="form-select"
              value={formData.id_sector}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar sector</option>
              {sectores.map((sector) => (
                <option key={sector.id} value={sector.id}>
                  {sector.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mensaje */}
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            name="mensaje"
            className="form-control"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Estado del mensaje */}
        {mensajeEstado && (
          <div
            className={`alert alert-${
              mensajeEstado.tipo === "exito" ? "success" : "danger"
            }`}
          >
            {mensajeEstado.texto}
          </div>
        )}

        {/* Botón */}
        <button type="submit" className="btn btn-primary" disabled={enviando}>
          {enviando ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </main>
  );
}

export default Contacto;
