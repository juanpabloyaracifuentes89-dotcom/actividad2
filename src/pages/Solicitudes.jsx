import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firestore";

// Definimos el componente del Modal fuera de Solicitudes
const SolicitudModal = ({ solicitud, onClose }) => {
    if (!solicitud) return null;

    // Función para formatear el monto a Pesos Colombianos (COP)
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-CO', { 
            style: 'currency', 
            currency: 'COP', // <--- CAMBIO CLAVE AQUÍ: COP
            minimumFractionDigits: 0 
        }).format(amount);
    };

    return (
        <div className="modal-backdrop">
            <div className="formulario-solicitud modal-card">
                <h3 className="modal-title">Detalle de Solicitud ({solicitud.id.substring(0, 8)})</h3>

                <div className="bloque-formulario">
                    <h3>Información General</h3>
                    <p><strong>Nombre:</strong> <span>{solicitud.nombre}</span></p>
                    <p><strong>Email:</strong> <span>{solicitud.email}</span></p>
                    <p><strong>Tipo de Crédito:</strong> <span>{solicitud.tipoCredito}</span></p>
                </div>

                <div className="bloque-formulario">
                    <h3>Detalles Financieros</h3>
                    <p><strong>Monto Solicitado:</strong> <span className="highlight">{formatCurrency(solicitud.monto)}</span></p>
                    <p><strong>Plazo (meses):</strong> <span>{solicitud.plazo || 'No especificado'}</span></p>
                    <p><strong>Ingresos Mensuales:</strong> <span>{solicitud.ingresos || 'No especificado'}</span></p>
                </div>
                
                <div className="bloque-formulario">
                    <h3>Estado y Fechas</h3>
                    <p><strong>Fecha de Solicitud:</strong> <span>{solicitud.fechaSolicitud || 'N/A'}</span></p>
                    <p><strong>Estado:</strong> <span className="highlight">{solicitud.estado || 'Pendiente'}</span></p>
                </div>

                <button className="btn-enviar" onClick={onClose}>
                    Cerrar Detalle
                </button>
            </div>
        </div>
    );
};

function Solicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedSolicitud, setSelectedSolicitud] = useState(null);

  const handleCardClick = (solicitud) => {
    setSelectedSolicitud(solicitud);
  };
  
  const handleCloseModal = () => {
    setSelectedSolicitud(null);
  };


  useEffect(() => {
    const fetchSolicitudes = async () => {
      try {
        const snapshot = await getDocs(collection(db, "solicitudes"));
        setSolicitudes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error al obtener solicitudes:", error);
      }
      setLoading(false);
    };

    fetchSolicitudes();
  }, []);


  // Función para formatear el monto a Pesos Colombianos (COP) para la tarjeta
  const formatCardCurrency = (amount) => {
      return new Intl.NumberFormat('es-CO', { 
          style: 'currency', 
          currency: 'COP', // <--- CAMBIO CLAVE AQUÍ: COP
          minimumFractionDigits: 0 
      }).format(amount);
  };

  return (
    <>
      <Navbar />

      {/* 1. HEADER/BANNER */}
      <header className="solicitudes-header">
        <div className="contenedor-header">
          <h1 className="solicitudes-title-header">Historial de Solicitudes</h1>
          <p className="solicitudes-subtitle-header">Revisa el estado y los detalles de todos los créditos solicitados.</p>
        </div>
      </header>

      {/* 2. CONTENIDO PRINCIPAL/TARJETAS */}
      <main className="solicitudes-content"> 
        <h2 className="solicitudes-section-title">Solicitudes Registradas</h2>

        {loading ? (
          <p>Cargando solicitudes...</p>
        ) : solicitudes.length === 0 ? (
          <p>No hay solicitudes registradas.</p>
        ) : (
          <div className="solicitudes-list">
            {solicitudes.map((item) => (
              <div 
                  className="solicitud-card clickable-card" 
                  key={item.id}
                  onClick={() => handleCardClick(item)} 
              >
                <p><strong>Nombre:</strong> <span>{item.nombre}</span></p>
                <p><strong>Tipo de crédito:</strong> <span>{item.tipoCredito}</span></p>
                <p className="resaltado"><strong>Monto:</strong> <span>{formatCardCurrency(item.monto)}</span></p>
                <p><strong>Email:</strong> <span>{item.email}</span></p>
              </div>
            ))}
          </div>
        )}
      </main>

      <SolicitudModal solicitud={selectedSolicitud} onClose={handleCloseModal} />

      <Footer />
    </>
  );
}

export default Solicitudes;