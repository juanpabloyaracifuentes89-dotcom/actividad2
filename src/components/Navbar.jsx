import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="BarraNav">
      <div className="contenedor">
        <h1 className="logo">💳 CreditSmart</h1>

        <ul className="menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/simulador">Simulador</Link></li>
          <li><Link to="/solicitar">Solicitar Crédito</Link></li>
        </ul>
      </div>
    </nav>
  );
}
