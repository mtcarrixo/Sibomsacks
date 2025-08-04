import "../components/PiePagina.css";
import { FaPhoneAlt, FaMobileAlt, FaEnvelope, FaClock } from "react-icons/fa";

function PiePagina() {
  return (
    <footer className="footer">
      <div className="container text-white py-4">
        <div className="row text-center justify-content-center g-4 small-footer">
          {/* Teléfono fijo */}
          <div className="col-6 col-md-3">
            <FaPhoneAlt className="icono-footer" />
            <h6 className="fw-bold mt-2">Teléfono fijo</h6>
            <p className="mb-0">(011) 9988-7766</p>
          </div>

          {/* Teléfono móvil */}
          <div className="col-6 col-md-3">
            <FaMobileAlt className="icono-footer" />
            <h6 className="fw-bold mt-2">Móvil</h6>
            <p className="mb-0">(011) 1234-5678</p>
            <p className="mb-0">(011) 8765-4321</p>
          </div>

          {/* Email */}
          <div className="col-6 col-md-3">
            <FaEnvelope className="icono-footer" />
            <h6 className="fw-bold mt-2">E-mail</h6>
            <p className="mb-0">contacto@empresaindustrial.com</p>
            <p className="mb-0">logistica@empresaindustrial.com</p>
          </div>

          {/* Horario */}
          <div className="col-6 col-md-3">
            <FaClock className="icono-footer" />
            <h6 className="fw-bold mt-2">Horario</h6>
            <p className="mb-0">Lunes a Viernes</p>
            <p className="mb-0">8:00 a 17:30 hs.</p>
          </div>
        </div>
      </div>

      <div className="footer-copy text-center mt-3">
        <p className="mb-0 small">© 2025 Empresa Industrial SRL. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default PiePagina;
