// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="BarraNav">
      <div className="contenedor">
        <h1 className="logo">💳 CreditSmart</h1>
        <ul className="menu">
          <li><NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink></li>
          <li><NavLink to="/simulador" className={({isActive}) => isActive ? "active" : ""}>Simulador</NavLink></li>
          <li><NavLink to="/solicitar" className={({isActive}) => isActive ? "active" : ""}>Solicitar Crédito</NavLink></li>
          <li><NavLink to="/solicitudes" className={({ isActive }) => isActive ? "active" : "" }>Solicitudes</NavLink></li>

        </ul>
      </div>
    </nav>
  );
}
