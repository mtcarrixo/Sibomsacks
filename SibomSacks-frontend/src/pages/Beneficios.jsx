import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Beneficios = () => {
  const navigate = useNavigate();

  const porque = [
    "Alta resistencia y durabilidad",
    "Versatilidad en almacenamiento y transporte",
    "Optimización del espacio aplicable",
    "Reducción de costos operativos",
    "Seguridad y protección de productos",
    "Sostenibilidad y bajo impacto ambiental",
    "Facilidad de apilamiento",
    "Mayor eficiencia logística",
    "Compatible con diferentes tipos de carga"
  ];

  const ventajas = [
    "Embalaje rentable",
    "Fácil de manejar: optimiza la logística",
    "Cumple con los más altos estándares higiénicos para aplicaciones alimentarias y farmacéuticas",
    "Soporta hasta mil veces su propio peso",
    "No requiere embalajes secundarios",
    "Bajo peso y volumen mínimo: ahorra espacio de almacenamiento",
    "Puede usarse como promoción móvil o para información de productos",
    "Minimiza desperdicios",
    "Reciclable y reacondicionable",
    "Personalizable según sus requisitos específicos"
  ];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row">
          {/* Columna izquierda */}
          <div className="col-lg-4 mb-4">
            <h2 className="mb-4" style={{ color: "#004AAD" }}>¿Por qué Big Bags?</h2>

            {porque.map((item, idx) => (
              <div key={idx} className="d-flex align-items-center mb-3">
                <FaCheckCircle className="me-2" style={{ color: "#FFD500" }} />
                <span>{item}</span>
              </div>
            ))}

            {/* CTA */}
            <div className="p-4 mt-4 rounded text-white" style={{ backgroundColor: "#004AAD" }}>
              <h5 className="fw-bold">Póngase en contacto con nosotros</h5>
              <p className="small mt-2 mb-3">
                “Tenemos una amplia experiencia en ayudar a empresas a encontrar la mejor solución de embalaje para sus necesidades.”
              </p>
              <button
                className="btn w-100"
                style={{ backgroundColor: "#FFD500", color: "black", fontWeight: "bold" }}
                onClick={() => navigate("/contacto")}
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="col-lg-8">
            <h2 className="mb-4" style={{ color: "#004AAD" }}>Ventajas del big bag</h2>
            <p className="mb-4 text-muted">
              Los Big Bags son la solución eficiente y segura para transportar grandes volúmenes, reduciendo costos logísticos y optimizando espacio. Su versatilidad los hace ideales para diversas industrias, garantizando protección, reutilización y cuidado del medio ambiente.
            </p>

            <div className="row g-3">
              {ventajas.map((ventaja, index) => (
                <div key={index} className="col-md-6">
                  <div
                    className="d-flex align-items-center p-3 rounded h-100"
                    style={{
                      backgroundColor: "#e9ecef",
                      minHeight: "80px"
                    }}
                  >
                    <FaCheckCircle className="me-2 flex-shrink-0" style={{ color: "#004AAD" }} />
                    <span className="flex-grow-1">{ventaja}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
