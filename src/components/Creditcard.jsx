export default function CreditCard({ nombre, montoMin, montoMax, tasa }) {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>Monto: ${montoMin} - ${montoMax}</p>
      <p>Tasa: {tasa}%</p>
    </div>
  );
}
