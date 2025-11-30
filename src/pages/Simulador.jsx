import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Simulador() {
  // --- Estados del componente ---
  const [tipo, setTipo] = useState("");
  const [plazosDisponibles, setPlazosDisponibles] = useState([]);
  const [tasaInteres, setTasaInteres] = useState("");
  const [montoMinimo, setMontoMinimo] = useState(0); 
  const [montoMaximo, setMontoMaximo] = useState(0); 
  
  // Estados para el cálculo y los inputs
  const [monto, setMonto] = useState(""); // Valor actual del input de monto (Inicialmente vacío)
  const [plazo, setPlazo] = useState(""); 
  
  // Estado para mostrar los resultados y errores
  const [resultado, setResultado] = useState({ cuota: 0, total: 0, error: "" }); 

  // --- Definición de Parámetros de Crédito ---
  const parametrosCredito = {
    // maxPlazo (meses), tasa (%), minMonto (COP), maxMonto (COP)
    libre: { maxPlazo: 60, tasa: 1.8, minMonto: 1000000, maxMonto: 30000000 },
    vehiculo: { maxPlazo: 72, tasa: 1.5, minMonto: 10000000, maxMonto: 80000000 },
    vivienda: { maxPlazo: 240, tasa: 0.9, minMonto: 20000000, maxMonto: 500000000 },
    educativo: { maxPlazo: 48, tasa: 1.2, minMonto: 2000000, maxMonto: 40000000 },
    empresarial: { maxPlazo: 120, tasa: 1.6, minMonto: 5000000, maxMonto: 150000000 },
    consumo: { maxPlazo: 48, tasa: 2.1, minMonto: 500000, maxMonto: 20000000 },
  };

  // --- Manejadores de Eventos ---

  // Cuando cambia la selección del tipo de crédito
  const handleTipoChange = (value) => {
    setTipo(value);
    setResultado({ cuota: 0, total: 0, error: "" });

    if (value === "") {
      setPlazosDisponibles([]);
      setTasaInteres("");
      setMontoMinimo(0); 
      setMontoMaximo(0);
      setMonto(""); // ¡Importante: se mantiene vacío!
      setPlazo(""); 
      return;
    }

    const { maxPlazo, tasa, minMonto, maxMonto } = parametrosCredito[value];
    
    setTasaInteres(tasa); 
    setMontoMinimo(minMonto);
    setMontoMaximo(maxMonto);
    setMonto(""); // ¡Importante: NO pre-llenar, dejar vacío!
    setPlazo(""); 
    
    // Generar array de meses (solo múltiplos de 12)
    const mesesMultiplosDe12 = [];
    for (let i = 12; i <= maxPlazo; i += 12) {
      mesesMultiplosDe12.push(i);
    }
    setPlazosDisponibles(mesesMultiplosDe12);
  };
  
  // Cuando cambia el valor del input del monto
  const handleMontoChange = (e) => {
    const value = parseInt(e.target.value, 10);
    // Nota: La restricción MAX y MIN se aplica principalmente por el atributo 'max' y 'min' en el HTML, 
    // y la validación en `calcularCuota`. Aquí solo evitamos que se escriba un valor mayor si es necesario.
    setMonto(value || ''); 
    setResultado({ cuota: 0, total: 0, error: "" });
  };

  // Cuando cambia la selección del plazo
  const handlePlazoChange = (e) => {
      setPlazo(e.target.value);
      setResultado({ cuota: 0, total: 0, error: "" });
  }

  // --- Lógica de Cálculo Principal ---
  const calcularCuota = () => {
    const P = parseFloat(monto); 
    const n = parseInt(plazo); 
    const tasaMensualPorcentual = parseFloat(tasaInteres); 
    
    // 1. Validación de entradas
    if (!P || isNaN(P) || !n || isNaN(n) || !tasaMensualPorcentual || isNaN(tasaMensualPorcentual) || P < montoMinimo || P > montoMaximo) {
        let errorMsg = "Debe seleccionar Tipo de Crédito y Plazo, e ingresar un Monto válido. ";
        if (P < montoMinimo) errorMsg = `El monto debe ser al menos ${formatCurrency(montoMinimo)}.`;
        if (P > montoMaximo) errorMsg = `El monto no puede superar ${formatCurrency(montoMaximo)}.`;
        if (!tipo || !plazo || !P) errorMsg = "Debe completar todos los campos de selección y monto.";

        setResultado({ 
            cuota: 0, 
            total: 0, 
            error: errorMsg
        });
        return;
    }

    // 2. Tasa de Interés Mensual (convertida a decimal)
    const i = tasaMensualPorcentual / 100; 

    // 3. Aplicar la Fórmula de Amortización Francesa
    const factor = Math.pow(1 + i, n);
    const cuotaMensual = P * (i * factor) / (factor - 1);
    
    const totalPagar = cuotaMensual * n;

    // 4. Actualizar estado con los resultados redondeados
    setResultado({
        cuota: Math.round(cuotaMensual),
        total: Math.round(totalPagar),
        error: ""
    });
  };

  // --- Función de Formato de Moneda ---
  const formatCurrency = (number) => {
    if (isNaN(number)) return '';
    return new Intl.NumberFormat('es-CO', { 
        style: 'currency',
        currency: 'COP', 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0
    }).format(number);
  };

  // --- Renderizado del Componente ---
  return (
    <>
      <Navbar />

      <div className="page-wrapper simulador-full"> 
        <div className="simulador-content"> 
          <h1>Simula tu Crédito 💳</h1>

          <div className="simulador-box"> 

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
              // Placeholder modificado para mostrar el rango
              placeholder={`Mín: ${formatCurrency(montoMinimo)} | Máx: ${formatCurrency(montoMaximo)}`}
              value={monto} // Enlazado al estado 'monto' (que ahora se inicializa en vacío)
              onChange={handleMontoChange}
              min={montoMinimo} 
              max={montoMaximo} 
            />

            {/* Selector de Plazo Disponible */}
            <label>Plazo disponible (meses)</label>
            <select 
                onChange={handlePlazoChange} 
                value={plazo} 
                disabled={plazosDisponibles.length === 0}
            >
              <option value="">Seleccione un plazo</option>

              {plazosDisponibles.map((mes) => (
                <option key={mes} value={mes}>
                  {mes} meses
                </option>
              ))}
            </select>

            {/* Input de Tasa de Interés */}
            <label>Tasa de interés (%)</label>
            <input 
              type="text" 
              placeholder="Tasa automática"
              value={tasaInteres ? `${tasaInteres} % Mensual` : ''} 
              readOnly 
            />

            {/* Botón de Cálculo */}
            <button className="btn" onClick={calcularCuota}>Calcular</button>

            {/* Bloque de Resultado de la Simulación */}
            <div className="resultado">
              <h3>Resultado de la Simulación</h3>
              
              {resultado.error && <p style={{ color: 'red', fontWeight: 'bold' }}>{resultado.error}</p>}
              
              {!resultado.error && resultado.cuota > 0 && (
                <>
                  <p>Cuota mensual fija: **{formatCurrency(resultado.cuota)}**</p>
                  <p style={{ fontSize: '0.9em', color: '#555' }}>
                    Intereses totales: {formatCurrency(resultado.total - monto)}
                  </p>
                </>
              )}
               {!resultado.cuota && !resultado.error && <p style={{color: '#888'}}>Seleccione los parámetros y presione "Calcular".</p>}
            </div>

          </div> 
        </div> 
      </div> 

      <Footer />
    </>
  );
}