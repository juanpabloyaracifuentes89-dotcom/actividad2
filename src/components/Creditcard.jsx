// src/components/CreditCard.jsx
import React from "react";

export default function CreditCard({ credit }) {
  // credit: { name, icon, rateMonthly, amountRange, termMax, description }
  return (
    <article className="credit-card" aria-label={credit.name}>
      <div className="card-header">
        <span className="icon">{credit.icon}</span>
        <h4>{credit.name}</h4>
      </div>
      <p>{credit.description}</p>
      <div className="detail">
        <div className="detail-item">
          <span className="label">Tasa De Interés:</span>
          <span className="value highlight">{(credit.rateMonthly * 100).toFixed(2)}% Mensual</span>
        </div>
        <div className="detail-item">
          <span className="label">Monto:</span>
          <span className="value">{credit.amountRange}</span>
        </div>
        <div className="detail-item">
          <span className="label">Plazo máximo:</span>
          <span className="value">{credit.termMax} Meses</span>
        </div>
      </div>
      <button className="btn-primary">Solicitar Crédito</button>
    </article>
  );
}
