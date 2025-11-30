import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Navegación */}
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

      {/* Carrusel */}
      <div className="carrusel">
        <div className="slides">
          <img src="/img/imagen1.jpg" alt="Crédito De Libre Inversión" />
          <img src="/img/imagen2.jpg" alt="Crédito Vehiculo" />
          <img src="/img/imagen3.jpg" alt="Crédito Vivienda" />
          <img src="/img/imagen4.jpg" alt="Crédito Educativo" />
          <img src="/img/imagen5.jpg" alt="Crédito Empresarial" />
          <img src="/img/imagen6.jpg" alt="Crédito De Consumo" />

          {/* IMÁGENES DUPLICADAS */}
          <img src="/img/imagen1.jpg" alt="Crédito De Libre Inversión" />
          <img src="/img/imagen2.jpg" alt="Crédito Vehiculo" />
          <img src="/img/imagen3.jpg" alt="Crédito Vivienda" />
          <img src="/img/imagen4.jpg" alt="Crédito Educativo" />
          <img src="/img/imagen5.jpg" alt="Crédito Empresarial" />
          <img src="/img/imagen6.jpg" alt="Crédito De Consumo" />
        </div>
      </div>

      {/* Banner */}
      <header className="Banner">
        <div className="contenedor">
          <h2>Encuentra Tu Crédito Aquí</h2>
          <p>
            Descubre las mejores opciones de financiamiento adaptadas a tus
            necesidades. En CreditSmart te ayudamos a comparar y solicitar el
            crédito ideal, con tasas competitivas, plazos flexibles y la
            seguridad que necesitas para cumplir tus metas financieras.
          </p>
        </div>
      </header>

      {/* Productos */}
      <main className="contenedor">
        <section className="creditos-seccion">
          <h3>Nuestras Opciones De Créditos</h3>

          <div className="red-creditos">

            {/* Crédito #1 */}
            <div className="credit-card">
              <div className="card-header">
                <span className="icon">💵</span>
                <h4>Crédito De Libre Inversión</h4>
              </div>
              <p>
                Utiliza este crédito para cualquier necesidad personal, desde
                viajes y estudios hasta remodelaciones. Tú decides cómo usar el
                dinero.
              </p>

              <div className="detail">
                <div className="detail-item">
                  <span className="label">Tasa De Interés:</span>
                  <span className="value highlight">1.8% Mensual</span>
                </div>
                <div className="detail-item">
                  <span className="label">Monto:</span>
                  <span className="value">$1M - $30M</span>
                </div>
                <div className="detail-item">
                  <span className="label">Plazo:</span>
                  <span className="value">Hasta 60 Meses</span>
                </div>
              </div>

              <button className="btn-primary">Solicitar Crédito</button>
            </div>

            {/* Crédito #2 */}
            <div className="credit-card">
              <div className="card-header">
                <span className="icon">🚘</span>
                <h4>Crédito Vehículo</h4>
              </div>
              <p>
                Adquiere el carro que siempre soñaste con tasas favorables y
                plazos cómodos. Financia vehículos nuevos o usados sin
                complicaciones.
              </p>

              <div className="detail">
                <div className="detail-item">
                  <span className="label">Tasa De Interés:</span>
                  <span className="value highlight">1.5% Mensual</span>
                </div>
                <div className="detail-item">
                  <span className="label">Monto:</span>
                  <span className="value">$10M - $80M</span>
                </div>
                <div className="detail-item">
                  <span className="label">Plazo:</span>
                  <span className="value">Hasta 84 Meses</span>
                </div>
              </div>

              <button className="btn-primary">Solicitar Crédito</button>
            </div>

            {/* Crédito #3 */}
            <div className="credit-card">
              <div className="card-header">
                <span className="icon">🏘️</span>
                <h4>Crédito Vivienda</h4>
              </div>
              <p>
                Haz realidad el sueño de tener casa propia. Accede a montos
                altos y largos plazos para comprar, construir o mejorar tu
                vivienda.
              </p>

              <div className="detail">
                <div className="detail-item">
                  <span className="label">Tasa De Interés:</span>
                  <span className="value highlight">0.9% Mensual</span>
                </div>
                <div className="detail-item">
                  <span className="label">Monto:</span>
                  <span className="value">$20M - $500M</span>
                </div>
                <div className="detail-item">
                  <span className="label">Plazo:</span>
                  <span className="value">Hasta 240 Meses</span>
                </div>
              </div>

              <button className="btn-primary">Solicitar Crédito</button>
            </div>

            {/* Crédito #4 */}
            <div className="credit-card">
              <div className="card-header">
                <span className="icon">📚</span>
                <h4>Crédito Educativo</h4>
              </div>
              <p>
                Invierte en tu futuro con un crédito educativo. Financia tu
                carrera o la de tus hijos con tasas preferenciales y plazos
                cómodos.
              </p>

              <div className="detail">
                <div className="detail-item">
                  <span className="label">Tasa De Interés:</span>
                  <span className="value highlight">1.2% Mensual</span>
                </div>
                <div className="detail-item">
                  <span className="label">Monto:</span>
                  <span className="value">$2M - $40M</span>
                </div>
                <div className="detail-item">
                  <span className="label">Plazo:</span>
                  <span className="value">Hasta 72 Meses</span>
                </div>
              </div>

              <button className="btn-primary">Solicitar Crédito</button>
            </div>

            {/* Crédito #5 */}
            <div className="credit-card">
              <div className="card-header">
                <span className="icon">🏛️</span>
                <h4>Crédito Empresarial</h4>
              </div>
              <p>
                Impulsa el crecimiento de tu negocio con capital para invertir
                en maquinaria, expansión o capital de trabajo. Diseñado para
                pymes y emprendedores.
              </p>

              <div className="detail">
                <div className="detail-item">
                  <span className="label">Tasa De Interés:</span>
                  <span className="value highlight">1.6% Mensual</span>
                </div>
                <div className="detail-item">
                  <span className="label">Monto:</span>
                  <span className="value">$5M - $150M</span>
                </div>
                <div className="detail-item">
                  <span className="label">Plazo:</span>
                  <span className="value">Hasta 120 Meses</span>
                </div>
              </div>

              <button className="btn-primary">Solicitar Crédito</button>
            </div>

            {/* Crédito #6 */}
            <div className="credit-card">
              <div className="card-header">
                <span className="icon">💳</span>
                <h4>Crédito De Consumo</h4>
              </div>
              <p>
                Cubre gastos inmediatos o compras importantes con un crédito
                ágil y flexible. Ideal para manejar tus finanzas sin afectar tu
                presupuesto.
              </p>

              <div className="detail">
                <div className="detail-item">
                  <span className="label">Tasa De Interés:</span>
                  <span className="value highlight">2.1% Mensual</span>
                </div>
                <div className="detail-item">
                  <span className="label">Monto:</span>
                  <span className="value">$500K - $20M</span>
                </div>
                <div className="detail-item">
                  <span className="label">Plazo:</span>
                  <span className="value">Hasta 48 Meses</span>
                </div>
              </div>

              <button className="btn-primary">Solicitar Crédito</button>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="contenedor">
          <div className="footer-content">
            <p>💳 CreditSmart © 2025. Todos los derechos reservados.</p>
            <ul className="footer-links">
              <li><a href="#">Política de Privacidad</a></li>
              <li><a href="#">Términos de Uso</a></li>
              <li><a href="#">Contáctanos</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
