import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Solicitar() {
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

  function validateField(name, value) {
    switch (name) {
      case "email":
        return /\S+@\S+\.\S+/.test(value) ? "" : "Email inválido";
      case "cedula":
        return /^\d{6,10}$/.test(value) ? "" : "Cédula inválida";
      default:
        return value.trim() ? "" : "Campo requerido";
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    Object.keys(initial).forEach(key => {
      const err = validateField(key, form[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSuccess("Solicitud enviada con éxito.");
    setForm(initial);

    setTimeout(() => setSuccess(""), 3000);
  }

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="banner-solicitud">
        <img src="/img/solicitud.jpg" alt="Banner Solicitud" className="banner-img" />
      </section>

      {/* Contenido */}
      <main className="solicitud-container">
        <h2 className="titulo-formulario">Formulario de Solicitud</h2>
        <p className="subtitulo-formulario">
          Completa la información para iniciar tu solicitud de crédito.
        </p>

        <form className="formulario-solicitud" onSubmit={handleSubmit} noValidate>

          {/* DATOS PERSONALES */}
          <section className="form-section">
            <h3>Datos Personales</h3>

            {/* Nombre */}
            <label>Nombre completo</label>
            <input name="nombre" value={form.nombre} onChange={handleChange} />
            {errors.nombre && <small className="error">{errors.nombre}</small>}

            {/* Cédula */}
            <label>Cédula</label>
            <input name="cedula" value={form.cedula} onChange={handleChange} />
            {errors.cedula && <small className="error">{errors.cedula}</small>}

            {/* Email */}
            <label>Email</label>
            <input name="email" value={form.email} onChange={handleChange} />
            {errors.email && <small className="error">{errors.email}</small>}

            {/* Teléfono */}
            <label>Teléfono</label>
            <input name="telefono" value={form.telefono} onChange={handleChange} />
            {errors.telefono && <small className="error">{errors.telefono}</small>}
          </section>

          {/* DATOS LABORALES */}
          <section className="form-section">
            <h3>Datos Laborales</h3>

            <label>Empresa donde trabaja</label>
            <input name="empresa" value={form.empresa} onChange={handleChange} />
            {errors.empresa && <small className="error">{errors.empresa}</small>}

            <label>Cargo</label>
            <input name="cargo" value={form.cargo} onChange={handleChange} />
            {errors.cargo && <small className="error">{errors.cargo}</small>}

            <label>Ingresos mensuales</label>
            <input
              type="number"
              name="ingresos"
              value={form.ingresos}
              onChange={handleChange}
            />
            {errors.ingresos && <small className="error">{errors.ingresos}</small>}
          </section>

          {/* INFORMACIÓN DEL CRÉDITO */}
          <section className="form-section">
            <h3>Información del Crédito</h3>

            <label>Tipo de crédito</label>
            <select
              name="tipoCredito"
              value={form.tipoCredito}
              onChange={handleChange}
            >
              <option value="">-- Selecciona --</option>
              <option value="libre-inversion">Libre Inversión</option>
              <option value="vehiculo">Vehículo</option>
              <option value="vivienda">Vivienda</option>
              <option value="educativo">Educativo</option>
              <option value="empresarial">Empresarial</option>
              <option value="consumo">Consumo</option>
            </select>
            {errors.tipoCredito && (
              <small className="error">{errors.tipoCredito}</small>
            )}

            <label>Monto solicitado</label>
            <input
              type="number"
              name="monto"
              value={form.monto}
              onChange={handleChange}
            />
            {errors.monto && <small className="error">{errors.monto}</small>}

            <label>Plazo en meses</label>
            <input
              type="number"
              name="plazo"
              value={form.plazo}
              onChange={handleChange}
            />
            {errors.plazo && <small className="error">{errors.plazo}</small>}
          </section>

          <button type="submit" className="btn-enviar">
            Enviar Solicitud
          </button>

          {success && <p className="success">{success}</p>}
        </form>
      </main>

      <Footer />
    </>
  );
}
