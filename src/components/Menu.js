import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/sumadora">Sumadora</Link></li>
        <li><Link to="/traductor">Traductor</Link></li>
        <li><Link to="/tabla">Tabla de Multiplicar</Link></li>
        <li><Link to="/experiencia">Experiencia</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
