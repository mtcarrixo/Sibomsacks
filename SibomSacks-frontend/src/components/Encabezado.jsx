import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Encabezado.css";
import logo from "../assets/images/icono.png";

function Encabezado() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo a la izquierda */}
        <div className="navbar__left">
          <Link to="/" className="navbar__logo" onClick={cerrarMenu}>
            <img src={logo} alt="Sibom Sacks Logo" />
            <span className="navbar__brand">SIBOM SACKS</span>
          </Link>
        </div>

        {/* Botón hamburguesa a la derecha */}
        <div className="navbar__right">
          <button className="navbar__toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        {/* Menú: va fuera de navbar__right */}
        <nav className={`navbar__menu ${menuAbierto ? "show" : ""}`}>
          <NavLink to="/" end onClick={cerrarMenu}>
            Inicio
          </NavLink>
          <NavLink to="/sobre-nosotros" onClick={cerrarMenu}>
            Sobre Nosotros
          </NavLink>
          <NavLink to="/productos" onClick={cerrarMenu}>
            Productos
          </NavLink>
          <NavLink to="/beneficios" onClick={cerrarMenu}>
            Beneficios
          </NavLink>
          <NavLink to="/contacto" onClick={cerrarMenu}>
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Encabezado;
