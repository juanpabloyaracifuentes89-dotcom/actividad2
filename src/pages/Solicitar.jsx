import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Solicitar() {
  return (
    <>
      <Navbar />

      <div className="solicitar-wrapper">

        {/* Banner arriba */}
        <section className="banner-solicitud">
          <img src="/img/solicitud.jpg" alt="Banner de solicitud de crédito" />
        </section>

        {/* Contenido centrado debajo del banner */}
        <main className="solicitar-main">
          <h2 className="titulo-formulario">Formulario de Solicitud</h2>
          <p className="subtitulo-formulario">
            Completa la información para iniciar tu solicitud de crédito.
          </p>

          <form className="formulario-solicitud">

            {/* DATOS PERSONALES */}
            <section className="bloque-formulario">
              <h3>Datos Personales</h3>

              <label htmlFor="nombre">Nombre completo</label>
              <input type="text" id="nombre" required />

              <label htmlFor="cedula">Cédula</label>
              <input type="text" id="cedula" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />

              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" id="telefono" required />
            </section>

            {/* DATOS LABORALES */}
            <section className="bloque-formulario">
              <h3>Datos Laborales</h3>

              <label htmlFor="empresa">Empresa donde trabaja</label>
              <input type="text" id="empresa" required />

              <label htmlFor="cargo">Cargo</label>
              <input type="text" id="cargo" required />

              <label htmlFor="ingresos">Ingresos mensuales</label>
              <input
                type="number"
                id="ingresos"
                min="0"
                step="1000"
                placeholder="Ejemplo: 2500000"
                required
              />
            </section>

            {/* INFORMACIÓN DEL CRÉDITO */}
            <section className="bloque-formulario">
              <h3>Información del Crédito</h3>

              <label htmlFor="tipoCredito">Tipo de crédito</label>
              <select id="tipoCredito" required>
                <option value="">-- Selecciona una opción --</option>
                <option value="libre-inversion">Libre Inversión</option>
                <option value="vehiculo">Vehículo</option>
                <option value="vivienda">Vivienda</option>
                <option value="educativo">Educativo</option>
                <option value="empresarial">Empresarial</option>
                <option value="consumo">Consumo</option>
              </select>

              <label htmlFor="monto">Monto solicitado</label>
              <input
                type="number"
                id="monto"
                min="0"
                step="100000"
                placeholder="Ejemplo: 10000000"
                required
              />

              <label htmlFor="plazo">Plazo en meses</label>
              <input type="number" id="plazo" min="1" max="240" required />
            </section>

            <button type="submit" className="btn-enviar">
              Enviar Solicitud
            </button>
          </form>
        </main>
      </div>

      <Footer />
    </>
  );
}
