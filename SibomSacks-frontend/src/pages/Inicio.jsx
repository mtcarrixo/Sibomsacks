import React from "react";
import "./Inicio.css";

function Inicio() {
  return (
    <main>
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Texto a la izquierda */}
            <div className="col-md-6 text-white">
              <h1 className="display-6 fw-bold">
                Más de una década ofreciendo soluciones confiables en Big Bags.
              </h1>
              <p className="lead mt-3">
                Con la calidad y resistencia que su negocio necesita.
              </p>
            </div>

            {/* Carrusel a la derecha */}
            <div className="col-md-6">
              <div
                id="heroCarousel"
                className="carousel slide hero-carousel"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner rounded shadow">
                  <div className="carousel-item active">
                    <img
                      src="/images/slide1.png"
                      className="d-block w-100 carousel-img"
                      alt="Imagen 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/images/slide2.png"
                      className="d-block w-100 carousel-img"
                      alt="Imagen 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/images/slide3.png"
                      className="d-block w-100 carousel-img"
                      alt="Imagen 3"
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" />
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" />
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards informativas */}
      <section className="informacion py-5 text-center">
        <h4>
          Big Bags resistentes y duraderos para optimizar su empresa con máxima
          calidad y seguridad.
        </h4>
        <div className="imagenes-contenedor d-flex justify-content-center flex-wrap gap-4 mt-4">
          <div className="imagen-item shadow">
            <img src="/images/agricultura.jpg" alt="Agricultura" />
            <div className="info">
              <h5>Agricultura</h5>
              <p>
                Transportá tu cosecha con Big Bags ideales para semillas y
                fertilizantes.
              </p>
            </div>
          </div>
          <div className="imagen-item shadow">
            <img src="/images/industry.jpg" alt="Industria" />
            <div className="info">
              <h5>Industria</h5>
              <p>Big Bags duraderos y versátiles para materiales a granel.</p>
            </div>
          </div>
          <div className="imagen-item shadow">
            <img src="/images/mineria.jpg" alt="Minería" />
            <div className="info">
              <h5>Minería</h5>
              <p>Seguros y resistentes, ideales para grandes cargas mineras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos de clientes */}
      <section className="Empresas py-5">
        <h4 className="text-center mb-4">Empresas que confían en nosotros</h4>
        <div className="Empresas-Content d-flex flex-wrap justify-content-center gap-4 align-items-center">
          <div className="empresa-item normal">
            <img src="/images/egran.png" alt="Egran" />
          </div>
          <div className="empresa-item semi-destacada">
            <img src="/images/caima.png" alt="Caima" />
          </div>
          <div className="empresa-item semi-destacada">
            <img src="/images/plasticosbv.png" alt="Plásticos BV" />
          </div>
          <div className="empresa-item destacada">
            <img src="/images/pirquitas.jpeg" alt="Pirquitas" />
          </div>
          <div className="empresa-item destacada">
            <img src="/images/biofarma.jpg" alt="Biofarma" />
          </div>
          <div className="empresa-item semi-destacada">
            <img src="/images/donadelmo.png" alt="Don Adelmo" />
          </div>
          <div className="empresa-item semi-destacada">
            <img src="/images/tapi.png" alt="Tapi" />
          </div>
          <div className="empresa-item normal">
            <img src="/images/cerrito.png" alt="Cerrito" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Inicio;
