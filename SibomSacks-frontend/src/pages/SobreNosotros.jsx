import React from "react";
import { FaMapMarkerAlt, FaIndustry, FaUsers, FaBoxOpen } from "react-icons/fa";
import "./SobreNosotros.css";

const SobreNosotros = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-white py-5">
        <div className="container">
          <div className="row align-items-center h-100">
            <div className="col-lg-8 d-flex flex-column justify-content-center" style={{ minHeight: "300px" }}>
              <h1 className="display-5 fw-bold mb-3">
                Más de una década ofreciendo soluciones confiables en Big Bags,
              </h1>
              <p className="lead">
                con la calidad y resistencia que su negocio necesita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-md-4 col-sm-6 mb-4">
              <h2 className="display-4 fw-bold text-primary">15</h2>
              <p className="text-muted">Años de experiencia</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <h2 className="display-4 fw-bold text-primary">65</h2>
              <p className="text-muted">Clientes satisfechos</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <h2 className="display-4 fw-bold text-primary">30+</h2>
              <p className="text-muted">Profesionales capacitados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Tarjeta 1 */}
            <div className="col-md-6">
              <div className="feature-card p-4 h-100 rounded shadow-sm">
                <h3 className="h5 text-primary mb-3 d-flex align-items-center">
                  <FaMapMarkerAlt className="me-2" /> Siempre cerca
                </h3>
                <p className="text-muted mb-0">
                  Estamos a su disposición para ofrecerle soluciones de embalaje adaptadas a sus necesidades.
                </p>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="col-md-6">
              <div className="feature-card p-4 h-100 rounded shadow-sm">
                <h3 className="h5 text-primary mb-3 d-flex align-items-center">
                  <FaIndustry className="me-2" /> Instalaciones de producción
                </h3>
                <p className="text-muted mb-0">
                  Contamos con instalaciones de producción propias y alianzas comerciales a largo plazo.
                </p>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="col-md-6">
              <div className="feature-card p-4 h-100 rounded shadow-sm">
                <h3 className="h5 text-primary mb-3 d-flex align-items-center">
                  <FaUsers className="me-2" /> Las mejores personas
                </h3>
                <p className="text-muted mb-0">
                  Trabajamos con un equipo de profesionales altamente capacitados y comprometidos con la calidad.
                </p>
              </div>
            </div>

            {/* Tarjeta 4 */}
            <div className="col-md-6">
              <div className="feature-card p-4 h-100 rounded shadow-sm">
                <h3 className="h5 text-primary mb-3 d-flex align-items-center">
                  <FaBoxOpen className="me-2" /> Embalaje de calidad
                </h3>
                <p className="text-muted mb-0">
                  Ofrecemos soluciones de embalaje de alta calidad y resistencia, adaptadas a las necesidades de su negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;
