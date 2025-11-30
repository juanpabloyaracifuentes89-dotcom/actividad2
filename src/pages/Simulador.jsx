import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Simulador() {
  // --- Estados del componente ---
  const [tipo, setTipo] = useState(""); // Tipo de crédito seleccionado
  const [plazosDisponibles, setPlazosDisponibles] = useState([]); // Plazos de meses disponibles
  const [tasaInteres, setTasaInteres] = useState(""); // Tasa de interés automática
  const [montoMinimo, setMontoMinimo] = useState(0); // Monto mínimo por tipo de crédito
  
  // Estados para el cálculo y los inputs
  const [monto, setMonto] = useState(""); // Valor actual del input de monto
  const [plazo, setPlazo] = useState(""); // Valor actual del select de plazo
  
  // Estado para mostrar los resultados y errores
  const [resultado, setResultado] = useState({ cuota: 0, total: 0, error: "" }); 

  // --- Definición de Parámetros de Crédito ---
  // Incluye: Plazo Máximo (meses), Tasa Mensual (%), Monto Mínimo (COP)
  const parametrosCredito = {
    libre: { maxPlazo: 60, tasa: 1.8, minMonto: 1000000 },
    vehiculo: { maxPlazo: 72, tasa: 1.5, minMonto: 10000000 },
    vivienda: { maxPlazo: 240, tasa: 0.9, minMonto: 20000000 },
    educativo: { maxPlazo: 48, tasa: 1.2, minMonto: 2000000 },
    empresarial: { maxPlazo: 120, tasa: 1.6, minMonto: 5000000 },
    consumo: { maxPlazo: 48, tasa: 2.1, minMonto: 500000 },
  };

  // --- Manejadores de Eventos ---

  // Cuando cambia la selección del tipo de crédito
  const handleTipoChange = (value) => {
    setTipo(value);
    setResultado({ cuota: 0, total: 0, error: "" }); // Limpiar resultado al cambiar tipo

    if (value === "") {
      setPlazosDisponibles([]);
      setTasaInteres("");
      setMontoMinimo(0); 
      setMonto(""); 
      setPlazo(""); // Limpiar plazo
      return;
    }

    const { maxPlazo, tasa, minMonto } = parametrosCredito[value];
    
    setTasaInteres(tasa); 
    setMontoMinimo(minMonto);
    setMonto(minMonto); // Opcional: Establecer el valor inicial del input de monto al mínimo
    setPlazo(""); // Resetear plazo al cambiar el tipo, para que el usuario elija uno nuevo
    
    // Generar array de meses (solo múltiplos de 12 hasta el maxPlazo)
    const mesesMultiplosDe12 = [];
    for (let i = 12; i <= maxPlazo; i += 12) {
      mesesMultiplosDe12.push(i);
    }
    setPlazosDisponibles(mesesMultiplosDe12);
  };
  
  // Cuando cambia el valor del input del monto
  const handleMontoChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setMonto(value || ''); // Guardar el valor, o vacío si se borra
    setResultado({ cuota: 0, total: 0, error: "" }); // Limpiar resultado
  };

  // Cuando cambia la selección del plazo
  const handlePlazoChange = (e) => {
      setPlazo(e.target.value);
      setResultado({ cuota: 0, total: 0, error: "" }); // Limpiar resultado
  }

  // --- Lógica de Cálculo Principal ---
  const calcularCuota = () => {
    const P = parseFloat(monto); // Monto principal
    const n = parseInt(plazo); // Número de períodos (meses)
    const tasaMensualPorcentual = parseFloat(tasaInteres); // Tasa en porcentaje (e.g., 1.8)

    // 1. Validación de entradas
    if (!P || isNaN(P) || !n || isNaN(n) || !tasaMensualPorcentual || isNaN(tasaMensualPorcentual) || P < montoMinimo) {
        setResultado({ 
            cuota: 0, 
            total: 0, 
            error: "Debe seleccionar Tipo de Crédito y Plazo, e ingresar un Monto válido (superior o igual al mínimo)." 
        });
        return;
    }

    // 2. Tasa de Interés Mensual (convertida a decimal)
    const i = tasaMensualPorcentual / 100; 

    // 3. Aplicar la Fórmula de Amortización Francesa
    const factor = Math.pow(1 + i, n);
    const cuotaMensual = P * (i * factor) / (factor - 1);
    
    // Cálculo del total a pagar (aunque no se muestra directamente, es útil para intereses totales)
    const totalPagar = cuotaMensual * n;

    // 4. Actualizar estado con los resultados redondeados
    setResultado({
        cuota: Math.round(cuotaMensual),
        total: Math.round(totalPagar), // Mantener el total para el cálculo de intereses
        error: ""
    });
  };

  // --- Función de Formato de Moneda ---
  const formatCurrency = (number) => {
    if (isNaN(number)) return ''; // Asegurarse de que no formatee NaN
    return new Intl.NumberFormat('es-CO', { // Formato para Colombia (ajusta si es otro país)
        style: 'currency',
        currency: 'COP', // Peso Colombiano (ajusta a tu moneda, e.g., USD, EUR)
        minimumFractionDigits: 0, // Sin decimales para montos grandes
        maximumFractionDigits: 0
    }).format(number);
  };

  // --- Renderizado del Componente ---
  return (
    <>
      <Navbar />

      {/* Contenedor principal de la página del simulador */}
      {/* Usar 'contenedor-full-width' si necesitas que el simulador ocupe todo el ancho, 
          de lo contrario, podrías usar la clase 'contenedor' original si prefieres que se centre. */}
      <div className="page-wrapper simulador-full"> {/* Mantengo tu clase actual */}
        <div className="simulador-content"> {/* Asegúrate de que esta clase o su padre manejen el ancho */}
          <h1>Simula tu Crédito 💳</h1>

          <div className="simulador-box"> {/* Este es el contenedor blanco del formulario */}

            {/* Selector de Tipo de Crédito */}
            <label>Tipo de crédito</label>
            <select onChange={(e) => handleTipoChange(e.target.value)} value={tipo}>
              <option value="">Seleccione una opción</option>
              <option value="libre">Crédito de Libre Inversión</option>
              <option value="vehiculo">Crédito Vehicular</option>
              <option value="vivienda">Crédito de Vivienda</option>
              <option value="educativo">Crédito Educativo</option>
              <option value="empresarial">Crédito Empresarial</option>
              <option value="consumo">Crédito de Consumo</option>
            </select>

            {/* Input de Monto Solicitado */}
            <label>Monto solicitado</label>
            <input 
              type="number" 
              placeholder={`Mínimo: ${formatCurrency(montoMinimo)}`}
              value={monto} // Enlazado al estado 'monto'
              onChange={handleMontoChange}
              min={montoMinimo} // Restricción HTML del monto mínimo
            />

            {/* Selector de Plazo Disponible */}
            <label>Plazo disponible (meses)</label>
            <select 
                onChange={handlePlazoChange} 
                value={plazo} // Enlazado al estado 'plazo'
                disabled={plazosDisponibles.length === 0} // Deshabilitado si no hay opciones
            >
              <option value="">Seleccione un plazo</option>

              {plazosDisponibles.map((mes) => (
                <option key={mes} value={mes}>
                  {mes} meses
                </option>
              ))}
            </select>

            {/* Input de Tasa de Interés (Automática y de solo lectura) */}
            <label>Tasa de interés (%)</label>
            <input 
              type="text" // Tipo texto para mostrar el "% Mensual"
              placeholder="Tasa automática"
              value={tasaInteres ? `${tasaInteres} % Mensual` : ''} 
              readOnly // No permite edición manual
            />

            {/* Botón de Cálculo */}
            <button className="btn" onClick={calcularCuota}>Calcular</button>

            {/* Bloque de Resultado de la Simulación */}
            <div className="resultado">
              <h3>Resultado de la Simulación</h3>
              {/* Mostrar errores si existen */}
              {resultado.error && <p style={{ color: 'red', fontWeight: 'bold' }}>{resultado.error}</p>}
              
              {/* Mostrar resultados si se han calculado exitosamente */}
              {!resultado.error && resultado.cuota > 0 && (
                <>
                  <p>Cuota mensual fija: **{formatCurrency(resultado.cuota)}**</p>
                  <p style={{ fontSize: '0.9em', color: '#555' }}>
                    Intereses totales: {formatCurrency(resultado.total - monto)}
                  </p>
                </>
              )}
               {/* Mensaje inicial si no hay resultados */}
               {!resultado.cuota && !resultado.error && <p style={{color: '#888'}}>Seleccione los parámetros y presione "Calcular".</p>}
            </div>

          </div> {/* Cierre de simulador-box */}
        </div> {/* Cierre de simulador-content */}
      </div> {/* Cierre de page-wrapper */}

      <Footer />
    </>
  );
}
