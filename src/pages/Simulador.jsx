import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Simulador() {
  return (
    <>
      <Navbar />

      <div className="page-wrapper simulador-full">
        <div className="simulador-content">

          {/* Título (banner) */}
          <h1>Simulador de Crédito</h1>

          {/* Contenedor centrado */}
          <div className="simulador-box">

            {/* Tipo de crédito */}
            <label>Tipo de crédito</label>
            <select>
              <option value="">Seleccione una opción</option>
              <option value="libre">Crédito de Libre Inversión</option>
              <option value="vehiculo">Crédito Vehicular</option>
              <option value="vivienda">Crédito de Vivienda</option>
              <option value="educativo">Crédito Educativo</option>
            </select>

            {/* Monto */}
            <label>Monto solicitado</label>
            <input type="number" placeholder="Ej: 500000" />

            {/* Plazo */}
            <label>Plazo disponible (meses)</label>
            <select>
              <option value="">Seleccione un plazo</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
              <option value="36">36 meses</option>
              <option value="48">48 meses</option>
            </select>

            {/* Tasa */}
            <label>Tasa de interés (%)</label>
            <input type="number" placeholder="Ej: 1.2" />

            <button className="btn">Calcular</button>

            <div className="resultado">
              <h3>Resultado</h3>
              <p>Total a pagar: $0</p>
              <p>Cuota mensual: $0</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
