// src/pages/Solicitar.jsx
import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import credits from "../data/creditsdata.js"; // <- asegúrate que este archivo exista y exporte default

export default function Solicitar() {
  // formulario controlado
  const initial = {
    nombre: "",
    cedula: "",
    email: "",
    telefono: "",
    empresa: "",
    cargo: "",
    ingresos: "",
    tipoCredito: "",
    monto: "",
    plazo: ""
  };

  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [requests, setRequests] = useState([]); // guardamos en memoria

  // cuando cambie tipo de crédito actualizamos plazo máximo
  const currentCredit = useMemo(
    () => credits.find((c) => c.name === form.tipoCredito) || null,
    [form.tipoCredito]
  );

  const maxMonths = currentCredit ? Number(currentCredit.maxMonths || 60) : 60;

  function validateField(name, value) {
    if (name === "email") {
      if (!value) return "Campo requerido";
      return /\S+@\S+\.\S+/.test(value) ? "" : "Email inválido";
    }
    if (name === "cedula") {
      if (!value) return "Campo requerido";
      return /^\d{6,10}$/.test(value) ? "" : "Cédula inválida (6-10 dígitos)";
    }
    if (name === "monto") {
      if (!value) return "Campo requerido";
      const v = Number(value);
      if (currentCredit && currentCredit.minAmount && currentCredit.maxAmount) {
        if (v < currentCredit.minAmount || v > currentCredit.maxAmount) {
          return `Monto fuera de rango (${currentCredit.minAmount} - ${currentCredit.maxAmount})`;
        }
      }
      return v > 0 ? "" : "Monto inválido";
    }
    if (name === "plazo") {
      if (!value) return "Campo requerido";
      const v = Number(value);
      return v >= 1 && v <= maxMonths ? "" : `Plazo debe ser entre 1 y ${maxMonths} meses`;
    }
    // default: required
    return value.toString().trim() ? "" : "Campo requerido";
  }

  function handleChange(e) {
    const { name, value } = e.target;
    // si cambia tipoCredito, reiniciamos plazo y monto para forzar revalidación
    setForm((p) => ({ ...p, [name]: value, ...(name === "tipoCredito" ? { plazo: "", monto: "" } : {}) }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  }

  function calcMonthlyPayment(principal, months, monthlyRatePercent) {
    // interés porcentual mensual (ej: 1.5 => 1.5%)
    const r = monthlyRatePercent / 100;
    const P = Number(principal);
    const n = Number(months);
    if (!P || !n || r === 0) {
      return P / n || 0;
    }
    // fórmula de cuota (cuota fija tipo amortización):
    const cuota = (P * r) / (1 - Math.pow(1 + r, -n));
    return cuota;
  }

  function handleSubmit(e) {
    e.preventDefault();
    // validar todo
    const newErrors = {};
    Object.keys(initial).forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // calcular cuota
    const tasa = currentCredit ? Number(currentCredit.interest) : 1.2; // por defecto si falta
    const cuota = calcMonthlyPayment(form.monto, form.plazo, tasa);

    // guardar solicitud en memoria
    const solicitud = {
      ...form,
      cuotaMensual: Math.round(cuota),
      totalPagar: Math.round(cuota * Number(form.plazo)),
      createdAt: new Date().toISOString()
    };
    setRequests((prev) => [solicitud, ...prev]);

    setSuccess("Solicitud enviada con éxito.");
    setForm(initial);
    setTimeout(() => setSuccess(""), 3000);
  }

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="banner-solicitud">
        <img src="/img/solicitud.jpg" alt="Banner solicitud" className="banner-img" />
      </section>

      {/* Contenedor - formulario centrado debajo del banner */}
      <main className="solicitud-container">
        <div className="solicitud-grid">
          <div className="solicitud-left">
            <h2 className="titulo-formulario">Formulario de Solicitud</h2>
            <p className="subtitulo-formulario">Completa la información para iniciar tu solicitud de crédito.</p>

            <form className="formulario-solicitud" onSubmit={handleSubmit} noValidate>
              {/* Datos Personales */}
              <div className="bloque-formulario">
                <h3>Datos Personales</h3>

                <label>Nombre completo</label>
                <input name="nombre" value={form.nombre} onChange={handleChange} className="input" />
                {errors.nombre && <small className="error">{errors.nombre}</small>}

                <label>Cédula</label>
                <input name="cedula" value={form.cedula} onChange={handleChange} className="input" />
                {errors.cedula && <small className="error">{errors.cedula}</small>}

                <label>Email</label>
                <input name="email" value={form.email} onChange={handleChange} className="input" />
                {errors.email && <small className="error">{errors.email}</small>}

                <label>Teléfono</label>
                <input name="telefono" value={form.telefono} onChange={handleChange} className="input" />
                {errors.telefono && <small className="error">{errors.telefono}</small>}
              </div>

              {/* Datos Laborales */}
              <div className="bloque-formulario">
                <h3>Datos Laborales</h3>

                <label>Empresa donde trabaja</label>
                <input name="empresa" value={form.empresa} onChange={handleChange} className="input" />
                {errors.empresa && <small className="error">{errors.empresa}</small>}

                <label>Cargo</label>
                <input name="cargo" value={form.cargo} onChange={handleChange} className="input" />
                {errors.cargo && <small className="error">{errors.cargo}</small>}

                <label>Ingresos mensuales</label>
                <input type="number" name="ingresos" value={form.ingresos} onChange={handleChange} className="input" />
                {errors.ingresos && <small className="error">{errors.ingresos}</small>}
              </div>

              {/* Información del Crédito */}
              <div className="bloque-formulario">
                <h3>Información del Crédito</h3>

                <label>Tipo de crédito</label>
                <select name="tipoCredito" value={form.tipoCredito} onChange={handleChange} className="input">
                  <option value="">-- Selecciona una opción --</option>
                  {credits.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
                {errors.tipoCredito && <small className="error">{errors.tipoCredito}</small>}

                <label>Monto solicitado</label>
                <input type="number" name="monto" value={form.monto} onChange={handleChange} className="input" placeholder={
                  currentCredit ? `${currentCredit.minAmount} - ${currentCredit.maxAmount}` : "Monto en COP"
                } />
                {errors.monto && <small className="error">{errors.monto}</small>}

                <label>Plazo en meses</label>
                <select name="plazo" value={form.plazo} onChange={handleChange} className="input" disabled={!form.tipoCredito}>
                  <option value="">-- Selecciona --</option>
                  {Array.from({ length: maxMonths }, (_, i) => i + 1).map((m) => (
                    <option key={m} value={m}>{m} meses</option>
                  ))}
                </select>
                {errors.plazo && <small className="error">{errors.plazo}</small>}
              </div>

              <button type="submit" className="btn-enviar">Enviar Solicitud</button>
              {success && <p className="success">{success}</p>}
            </form>
          </div>

          
        </div>
      </main>

      <Footer />
    </>
  );
}
